// Dependencies
import React, { useState } from "react";
import Head from "next/head";
import Countdown from "react-countdown";

// Styles
import {
	Details,
	DetailsContainer,
	ImageContainer,
	InfoContainer,
	InfoDescription,
	InfoTitle,
	OrderDetailsContainer,
	Section,
	SectionTitle,
	BigText,
	VirtualAccountNumber,
	OrderCardContainer,
	StepsContainer,
	QRImageContainer,
	QRImage,
	CountdownTime
} from "./OrderPayment.styles";

// Hooks
import { useGetTransactionDetailsQuery } from "../../api/transaction.api";
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// Utils
import { formatDateFull } from "../../utils/formatDate";
import formatToRupiah from "../../utils/formatToRupiah";
import getOrderStatus from "../../utils/getOrderStatus";
import paymentInstructions from "../../utils/paymentIntstructions";

// Components
import { Alert, CircularProgress, Grid, IconButton, Snackbar, Stack } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Tooltip from "../../components/Tooltip/Tooltip";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";
import Image from "next/image";
import Accordion from "../../components/Accordion/Accordion";
import OrderCard from "../../components/OrderCard/OrderCard";

const _iconSxProps = {
	sx: {
		width: { xs: 35, sm: 60, md: 120, lg: 150 },
		height: { xs: 35, sm: 60, md: 120, lg: 150 }
	}
};

