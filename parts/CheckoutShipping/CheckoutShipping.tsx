// Dependencies
import React, { useEffect } from "react";

// Styles
import {
	CostItemDetail,
	CourierImage,
	ShippingCostItem,
	CostItemTitle,
	EstimatedTime,
	CostItemPrice
} from "./CheckoutShipping.styles";
import { InputContainer, OptionContainer, Subtitle } from "../Checkout/Checkout.styles";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Hooks
import { useFormikContext } from "formik";
import { useGetShippingCostByAddressIdQuery } from "../../api/data.api";

// Types
import { CheckoutFormValues, ShippingCost } from "../../interfaces";

// Components
import {
	Alert,
	CircularProgress,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Stack,
	Typography
} from "@mui/material";
import Image from "next/image";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";

interface CheckoutShippingProps {
	setFormInitialValues: React.Dispatch<React.SetStateAction<CheckoutFormValues>>;
}

const CheckoutShipping = ({ setFormInitialValues }: CheckoutShippingProps) => {
	const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } =
		useFormikContext<CheckoutFormValues>();

	const {
		data: shippingCostsData,
		isLoading: isGetShippingCostsLoading,
		isUninitialized: isGetShippingCostsUninitialized,
		isFetching: isGetShippingCostsFetching,
		isSuccess: isGetShippingCostsSuccess,
		error: getShippingCostsErrorData,
		refetch: refetchShippingCosts
	} = useGetShippingCostByAddressIdQuery(values.address_id, { skip: values.address_id === -1 });
	const getCartItemsError: any = getShippingCostsErrorData;
	const noShippingCostsDataFound = shippingCostsData?.data.costs.length === 0;

	useEffect(() => {
		if (
			shippingCostsData &&
			isGetShippingCostsSuccess &&
			!noShippingCostsDataFound &&
			values.shipping_courier === "default"
		) {
			const shippingItem = shippingCostsData.data.costs[0];

			setFormInitialValues({
				...values,
				shipping_courier: `${shippingItem.courier} ${shippingItem.service} ${shippingItem.value}`
			});
		}
	}, [
		isGetShippingCostsSuccess,
		noShippingCostsDataFound,
		setFormInitialValues,
		shippingCostsData,
		values
	]);

	return (
		<Grid item xs={12} lg={7} xl={8}>
			<Subtitle>Metode pengiriman</Subtitle>
			<RadioGroup
				value={values.shipping_courier}
				name="shipping_courier"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setFieldValue("shipping_courier", (e.target as HTMLInputElement).value);
				}}
			>
				<InputContainer>
					{!isGetShippingCostsLoading && getShippingCostsErrorData && (
						<FallbackContainer>
							<Alert severity="error" sx={{ mb: 2 }}>
								{getCartItemsError?.data?.message}
							</Alert>
							<BoxButton onClick={refetchShippingCosts}>Try again</BoxButton>
						</FallbackContainer>
					)}
					{(isGetShippingCostsLoading || isGetShippingCostsUninitialized) && (
						<FallbackContainer>
							<CircularProgress />
						</FallbackContainer>
					)}
					{!isGetShippingCostsLoading && isGetShippingCostsSuccess && noShippingCostsDataFound && (
						<FallbackContainer>
							<Typography>No shipping method found! Please contact our admin.</Typography>
						</FallbackContainer>
					)}
					{shippingCostsData &&
						isGetShippingCostsSuccess &&
						!noShippingCostsDataFound &&
						shippingCostsData.data.costs.map((cost: ShippingCost) => (
							<OptionContainer
								key={`${cost.courier} ${cost.service}`}
								selected={
									values.shipping_courier === `${cost.courier} ${cost.service} ${cost.value}`
								}
							>
								<FormControlLabel
									value={`${cost.courier} ${cost.service} ${cost.value}`}
									control={<Radio />}
									sx={{
										p: "1rem 1.5rem 1rem 1rem",
										width: "100%",
										m: 0,
										"& span:nth-of-type(2)": {
											width: "100%"
										}
									}}
									label={
										<ShippingCostItem>
											<CostItemDetail>
												<CourierImage>
													<Image
														src={`/images/${cost.courier}.png`}
														alt={cost.courier + cost.service}
														height={200}
														width={400}
														layout="responsive"
													/>
												</CourierImage>
												<Stack>
													<CostItemTitle>{`${cost.courier} ${cost.service}`}</CostItemTitle>
													<EstimatedTime>({cost.etd} hari)</EstimatedTime>
												</Stack>
											</CostItemDetail>
											<CostItemPrice>{formatToRupiah(cost.value)}</CostItemPrice>
										</ShippingCostItem>
									}
								/>
							</OptionContainer>
						))}
					{touched.shipping_courier && errors.shipping_courier && (
						<Alert severity="error" sx={{ mb: 2 }}>
							{errors.shipping_courier}
						</Alert>
					)}
				</InputContainer>
			</RadioGroup>
			<Typography sx={{ mb: 3 }}>
				*Estimasi waktu pengiriman belum termasuk waktu pengerjaan (Pre-order)
			</Typography>
		</Grid>
	);
};

export default CheckoutShipping;
