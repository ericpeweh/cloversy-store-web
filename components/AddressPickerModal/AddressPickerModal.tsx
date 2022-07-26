// Dependencies
import React from "react";

// Styles
import {
	AddressContainer,
	AddressContent,
	AddressInfo,
	AddressLabel,
	AddressOptions,
	AddressPickerModalContainer,
	AddressText,
	ModalTitle,
	RecipientName
} from "./AddressPickerModal.styles";

// Icons
import PlaceIcon from "@mui/icons-material/Place";

// Components
import { Divider } from "@mui/material";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";

interface AddressPickerModalProps {
	open: boolean;
	onClose: () => void;
}

const AddressPickerModal = ({ open, onClose }: AddressPickerModalProps) => {
	return (
		<AddressPickerModalContainer open={open} onClose={onClose}>
			<CloseButton
				onClick={onClose}
				sx={{ top: "2.5rem", right: "3rem", width: "3rem", height: "3rem" }}
			/>
			<ModalTitle>Pilih alamat</ModalTitle>
			<Divider />
			<AddressOptions>
				<AddressContainer>
					<AddressContent>
						<AddressInfo>
							<AddressLabel>
								<PlaceIcon />
								Alamat 1
							</AddressLabel>
							<RecipientName>Eric Prima Wijaya</RecipientName>
							<AddressText>+62 878 1234 5678</AddressText>
							<AddressText>
								Kedai Vegetarian Kan En, Jl. DR. Setia Budi, Kec. Pontianak Sel.,Kota Pontianak,
								Kalimantan Barat...
							</AddressText>
						</AddressInfo>
					</AddressContent>
					<Button size="small" color="primary">
						Pilih
					</Button>
				</AddressContainer>
				<AddressContainer>
					<AddressContent>
						<AddressInfo>
							<AddressLabel>Alamat 2</AddressLabel>
							<RecipientName>Mikici Cimol</RecipientName>
							<AddressText>+62 878 1234 5678</AddressText>
							<AddressText>Jln. Bersama, No.1234, Kec. Pontianak Sel.,Kota Pontianak,</AddressText>
							<AddressText>Kalimantan Barat...</AddressText>
						</AddressInfo>
					</AddressContent>
					<Button size="small" color="primary">
						Pilih
					</Button>
				</AddressContainer>
			</AddressOptions>
		</AddressPickerModalContainer>
	);
};

export default AddressPickerModal;