const OrderDetails = () => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const router = useRouter();
	const { orderId } = router.query;
	const [successCopyTransactionNumber, setSuccessCopyTransactionNumber] = useState(false);
	const [successCopyVA, setSuccessCopyVA] = useState(false);
	const [successCopyBillerCode, setSuccessCopyBillerCode] = useState(false);

	const {
		data: resultData,
		isLoading: isGetOrderLoading,
		isSuccess: isGetOrderSuccess,
		error: getOrderErrorData,
		refetch: refetchOrder,
		isUninitialized: isGetOrderUninitialized
	} = useGetTransactionDetailsQuery(orderId as string, {
		skip: !isAuth,
		pollingInterval: 1000 * 30
	});
	const getOrderError: any = getOrderErrorData;
	const orderData = resultData?.data.transaction;

	const orderStatus = getOrderStatus(orderData?.order_status || "pending");
	const shipping = orderData?.shipping_details;
	const payment = orderData?.payment_details;
	const items = orderData?.item_details;

	const copyBillerCodeHandler = async () => {
		await navigator.clipboard.writeText(payment?.biller_code || "");
		setSuccessCopyBillerCode(true);
	};

	const copyVaNumberHandler = async () => {
		await navigator.clipboard.writeText(
			(payment?.payment_method === "mandiri" ? payment.bill_key : payment?.va_number) || ""
		);
		setSuccessCopyVA(true);
	};

	const copyTransactionNumberHandler = async () => {
		await navigator.clipboard.writeText(orderData?.id || "");
		setSuccessCopyTransactionNumber(true);
	};

	return (
		<>
			<Head>
				<title>
					Detail Pembayaran |{" "}
					{isGetOrderLoading
						? "Loading..."
						: !orderData
						? "Pesanan tidak ditemukan"
						: orderData?.id}
				</title>
			</Head>
			<OrderDetailsContainer>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={successCopyTransactionNumber}
					onClose={() => setSuccessCopyTransactionNumber(false)}
					message="No transaksi telah disalin!"
					key={"transaction_number_copy"}
					autoHideDuration={1500}
				/>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={successCopyVA}
					onClose={() => setSuccessCopyVA(false)}
					message="No Virtual Account telah disalin!"
					key={"va_number_copy"}
					autoHideDuration={1500}
				/>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={successCopyBillerCode}
					onClose={() => setSuccessCopyBillerCode(false)}
					message="Kode perusahaan telah disalin!"
					key={"biller_code_copy"}
					autoHideDuration={1500}
				/>

				<DetailsContainer>
					<PageTitle>Detail Pembayaran</PageTitle>
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
									{getOrderError?.data.message}
								</Alert>
								<BoxButton onClick={refetchOrder}>Try again</BoxButton>
							</FallbackContainer>
						)}
						{isGetOrderSuccess && orderData && shipping && payment && items && (
							<>
								<Grid item xs={12} md={6}>
									{orderData.order_status === "pending" && (
										<Details>
											<Section>
												<Stack direction="row" justifyContent="space-between">
													<BigText>
														{payment.payment_method === "gopay"
															? "GoPay"
															: `Bank ${payment.payment_method.toUpperCase()}`}
													</BigText>
													<ImageContainer>
														<Image
															src={`/images/${payment.payment_method}.png`}
															alt={"payment method logo"}
															height={200}
															width={400}
															layout="responsive"
														/>
													</ImageContainer>
												</Stack>
												{payment.payment_method === "mandiri" && (
													<Stack mb={2}>
														<InfoDescription>Kode Perusahaan</InfoDescription>
														<Stack
															direction="row"
															alignItems="center"
															justifyContent="space-between"
														>
															<VirtualAccountNumber>{payment.biller_code}</VirtualAccountNumber>
															<Button
																variant="outlined"
																size="small"
																color="primary"
																sx={{ fontWeight: 600 }}
																onClick={copyBillerCodeHandler}
															>
																Salin
															</Button>
														</Stack>
													</Stack>
												)}
												{payment && (payment.va_number || payment.bill_key) && (
													<Stack>
														<InfoDescription>No. Virtual Account</InfoDescription>
														<Stack
															direction="row"
															alignItems="center"
															justifyContent="space-between"
														>
															<VirtualAccountNumber>
																{payment.payment_method === "mandiri"
																	? payment.bill_key
																	: payment.va_number}
															</VirtualAccountNumber>
															<Button
																variant="outlined"
																size="small"
																color="primary"
																sx={{ fontWeight: 600 }}
																onClick={copyVaNumberHandler}
															>
																Salin
															</Button>
														</Stack>
													</Stack>
												)}
												{payment && payment.payment_method === "gopay" && payment.actions && (
													<QRImageContainer>
														<QRImage src={payment.actions[0].url} />
													</QRImageContainer>
												)}
											</Section>
											<Section>
												<Stack direction="row" justifyContent="space-between" alignItems="center">
													<InfoDescription>Jumlah bayar</InfoDescription>
													<InfoDescription>
														Bayar dalam{" "}
														<CountdownTime>
															<Countdown date={payment.expire_time} daysInHours={true} />
														</CountdownTime>
													</InfoDescription>
												</Stack>

												<BigText sx={{ mb: 1 }}>{formatToRupiah(+orderData.total)}</BigText>
												{payment.payment_method === "gopay" ? (
													<InfoDescription>
														Lakukan pembayaran melalui aplikasi Gojek / E-Wallet menggunakan QR Code
														di atas.
													</InfoDescription>
												) : (
													<InfoDescription>
														Lakukan pembayaran dari rekening Bank{" "}
														{payment.payment_method.toUpperCase()}
														&nbsp;ke nomor virtual account di atas.
													</InfoDescription>
												)}
											</Section>
											<Section>
												<SectionTitle>Instruksi pembayaran</SectionTitle>
												{paymentInstructions[payment.payment_method].map(instruction => (
													<Accordion
														key={instruction.label}
														title={instruction.label}
														description={
															<StepsContainer>
																<ol>
																	{instruction.steps.map(step => (
																		<li key={step} dangerouslySetInnerHTML={{ __html: step }} />
																	))}
																</ol>
															</StepsContainer>
														}
													/>
												))}
											</Section>
										</Details>
									)}
									{orderData.order_status !== "pending" && (
										<Details>
											<Section>
												<Stack
													justifyContent="center"
													alignItems="center"
													direction={{ xs: "row", sm: "column" }}
													gap={{ xs: 1, sm: 2 }}
													mt={{ xs: 3, md: 7, lg: 9 }}
												>
													{["process", "sent", "success"].includes(orderData.order_status) ? (
														<CheckCircleOutlineIcon {..._iconSxProps} color="primary" />
													) : (
														<HighlightOffIcon {..._iconSxProps} color="error" />
													)}
													<BigText>
														{["process", "sent", "success"].includes(orderData.order_status)
															? "Pembayaran telah dilakukan"
															: "Transaksi dibatalkan"}
													</BigText>
												</Stack>
											</Section>
										</Details>
									)}
								</Grid>
								<Grid item xs={12} md={6}>
									<Details>
										<Section>
											<SectionTitle>Detail produk</SectionTitle>
											<OrderCardContainer>
												{items.map(item => (
													<OrderCard
														key={item.product_id}
														title={item.title}
														sizeDesc={`EU ${item.product_size}`}
														qtyDesc={item.quantity.toString()}
														price={formatToRupiah(+item.price * +item.quantity)}
														imageUrl={(item?.images || [])[0] || "/images/no-image.png"}
													/>
												))}
											</OrderCardContainer>
										</Section>
										<Section>
											<SectionTitle>Informasi pesanan</SectionTitle>
											<InfoContainer>
												<InfoTitle>No. Transaksi</InfoTitle>
												<InfoDescription>
													<Tooltip title="Salin nomor transaksi">
														<IconButton sx={{ mr: 1 }} onClick={copyTransactionNumberHandler}>
															<ContentCopyIcon sx={{ fontSize: "1.8rem" }} />
														</IconButton>
													</Tooltip>
													<span>{orderData.id}</span>
												</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>Status Pesanan</InfoTitle>
												<InfoDescription>
													<StatusBadge color={orderStatus.color}>{orderStatus.label}</StatusBadge>
												</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>Tanggal Pembelian</InfoTitle>
												<InfoDescription>{formatDateFull(orderData.created_at)}</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>Subtotal Produk</InfoTitle>
												<InfoDescription>{formatToRupiah(+orderData.subtotal)}</InfoDescription>
											</InfoContainer>
											{+orderData.discount_total !== 0 && (
												<InfoContainer>
													<InfoTitle>Diskon / Potongan Harga</InfoTitle>
													<InfoDescription>
														{formatToRupiah(+orderData.discount_total)}
													</InfoDescription>
												</InfoContainer>
											)}
											<InfoContainer>
												<InfoTitle>Biaya Pengiriman</InfoTitle>
												<InfoDescription>{formatToRupiah(+shipping.shipping_cost)}</InfoDescription>
											</InfoContainer>
										</Section>
									</Details>
								</Grid>
							</>
						)}
					</Grid>
				</DetailsContainer>
			</OrderDetailsContainer>
		</>
	);
};

export default OrderDetails;
