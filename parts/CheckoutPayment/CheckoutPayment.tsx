// Dependencies
import React from "react";

// Styles
import { InputContainer, OptionContainer, Subtitle } from "../Checkout/Checkout.styles";
import {
	PaymentMethodImage,
	PaymentMethodItem,
	PaymentMethodTitle
} from "./CheckoutPayment.styles";

// Types
import { CheckoutFormValues } from "../../interfaces";

// Hooks
import { useFormikContext } from "formik";

// Components
import { Alert, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import Image from "next/image";

const paymentMethods = [
	{
		name: "gopay",
		label: "Gopay"
	},
	{
		name: "mandiri",
		label: "Mandiri Virtual Account"
	},
	{
		name: "bni",
		label: "BNI Virtual Account"
	},
	{
		name: "bri",
		label: "BRI Virtual Account"
	},
	{
		name: "permata",
		label: "Permata Virtual Account"
	}
];

const CheckoutPayment = () => {
	const { values, errors, touched, handleChange } = useFormikContext<CheckoutFormValues>();

	return (
		<Grid item xs={12} lg={7} xl={8}>
			<Subtitle>Metode pembayaran</Subtitle>
			<RadioGroup value={values.payment_method} name="payment_method" onChange={handleChange}>
				<InputContainer>
					{paymentMethods.map((method, i) => (
						<OptionContainer key={method.name} selected={method.name === values.payment_method}>
							<FormControlLabel
								value={method.name}
								control={
									<Radio
										inputProps={{
											// @ts-ignore
											"data-testid": `payment-method-${i + 1}`
										}}
									/>
								}
								sx={{
									p: "1rem 1.5rem 1rem 1rem",
									width: "100%",
									m: 0,
									"& span:nth-of-type(2)": {
										width: "100%"
									}
								}}
								label={
									<PaymentMethodItem>
										<PaymentMethodTitle>{method.label}</PaymentMethodTitle>
										<PaymentMethodImage>
											<Image
												src={`/images/${method.name}.png`}
												alt={method.label}
												height={200}
												width={400}
												layout="responsive"
											/>
										</PaymentMethodImage>
									</PaymentMethodItem>
								}
							/>
						</OptionContainer>
					))}
					{touched.payment_method && errors.payment_method && (
						<Alert severity="error" sx={{ mb: 2 }}>
							{errors.payment_method}
						</Alert>
					)}
				</InputContainer>
			</RadioGroup>
		</Grid>
	);
};

export default CheckoutPayment;
