// Dependencies
import React, { useMemo } from "react";
import Head from "next/head";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";

// Styles
import {
	Details,
	DetailsContainer,
	OrderReviewContainer,
	Section,
	BigText,
	OrderCardContainer,
	InputContainer
} from "./OrderReview.styles";

// Hooks
import { useCreateReviewsMutation, useGetTransactionDetailsQuery } from "../../api/transaction.api";
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Components
import { Alert, Box, CircularProgress, Grid, Rating, Stack } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";
import OrderCard from "../../components/OrderCard/OrderCard";
import { CreateReviewItem, TransactionItem } from "../../interfaces";
import TextInput from "../../components/TextInput/TextInput";

const _iconSxProps = {
	sx: {
		width: { xs: 35, sm: 60, md: 120, lg: 150 },
		height: { xs: 35, sm: 60, md: 120, lg: 150 }
	}
};

const ReviewSchema = Yup.object().shape({
	reviews: Yup.array().of(
		Yup.object().shape({
			rating: Yup.number().min(0.5).max(5).required(),
			review: Yup.string()
				.max(200, "Panjang ulasan maksimal 200 karakter")
				.required("Mohon berikan ulasan")
		})
	)
});

const OrderReview = () => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const router = useRouter();
	const { orderId } = router.query;

	const {
		data: resultData,
		isLoading: isGetOrderLoading,
		isSuccess: isGetOrderSuccess,
		error: getOrderErrorData,
		refetch: refetchOrder,
		isUninitialized: isGetOrderUninitialized
	} = useGetTransactionDetailsQuery(orderId as string, {
		skip: !isAuth
	});
	const getOrderError: any = getOrderErrorData;
	const orderData = resultData?.data.transaction;

	const [
		createReviews,
		{
			isLoading: isCreateReviewsLoading,
			error: createReviewsErrorData,
			isSuccess: isCreateReviewsSuccess,
			reset: resetCreateReviews
		}
	] = useCreateReviewsMutation();
	const createReviewsError: any = createReviewsErrorData;

	const createReviewsHandler = async (reviewsData: CreateReviewItem[]) => {
		if (orderData?.id && reviewsData) {
			const result = await createReviews({
				reviews: reviewsData.map(item => ({ ...item, rating: +item.rating * 2 })),
				transactionId: orderData?.id
			}).unwrap();

			if (result.status === "success") {
				resetCreateReviews();
			}
		}
	};

	const products =
		useMemo(() => {
			return orderData?.item_details.reduce((arr: TransactionItem[], curr) => {
				const existItemIndex = arr.findIndex(item => item.product_id === curr.product_id);

				if (existItemIndex !== -1) {
					const arrCopy = JSON.parse(JSON.stringify(arr));

					arrCopy[existItemIndex].product_size += `, EU ${curr.product_size}`;
					arrCopy[existItemIndex].quantity += curr.quantity;

					return arrCopy;
				} else {
					return [...arr, curr];
				}
			}, []);
		}, [orderData?.item_details]) || [];

	return (
		<>
			<Head>
				<title>
					Tinggalkan Ulasan |{" "}
					{isGetOrderLoading
						? "Loading..."
						: !orderData
						? "Pesanan tidak ditemukan"
						: orderData?.id}
				</title>
			</Head>
			<OrderReviewContainer>
				<DetailsContainer>
					<PageTitle>Tinggalkan Ulasan</PageTitle>
					<Grid container spacing={{ xs: 1, xl: 2 }}>
						<Grid item xs={12}>
							<Button
								variant="text"
								size="small"
								startIcon={<ArrowBackIosNewIcon />}
								onClick={() => router.push("/account/orders")}
							>
								Kembali
							</Button>
						</Grid>
						{(isGetOrderUninitialized || isGetOrderLoading) && (
							<FallbackContainer>
								<CircularProgress />
							</FallbackContainer>
						)}
						{!isGetOrderLoading && getOrderError && (
							<FallbackContainer>
								<Alert severity="error" sx={{ mb: 2 }}>
									{getOrderError?.data?.message || "Gagal memperoleh detail transaksi"}
								</Alert>
								<BoxButton onClick={refetchOrder}>Try again</BoxButton>
							</FallbackContainer>
						)}
						{isGetOrderSuccess && orderData && orderData.order_status !== "success" && (
							<Grid item xs={12}>
								<Details>
									<Section>
										<Stack
											justifyContent="center"
											alignItems="center"
											direction={{ xs: "row", sm: "column" }}
											gap={{ xs: 1, sm: 2 }}
											mt={{ xs: 3, md: 7, lg: 9 }}
										>
											<HighlightOffIcon {..._iconSxProps} color="error" />
											<BigText>Transaksi belum selesai</BigText>
										</Stack>
									</Section>
								</Details>
							</Grid>
						)}
						{isGetOrderSuccess && orderData && orderData?.is_reviewed && (
							<Grid item xs={12}>
								<Details>
									<Section>
										<Stack
											justifyContent="center"
											alignItems="center"
											direction={{ xs: "row", sm: "column" }}
											gap={{ xs: 1, sm: 2 }}
											mt={{ xs: 3, md: 7, lg: 9 }}
										>
											<CheckCircleOutlineIcon {..._iconSxProps} color="primary" />
											<BigText>Review telah dibuat</BigText>
										</Stack>
									</Section>
								</Details>
							</Grid>
						)}
						{!orderData?.is_reviewed && orderData?.order_status === "success" && (
							<Formik
								initialValues={{
									reviews: products.map(product => ({
										product_id: product.product_id,
										rating: 5,
										review: ""
									}))
								}}
								validationSchema={ReviewSchema}
								onSubmit={values => {
									createReviewsHandler(values.reviews);
								}}
							>
								{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
									<>
										<FieldArray
											name="reviews"
											render={_ => (
												<>
													{products.map((item, i) => (
														<Grid item xs={12} md={6} key={item.product_id}>
															<Details>
																<OrderCardContainer>
																	<OrderCard
																		title={item.title}
																		sizeDesc={`EU ${item.product_size}`}
																		qtyDesc={item.quantity.toString()}
																		price={formatToRupiah(+item.price * +item.quantity)}
																		imageUrl={(item?.images || [])[0] || "/images/no-image.png"}
																	/>
																</OrderCardContainer>
																<Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
																	<Rating
																		name={`reviews.${i}.rating`}
																		value={+values.reviews[i].rating}
																		size="large"
																		precision={0.5}
																		onChange={handleChange}
																		onBlur={handleBlur}
																	/>
																</Box>
																<InputContainer>
																	<TextInput
																		label="Ulasan anda mengenai produk*"
																		multiline
																		rows={4}
																		name={`reviews.${i}.review`}
																		value={values.reviews[i].review}
																		onChange={handleChange}
																		onBlur={handleBlur}
																		error={Boolean(
																			touched.reviews &&
																				touched.reviews[i]?.review &&
																				errors.reviews &&
																				errors.reviews[i]
																		)}
																		maxLength={200}
																		performant
																	/>
																</InputContainer>
																{touched.reviews &&
																	touched.reviews[i]?.review &&
																	errors.reviews &&
																	errors.reviews[i] && (
																		<Alert severity="error" sx={{ mt: 2 }}>
																			<>
																				{typeof errors.reviews[i] === "string"
																					? errors.reviews
																					: (errors.reviews[i] as { review: string })?.review}
																			</>
																		</Alert>
																	)}
															</Details>
														</Grid>
													))}
												</>
											)}
										/>
										<Grid item xs={12}>
											<Grid container>
												<Grid item xs={12} md={3} ml="auto">
													<Details sx={{ pt: 1 }}>
														<Button
															color="primary"
															type="submit"
															fullWidth
															size="small"
															onClick={() => handleSubmit()}
															loading={isCreateReviewsLoading}
														>
															Buat ulasan
														</Button>
													</Details>
												</Grid>
											</Grid>
										</Grid>
										{createReviewsError && (
											<Grid item xs={12} ml="auto">
												<Details sx={{ py: 0 }}>
													<Alert severity="error">
														{createReviewsError?.data?.message || "Gagal membuat review."}
													</Alert>
												</Details>
											</Grid>
										)}
									</>
								)}
							</Formik>
						)}
					</Grid>
				</DetailsContainer>
			</OrderReviewContainer>
		</>
	);
};

export default OrderReview;
