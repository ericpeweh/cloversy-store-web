// Dependencies
import React, { useEffect, useState } from "react";
import { Formik, FormikHelpers, FormikTouched } from "formik";
import * as Yup from "yup";

// Hooks
import { useRouter } from "next/router";
import useStepper from "../../hooks/useStepper";
import { useCheckoutMutation } from "../../api/transaction.api";

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
import { Grid } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Stepper from "../../components/Stepper/Stepper";

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
		order_note: Yup.string(),
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
	const router = useRouter();
	const { activeStep, backHandler, nextHandler } = useStepper();
	const [formInitialValues, setFormInitialValues] = useState<CheckoutFormValues>({
		voucher_code: "",
		voucher_type: "default",
		voucher_discount: 0,
		address_id: -1,
		order_note: "",
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
			isSuccess: isCheckoutSuccess,
			reset: resetCheckout
		}
	] = useCheckoutMutation();
	const checkoutResult = checkoutResultData?.data.newTransaction;
	const checkoutError: any = checkoutErrorData;

	// Show order success page
	useEffect(() => {
		if (isCheckoutSuccess) {
			nextHandler();
			scrollToTop();
		}

		return () => {};
	}, [isCheckoutSuccess, nextHandler]);

	const goBackHandler = () => {
		if (activeStep === 0) return router.replace("/cart");
		backHandler();
		scrollToTop();
	};

	const submitHandler = (
		values: CheckoutFormValues,
		actions: FormikHelpers<CheckoutFormValues>
	) => {
		if (activeStep === 2 && !isCheckoutLoading && !isCheckoutSuccess) {
			const checkoutData: CheckoutBody = {
				address_id: values.address_id.toString(),
				payment_method: values.payment_method,
				shipping_courier: values.shipping_courier,
				voucher_code: values.voucher_code,
				order_note: values.order_note,
				...(values.send_as_gift && { gift_note: values.gift_note })
			};

			return checkoutHandler(checkoutData);
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
									{isInformation && <CheckoutInfo setFormInitialValues={setFormInitialValues} />}
									{isShipping && <CheckoutShipping setFormInitialValues={setFormInitialValues} />}
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
		</CheckoutContainer>
	);
};

export default Checkout;
