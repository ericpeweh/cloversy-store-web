// Dependencies
import React, { useState } from "react";

// Styles
import {
	AddressActions,
	AddressContainer,
	AddressContent,
	AddressInfo,
	AddressLabel,
	AddressText,
	MyAddressContainer,
	RecipientName
} from "./MyAddress.styles";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import Button from "../../components/Button/Button";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import { Divider } from "@mui/material";
import InputAddressModal from "../../components/InputAddressModal/InputAddressModal";
import useModal from "../../hooks/useModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const MyAddress = () => {
	const {
		isOpen: isAddAddressModalOpen,
		openHandler: openAddAddressModalHandler,
		closeHandler: closeAddAddressModalHandler
	} = useModal();
	const {
		isOpen: isEditAddressModalOpen,
		openHandler: openEditAddressModalHandler,
		closeHandler: closeEditAddressModalHandler
	} = useModal();
	const {
		isOpen: isDeleteAddressModalOpen,
		openHandler: openDeleteAddressModalHandler,
		closeHandler: closeDeleteAddressModalHandler
	} = useModal();

	return (
		<MyAddressContainer>
			<InputAddressModal
				open={isEditAddressModalOpen}
				onClose={closeEditAddressModalHandler}
				modalTitle="Ubah Alamat"
			/>
			<InputAddressModal
				open={isAddAddressModalOpen}
				onClose={closeAddAddressModalHandler}
				modalTitle="Tambah Alamat"
			/>
			<ConfirmationModal
				open={isDeleteAddressModalOpen}
				onClose={closeDeleteAddressModalHandler}
				modalTitle="Hapus Alamat"
				modalDescription="Apakah Anda yakin untuk menghapus alamat 'Rumah'? Alamat yang sudah dihapus tidak dapat dikembalikan."
			/>
			<AddressContainer>
				<AddressContent>
					<AddressInfo>
						<AddressLabel>
							<StatusBadge color="primary">Utama</StatusBadge>Alamat 1
						</AddressLabel>
						<RecipientName>Eric Prima Wijaya</RecipientName>
						<AddressText>+62 878 1234 5678</AddressText>
						<AddressText>
							Kedai Vegetarian Kan En, Jl. DR. Setia Budi, Kec. Pontianak Sel.,Kota Pontianak,
							Kalimantan Barat...
						</AddressText>
					</AddressInfo>
					<AddressActions>
						<Button size="small" variant="outlined" onClick={openEditAddressModalHandler}>
							Ubah alamat
						</Button>
						<Button
							size="small"
							color="error"
							variant="outlined"
							onClick={openDeleteAddressModalHandler}
						>
							Hapus
						</Button>
					</AddressActions>
				</AddressContent>
			</AddressContainer>
			<Divider flexItem />
			<AddressContainer>
				<AddressContent>
					<AddressInfo>
						<AddressLabel>Alamat 2</AddressLabel>
						<RecipientName>Mikici Cimol</RecipientName>
						<AddressText>+62 878 1234 5678</AddressText>
						<AddressText>
							Jln. Bersama, No.1234, Kec. Pontianak Sel.,Kota Pontianak, Kalimantan Barat...
						</AddressText>
					</AddressInfo>
					<AddressActions>
						<Button size="small" variant="outlined" onClick={openEditAddressModalHandler}>
							Ubah alamat
						</Button>
						<Button
							size="small"
							color="error"
							variant="outlined"
							onClick={openDeleteAddressModalHandler}
						>
							Hapus
						</Button>
					</AddressActions>
				</AddressContent>
				<Button size="small" color="primary">
					Pilih
				</Button>
			</AddressContainer>
			<Divider flexItem />
			<Button
				sx={{ alignSelf: "flex-end" }}
				color="primary"
				size="small"
				startIcon={<AddIcon />}
				onClick={openAddAddressModalHandler}
			>
				Tambah alamat
			</Button>
		</MyAddressContainer>
	);
};

export default MyAddress;
