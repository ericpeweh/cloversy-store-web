// Dependencies
import React, { useState } from "react";

// Hooks
import useStepper from "../../hooks/useStepper";
import useModal from "../../hooks/useModal";

// Styles
import {
	CheckoutContainer,
	ConfirmationContainer,
	ConfirmationDesc,
	ConfirmationTitle,
	ContentContainer,
	FormContainer,
	OrderCardsContainer,
	StepperContainer
} from "./Checkout.styles";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaymentsIcon from "@mui/icons-material/Payments";

// Components
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Stepper from "../../components/Stepper/Stepper";
import CartTable from "../../components/CartTable/CartTable";
import ShippingInput from "../../components/ShippingInput/ShippingInput";
import VoucherInput from "../../components/VoucherInput/VoucherInput";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import Checkbox from "../../components/Checkbox/Checkbox";
import OrderCard from "../../components/OrderCard/OrderCard";
import AddressPickerModal from "../../components/AddressPickerModal/AddressPickerModal";

const Checkout = () => {
	const {
		isOpen: isChooseAddressModalOpen,
		openHandler: openChooseAddressModalHandler,
		closeHandler: closeChooseAddressModalHandler
	} = useModal();
	const { activeStep, backHandler, nextHandler } = useStepper();
	const [useAvailableAddress, setUseAvailableAddress] = useState(false);
	const [sendAsGift, setSendAsGift] = useState(false);

	const isOrderSummary = activeStep === 0;
	const isAddressInfo = activeStep === 1;
	const isConfirmation = activeStep === 2;

	return (
		<CheckoutContainer>
			<AddressPickerModal
				open={isChooseAddressModalOpen}
				onClose={closeChooseAddressModalHandler}
			/>
			<PageTitle>Checkout</PageTitle>
			<StepperContainer>
				<Stepper
					steps={["Detail Pesanan", "Alamat & Informasi", "Pesanan dikonfirmasi"]}
					activeStep={activeStep}
				/>
			</StepperContainer>
			<ContentContainer>
				<Grid container spacing={{ xs: 1, lg: 2, xl: 3 }}>
					{isOrderSummary && (
						<>
							<Grid item xs={12}>
								<CartTable readOnly />
							</Grid>
							<Grid item xs={12} sm={6}>
								<ShippingInput />
							</Grid>
							<Grid item xs={12} sm={6}>
								<VoucherInput />
							</Grid>
						</>
					)}
					{isAddressInfo && (
						<>
							<Grid item md={12} lg={7} xl={8}>
								<FormContainer>
									<Grid container spacing={{ xs: 2, md: 3 }}>
										<Grid item xs={12} sm={6}>
											<TextInput label="Nama Penerima" id="namaPenerima" />
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextInput label="Nomor HP" id="nomorHP" />
										</Grid>

										<Grid item xs={12} sm={6}>
											<SelectInput
												options={[
													"Kalimantan Barat",
													"Kalimantan Utara",
													"Kalimantan Timur",
													"Kalimantan Selatan",
													"Kalimantan Tengah"
												]}
												value="Kalimantan Barat"
												label="Kabupaten / Kota"
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<SelectInput
												options={[
													"Pontianak Barat",
													"Pontianak Utara",
													"Pontianak Timur",
													"Pontianak Selatan",
													"Pontianak Tengah",
													"Pontianak Tenggara"
												]}
												value="Pontianak Utara"
												label="Kecamatan"
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextInput label="Kode Pos" id="kodePos" />
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextInput label="Catatan Pengiriman" id="catatan" />
										</Grid>
										<Grid item xs={12}>
											<TextInput label="Alamat Lengkap" id="alamatLengkap" multiline rows={4} />
										</Grid>
										<Grid item xs={12}>
											<TextInput
												label="Catatan Pesanan (optional)"
												id="catatan"
												multiline
												rows={2}
											/>
										</Grid>

										<Grid item xs={12}>
											<Divider flexItem>
												<Typography variant="body2">ATAU</Typography>
											</Divider>
										</Grid>
										<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
											<Button color="primary" onClick={openChooseAddressModalHandler}>
												Pilih alamat tersimpan
											</Button>
										</Grid>
										<Grid item xs={12}>
											<Checkbox
												label={
													<Stack direction="row" alignItems="center" gap={1}>
														<Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.6rem" } }}>
															Kirim sebagai hadiah
														</Typography>
														<CardGiftcardIcon />
													</Stack>
												}
												checked={sendAsGift}
												onChange={setSendAsGift}
											/>
										</Grid>
										{sendAsGift && (
											<Grid item xs={12}>
												<TextInput
													label="Catatan hadiah (permintaan)"
													id="catatan"
													multiline
													rows={4}
												/>
											</Grid>
										)}
									</Grid>
								</FormContainer>
							</Grid>
							<Grid item xs={12} md={12} lg={5} xl={4}>
								<OrderCardsContainer>
									<OrderCard
										title="Nike AF1 Homesick"
										sizeDesc="EU 40"
										qtyDesc="2"
										price="6.240.000"
									/>
									<Divider flexItem />
									<OrderCard
										title="Nike AF1 Homesick"
										sizeDesc="EU 40"
										qtyDesc="2"
										price="6.240.000"
									/>
									<Divider flexItem />
									<OrderCard
										title="Ventela Lost Angel"
										sizeDesc="EU 37"
										qtyDesc="1"
										price="700.000"
									/>
								</OrderCardsContainer>
							</Grid>
						</>
					)}
					{isConfirmation && (
						<>
							<Grid item xs={12}>
								<ConfirmationContainer>
									<CheckCircleIcon sx={{ width: 200, height: 200 }} color="primary" />
									<ConfirmationTitle>Terima Kasih!</ConfirmationTitle>
									<ConfirmationDesc>
										Pesanan telah berhasil dibuat. Detail pesanan akan dikirimkan ke alamat email
										anda.
									</ConfirmationDesc>
									<ConfirmationDesc>
										Klik tombol dibawah untuk melakukan pembayaran.
									</ConfirmationDesc>
									<Stack direction="row" gap={1} sx={{ mt: 5 }}>
										<Button variant="outlined">Lihat daftar pesanan</Button>
										<Button color="primary" startIcon={<PaymentsIcon />}>
											Bayar sekarang
										</Button>
									</Stack>
								</ConfirmationContainer>
							</Grid>
						</>
					)}
					{!isConfirmation && (
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
							<Stack
								direction="row"
								justifyContent={isOrderSummary ? "flex-end" : "space-between"}
								mt={3}
							>
								{!isOrderSummary && (
									<Button
										variant="outlined"
										startIcon={<ArrowBackIcon />}
										onClick={backHandler}
										sx={{ ml: { xs: 2, sm: 0 } }}
									>
										Kembali
									</Button>
								)}
								<Button
									endIcon={isAddressInfo ? <CheckIcon /> : <ArrowForwardIcon />}
									onClick={nextHandler}
								>
									{isAddressInfo ? "Buat Pesanan" : "Selanjutnya"}
								</Button>
							</Stack>
						</Box>
					)}
				</Grid>
			</ContentContainer>
		</CheckoutContainer>
	);
};

export default Checkout;
