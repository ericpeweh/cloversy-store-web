// Dependencies
import React from "react";

// Styles
import {
	CartContainer,
	CartContentContainer,
	ContentContainer,
	ContentTitle,
	InputContainer,
	ResultInfo
} from "./Cart.styles";

// Icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import PageTitle from "../PageTitle/PageTitle";
import PageBreadcrumbs from "../PageBreadcrumbs/PageBreadcrumbs";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import CartTable from "../CartTable/CartTable";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { Box } from "@mui/system";

const links = [
	{ label: "Beranda", url: "#" },
	{ label: "Keranjang Anda", url: "current" }
];

const Cart = () => {
	return (
		<CartContainer>
			<PageBreadcrumbs links={links} />
			<PageTitle>Keranjang anda</PageTitle>
			<CartContentContainer container>
				<CartTable />
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<ContentContainer>
							<ContentTitle>Estimasi Biaya Pengiriman</ContentTitle>
							<InputContainer direction="row" alignItems="center" spacing={2}>
								<SelectInput
									label="Kabupaten / Kota"
									value={"Pontianak"}
									options={["Pontianak", "Jakarta", "Yogyakarta"]}
								/>
								<SelectInput
									label="Kecamatan"
									value={"Pontianak Kota"}
									options={[
										"Pontianak Kota",
										"Pontianak Utara",
										"Pontianak Timur",
										"Pontianak Selatan",
										"Pontianak Barat",
										"Pontianak Tenggara"
									]}
								/>
							</InputContainer>
							<InputContainer sx={{ pt: 0 }} direction="row" spacing={2}>
								<Button fullWidth>Kalkulasi</Button>
								<Button fullWidth color="primary" startIcon={<LocalShippingOutlinedIcon />}>
									Ganti Ekspedisi
								</Button>
							</InputContainer>
							<Divider />
							<ResultInfo container spacing={3}>
								<Grid item xs={6}>
									<Typography>
										<strong>Ekspedisi:</strong> JNE OKE (3-6 hari)
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography>
										<strong>Biaya kirim:</strong> Rp120.000
									</Typography>
								</Grid>
							</ResultInfo>
						</ContentContainer>
					</Grid>
					<Grid item xs={6}>
						<ContentContainer>
							<ContentTitle>Kode / Voucher Diskon</ContentTitle>
							<InputContainer direction="row" alignItems="center" spacing={2}>
								<TextInput label="Kode Voucher" id="input-voucher" />
								<Button fullWidth sx={{ width: "30rem", alignSelf: "stretch" }}>
									Gunakan kode
								</Button>
							</InputContainer>
							<Divider variant="middle">
								<Typography variant="body2">ATAU</Typography>
							</Divider>
							<InputContainer direction="row" spacing={2}>
								<Button fullWidth color="primary" startIcon={<ConfirmationNumberOutlinedIcon />}>
									Pilih voucher
								</Button>
							</InputContainer>
							<Divider />
							<ResultInfo container spacing={3}>
								<Grid item xs={6}>
									<Typography>
										<strong>Nama voucher:</strong> Diskon Lebaran 2022
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography>
										<strong>Promo:</strong> - Rp20.000
									</Typography>
								</Grid>
							</ResultInfo>
						</ContentContainer>
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
						<Button startIcon={<ShoppingCartCheckoutIcon />}>Checkout</Button>
					</Stack>
				</Box>
			</CartContentContainer>
		</CartContainer>
	);
};

export default Cart;
