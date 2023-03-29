// Dependencies
import React from "react";

// Styles
import {
	AddressActions,
	AddressContainer,
	AddressContent,
	AddressInfo,
	AddressLabel,
	AddressText,
	RecipientName
} from "./Address.style";

// Types
import { Address as AddressType } from "../../interfaces";

// Components
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Button from "../Button/Button";
import { Divider } from "@mui/material";

interface AddressProps {
	addressData: AddressType;
	onEdit?: (address: AddressType) => void;
	onDelete?: (address: AddressType) => void;
	onSetAsDefault?: (address: { id: number; is_default: boolean }) => void;
	isSetAsDefaultLoading?: boolean;
	noDivider?: boolean;
}

const Address = ({
	onEdit,
	onDelete,
	onSetAsDefault,
	addressData,
	isSetAsDefaultLoading = false,
	noDivider = false
}: AddressProps) => {
	const openEditAddressModalHandler = () => {
		onEdit && onEdit(addressData);
	};

	const openDeleteAddressModalHandler = () => {
		onDelete && onDelete(addressData);
	};

	const setAsDefaultHandler = () => {
		onSetAsDefault && onSetAsDefault({ id: addressData.id, is_default: true });
	};

	return (
		<>
			<AddressContainer>
				<AddressContent>
					<AddressInfo>
						<AddressLabel>
							{addressData?.is_default && <StatusBadge color="primary">Utama</StatusBadge>}
							{addressData?.label}
						</AddressLabel>
						<RecipientName>{addressData?.recipient_name}</RecipientName>
						<AddressText>{addressData?.contact}</AddressText>
						<AddressText>{addressData?.address}</AddressText>
					</AddressInfo>
					{Boolean(onSetAsDefault || onEdit || onDelete) && (
						<AddressActions>
							{onSetAsDefault && !addressData.is_default && (
								<Button
									size="small"
									color="primary"
									onClick={setAsDefaultHandler}
									loading={isSetAsDefaultLoading}
								>
									Jadikan Utama
								</Button>
							)}
							{onEdit && (
								<Button size="small" variant="outlined" onClick={openEditAddressModalHandler}>
									Ubah alamat
								</Button>
							)}
							{onDelete && (
								<Button
									size="small"
									color="error"
									variant="outlined"
									onClick={openDeleteAddressModalHandler}
								>
									Hapus
								</Button>
							)}
						</AddressActions>
					)}
				</AddressContent>
			</AddressContainer>
			{!noDivider && <Divider flexItem />}
		</>
	);
};

export default Address;
