// Dependencies
import React, { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

// Actions
import { setUserCart } from "../../store/slices/globalSlice";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import useStepper from "../../hooks/useStepper";
import { useRouter } from "next/router";
import { useCheckoutMutation } from "../../api/transaction.api";
import { useGetCheckoutCartItemsQuery } from "../../api/cart.api";

// Styles
import { CheckoutContainer, ContentContainer, StepperContainer } from "./Checkout.styles";

// Types
import { CheckoutBody, CheckoutFormValues } from "../../interfaces";

// Utils
import scrollToTop from "../../utils/scrollToTop";

// Parts
import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";
import CheckoutData from "../CheckoutData/CheckoutData";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";
import CheckoutShipping from "../CheckoutShipping/CheckoutShipping";
import CheckoutPayment from "../CheckoutPayment/CheckoutPayment";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";

// Components
import { CircularProgress, Grid, Typography } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Stepper from "../../components/Stepper/Stepper";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";

const VoucherValidationSchema = {
	voucher_code: Yup.string().test(
		"10 characters long or empty",
		"Kode voucher tidak valid, harus terdiri dari 10 karakter",
		value => value === "" || value === undefined || value?.length === 10
	),
	voucher_type: Yup.string().when("voucher_code", {
		is: (value: string) => value !== "" && value !== undefined,
		then: Yup.string().not(["default"], "Voucher yang digunakan tidak valid").required(),
		otherwise: Yup.string()
	}),
	voucher_discount: Yup.number().when("voucher_code", {
		is: (value: string) => value !== "" && value !== undefined,
		then: Yup.number().min(0).required()
	})
};

const CheckoutSchema = [
	Yup.object().shape({
		...VoucherValidationSchema,
		address_id: Yup.number().not([-1], "Kamu harus memilih alamat tersimpan").required(),
		customer_note: Yup.string(),
		send_as_gift: Yup.boolean().required(),
		gift_note: Yup.string().when("send_as_gift", {
			is: true,
			then: Yup.string().required("Mohon berikan informasi mengenai hadiah")
		})
	}),
	Yup.object().shape({
		...VoucherValidationSchema,
		shipping_courier: Yup.string()
			.not(["default"], "Kamu harus memilih metode pengiriman")
			.required()
	}),
	Yup.object().shape({
		...VoucherValidationSchema,
		payment_method: Yup.string()
			.oneOf(["mandiri", "permata", "bri", "bni", "gopay"], "Metode pembayaran tidak valid")
			.required()
	})
];

const Checkout = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);
	const router = useRouter();

	const {
		data: cartItemsData,
		error: getCartItemsErrorData,
		isLoading: isGetCartItemsLoading,
		isSuccess: isGetCartItemsSuccess,
		isUninitialized: isGetCartItemsUninitialized
	} = useGetCheckoutCartItemsQuery(isAuth, { skip: !isAuth });
	const getCartItemsError: any = getCartItemsErrorData;
	const noCartItemsDataFound = cartItemsData?.data.cart.length === 0;

	const { activeStep, backHandler, nextHandler } = useStepper();
	const [formInitialValues, setFormInitialValues] = useState<CheckoutFormValues>({
		voucher_code: "",
		voucher_type: "default",
		voucher_discount: 0,
		address_id: -1,
		customer_note: "",
		send_as_gift: false,
		gift_note: "",
		shipping_courier: "default",
		payment_method: "gopay"
	});

	const [
		checkoutHandler,
		{
			data: checkoutResultData,
			isLoading: isCheckoutLoading,
			error: checkoutErrorData,
			isSuccess: isCheckoutSuccess
		}
	] = useCheckoutMutation();
	const checkoutResult = checkoutResultData?.data.transaction;
	const checkoutError: any = checkoutErrorData;

	const goBackHandler = () => {
		if (activeStep === 0) return router.replace("/cart");
		backHandler();
		scrollToTop();
	};

	const submitHandler = async (
		values: CheckoutFormValues,
		actions: FormikHelpers<CheckoutFormValues>
	) => {
		if (activeStep === 2 && !isCheckoutLoading && !isCheckoutSuccess) {
			const checkoutData: CheckoutBody = {
				address_id: values.address_id.toString(),
				payment_method: values.payment_method,
				shipping_courier: values.shipping_courier,
				voucher_code: values.voucher_code,
				customer_note: values.customer_note,
				...(values.send_as_gift && { gift_note: values.gift_note })
			};

			const result = await checkoutHandler(checkoutData).unwrap();
			if (result.data.transaction) {
				nextHandler();
				scrollToTop();
				dispatch(setUserCart({ cart: [] }));
			}
			actions.setTouched({});
			actions.setSubmitting(false);
			return;
		}

		nextHandler();
		scrollToTop();
		actions.setTouched({});
		actions.setSubmitting(false);
	};

	const isInformation = activeStep === 0;
	const isShipping = activeStep === 1;
	const isPayment = activeStep === 2;
	const isSuccess = activeStep === 3;

	return (
		<CheckoutContainer>
			<PageTitle>Checkout</PageTitle>
			{(checkoutResult ||
				(isGetCartItemsSuccess && !getCartItemsError && !noCartItemsDataFound)) && (
				<>
					<StepperContainer>
						<Stepper steps={["Informasi", "Pengiriman", "Pembayaran"]} activeStep={activeStep} />
					</StepperContainer>
					<ContentContainer>
						<Formik
							initialValues={formInitialValues}
							validationSchema={CheckoutSchema[activeStep]}
							onSubmit={submitHandler}
							enableReinitialize={true}
						>
							{({ handleSubmit }) => (
								<form onSubmit={handleSubmit}>
									<Grid container spacing={1}>
										<>
											{isInformation && (
												<CheckoutInfo setFormInitialValues={setFormInitialValues} />
											)}
											{isShipping && (
												<CheckoutShipping setFormInitialValues={setFormInitialValues} />
											)}
											{isPayment && <CheckoutPayment />}
											{isSuccess && checkoutResult && (
												<CheckoutSuccess checkoutResultData={checkoutResult} />
											)}
											{!isSuccess && <CheckoutDetail />}
										</>
										{!isSuccess && (
											<CheckoutData
												backHandler={goBackHandler}
												activeStep={activeStep}
												isCheckoutLoading={isCheckoutLoading}
												checkoutError={checkoutError}
											/>
										)}
									</Grid>
								</form>
							)}
						</Formik>
					</ContentContainer>
				</>
			)}
			{(isGetCartItemsUninitialized || isGetCartItemsLoading) && (
				<FallbackContainer sx={{ minHeight: "50vh" }}>
					<CircularProgress />
				</FallbackContainer>
			)}
			{!checkoutResultData && noCartItemsDataFound && (
				<FallbackContainer sx={{ minHeight: "50vh" }}>
					<Typography>You have no item in your cart!</Typography>
					<BoxButton onClick={() => router.push("/products")} sx={{ mt: 2 }}>
						{" "}
						Belanja sekarang
					</BoxButton>
				</FallbackContainer>
			)}
		</CheckoutContainer>
	);
};

export default Checkout;
