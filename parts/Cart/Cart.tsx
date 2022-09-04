// Dependencies
import React from "react";
import { useRouter } from "next/router";

// Styles
import { CartContainer, CartContentContainer } from "./Cart.styles";

// Icons
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import CartTable from "../../components/CartTable/CartTable";
import Button from "../../components/Button/Button";
import ShippingInput from "../../components/ShippingInput/ShippingInput";
import VoucherInput from "../../components/VoucherInput/VoucherInput";

const links = [
	{ label: "Beranda", url: "#" },
	{ label: "Keranjang Anda", url: "current" }
];

const Cart = () => {
	const router = useRouter();

	const checkoutHandler = () => router.push("/checkout");

	return (
		<CartContainer>
			<PageBreadcrumbs links={links} />
			<PageTitle>Keranjang anda</PageTitle>
			<CartContentContainer container>
				<CartTable />
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<ShippingInput />
					</Grid>
					<Grid item xs={12} sm={6}>
						<VoucherInput />
					</Grid>
				</Grid>
				<Box sx={{ width: "100%" }}>
					<Divider flexItem sx={{ my: 4 }} />
					<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
						<Typography textAlign="right" fontWeight="bold">
							Subtotal:
						</Typography>
						<Typography textAlign="right" sx={{ minWidth: "13rem" }}>
							Rp123.000.000
						</Typography>
					</Stack>
					<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
						<Typography textAlign="right" fontWeight="bold">
							Pengiriman:
						</Typography>
						<Typography textAlign="right" sx={{ minWidth: "13rem" }}>
							Rp120.000
						</Typography>
					</Stack>
					<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1}>
						<Typography textAlign="right" fontWeight="bold">
							Jumlah:
						</Typography>
						<Typography textAlign="right" sx={{ minWidth: "13rem" }}>
							Rp123.120.000
						</Typography>
					</Stack>
					<Stack direction="row" justifyContent="space-between" mt={3}>
						<Button variant="outlined" startIcon={<ArrowBackIcon />}>
							Lanjutkan berbelanja
						</Button>
						<Button startIcon={<ShoppingCartCheckoutIcon />} onClick={checkoutHandler}>
							Checkout
						</Button>
					</Stack>
				</Box>
			</CartContentContainer>
		</CartContainer>
	);
};

export default Cart;
