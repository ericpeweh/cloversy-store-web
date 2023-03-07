// Dependencies
import React, { useMemo } from "react";

// Styles
import { SummaryDesc, SummaryTitle, TotalAmount } from "../Checkout/Checkout.styles";

// Components
import { Alert, Box, Divider, Stack } from "@mui/material";
import Button from "../../components/Button/Button";

// Types
import { CartItemDetails, CheckoutFormValues } from "../../interfaces";

// Hooks
import { useGetCheckoutCartItemsQuery } from "../../api/cart.api";
import useSelector from "../../hooks/useSelector";
import { useFormikContext } from "formik";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";

interface CheckoutDataProps {
	backHandler: () => void;
	activeStep: number;
	isCheckoutLoading: boolean;
	checkoutError: { data: { message: string } };
}

const CheckoutData = ({
	backHandler,
	activeStep,
	checkoutError,
	isCheckoutLoading
}: CheckoutDataProps) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const { values } = useFormikContext<CheckoutFormValues>();

	const { data: cartItemsData } = useGetCheckoutCartItemsQuery(isAuth, { skip: !isAuth });

	const subtotal = useMemo(
		() =>
			cartItemsData?.data.cart?.reduce(
				(total: number, curr: CartItemDetails) => (total += curr.price * curr.quantity),
				0
			) || 0,
		[cartItemsData?.data.cart]
	);

	const discount =
		values.voucher_type === "value"
			? +values.voucher_discount
			: subtotal * (+values.voucher_discount / 100);

	const shippingCost = +values.shipping_courier.split(" ")[2] || 0;

	const isInformation = activeStep === 0;
	const isShipping = activeStep === 1;
	const isPayment = activeStep === 2;

	return (
		<Box sx={{ width: "100%" }}>
			<Divider flexItem sx={{ my: 4 }} />
			<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
				<SummaryTitle>Subtotal:</SummaryTitle>
				<SummaryDesc>{formatToRupiah(subtotal)}</SummaryDesc>
			</Stack>
			{values.voucher_code && values.voucher_discount && values.voucher_type !== "default" && (
				<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
					<SummaryTitle>Potongan Harga:</SummaryTitle>
					<SummaryDesc>- {formatToRupiah(discount)}</SummaryDesc>
				</Stack>
			)}
			<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
				<SummaryTitle>Biaya Pengiriman:</SummaryTitle>
				<SummaryDesc>
					{values.shipping_courier === "default" ? "Belum dihitung" : formatToRupiah(shippingCost)}
				</SummaryDesc>
			</Stack>
			<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
				<TotalAmount>Total:</TotalAmount>
				<TotalAmount>{formatToRupiah(subtotal + shippingCost - discount)}</TotalAmount>
			</Stack>

			<Stack direction="row" justifyContent={"space-between"} mt={3}>
				<Button
					variant="outlined"
					startIcon={<ArrowBackIcon />}
					onClick={backHandler}
					sx={{ ml: { xs: 2, lg: 0 } }}
				>
					{isInformation ? "Kembali ke keranjang" : "Kembali"}
				</Button>

				<Button
					endIcon={isPayment ? <CheckIcon /> : <ArrowForwardIcon />}
					type="submit"
					loading={isCheckoutLoading}
				>
					{isPayment ? "Buat Pesanan" : "Selanjutnya"}
				</Button>
			</Stack>
			{checkoutError && (
				<Alert severity="error" sx={{ mt: 2, ml: { xs: 2, lg: 0 } }}>
					{checkoutError?.data?.message || "Error occured while fetching checkout data."}
				</Alert>
			)}
		</Box>
	);
};

export default CheckoutData;
