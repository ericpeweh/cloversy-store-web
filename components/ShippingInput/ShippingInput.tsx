// Dependencies
import React from "react";

// Styles
import {
	ContentTitle,
	InputContainer,
	ResultInfo,
	ShippingInputContainer
} from "./ShippingInput.styles";

// Icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

// Components
import Button from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import { Divider, Grid, Typography } from "@mui/material";

const ShippingInput = () => {
	return (
		<ShippingInputContainer>
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
		</ShippingInputContainer>
	);
};

export default ShippingInput;
