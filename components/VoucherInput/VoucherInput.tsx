// Dependencies
import React from "react";

// Styles
import {
	ContentTitle,
	InputContainer,
	ResultInfo,
	VoucherInputContainer
} from "./VoucherInput.styles";

// Icons
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

// Components
import { Divider, Grid, Typography } from "@mui/material";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const VoucherInput = () => {
	return (
		<VoucherInputContainer>
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
		</VoucherInputContainer>
	);
};

export default VoucherInput;
