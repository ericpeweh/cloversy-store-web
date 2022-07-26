// Dependencies
import React, { useState } from "react";

// Styles
import {
	AddAddressModalContainer,
	FormContainer,
	InputContainer,
	InputLimitText,
	ModalTitle
} from "./InputAddressModal.styles";

// Components
import CloseButton from "../CloseButton/CloseButton";
import TextInput from "../TextInput/TextInput";
import { Divider, Grid } from "@mui/material";
import SelectInput from "../SelectInput/SelectInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

interface AddAddressModalProps {
	modalTitle: string;
	open: boolean;
	onClose: () => void;
}

const AddAddressModal = ({ open, onClose, modalTitle }: AddAddressModalProps) => {
	const [saveAsMainAddress, setSaveAsMainAddress] = useState<boolean>(false);

	return (
		<AddAddressModalContainer open={open} onClose={onClose}>
			<CloseButton
				onClick={onClose}
				sx={{ top: "2rem", right: "2rem", width: "3rem", height: "3rem" }}
			/>
			<ModalTitle>{modalTitle}</ModalTitle>
			<Divider />
			<FormContainer>
				<Grid container spacing={3}>
					<InputContainer item xs={12}>
						<TextInput label="Nama Penerima" id="namaPenerima" />
					</InputContainer>
					<InputContainer item xs={12}>
						<TextInput label="Nomor HP" id="nomorHP" />
					</InputContainer>
					<InputContainer item xs={12}>
						<TextInput label="Label Alamat" id="labelAlamat" />
					</InputContainer>
					<InputContainer item xs={12}>
						<TextInput label="Catatan Pengiriman" id="catatan" />
					</InputContainer>
					<Grid item xs={12}>
						<Divider flexItem />
					</Grid>
					<InputContainer item xs={12}>
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
					</InputContainer>
					<InputContainer item xs={12}>
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
					</InputContainer>
					<InputContainer item xs={12}>
						<TextInput label="Kode Pos" id="kodePos" />
					</InputContainer>
					<InputContainer item xs={12}>
						<TextInput label="Alamat Lengkap" id="alamatLengkap" multiline rows={4} />
					</InputContainer>
					<InputContainer item xs={12}>
						<Checkbox
							label="Atur sebagai alamat utama"
							checked={saveAsMainAddress}
							onChange={setSaveAsMainAddress}
						/>
					</InputContainer>
					<Grid item xs={12}>
						<InputContainer item xs={3} alignSelf="flex-end" ml="auto">
							<Button color="primary" fullWidth>
								Simpan
							</Button>
						</InputContainer>
					</Grid>
				</Grid>
			</FormContainer>
		</AddAddressModalContainer>
	);
};

export default AddAddressModal;
