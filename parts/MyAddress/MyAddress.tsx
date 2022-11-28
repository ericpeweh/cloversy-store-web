// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import { MyAddressContainer } from "./MyAddress.styles";

// Hooks
import useSelector from "../../hooks/useSelector";
import {
	useCreateAddressMutation,
	useDeleteAddressMutation,
	useGetAllAddressesQuery,
	useUpdateAddressMutation
} from "../../api/address.api";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Types
import { Address as AddressType } from "../../interfaces";

// Components
import Button from "../../components/Button/Button";
import InputAddressModal from "../../components/InputAddressModal/InputAddressModal";
import useModal from "../../hooks/useModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import Address from "../../components/Address/Address";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";
import { CircularProgress, Typography } from "@mui/material";

const MyAddress = () => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const [toSetAsDefaultAddressId, setToSetAsDefaultAddressId] = useState<number>(-1);
	const [selectedAddress, setSelectedAddress] = useState<AddressType | undefined>();
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

	const {
		data: addressData,
		isLoading: isGetAddressLoading,
		isSuccess: isGetAddressSuccess,
		error: getAddressError,
		refetch: refetchAddress
	} = useGetAllAddressesQuery(isAuth, {
		skip: !isAuth
	});
	const addressError: any = getAddressError;
	const noDataFound = addressData?.data.address.length === 0;

	const [
		createAddress,
		{
			isLoading: isCreateAddressLoading,
			error: createAddressError,
			isSuccess: isCreateAddressSuccess,
			reset: resetCreateAddress
		}
	] = useCreateAddressMutation();

	const [
		updateAddress,
		{
			isLoading: isUpdateAddressLoading,
			error: updateAddressError,
			isSuccess: isUpdateAddressSuccess,
			reset: resetUpdateAddress
		}
	] = useUpdateAddressMutation();

	const [
		setAddressAsDefault,
		{
			isLoading: isSetAddressAsDefaultLoading,
			isSuccess: isSetAddressAsDefaultSuccess,
			reset: resetSetAddressAsDefault
		}
	] = useUpdateAddressMutation();

	const [
		deleteAddress,
		{
			isLoading: isDeleteAddressLoading,
			error: deleteAddressError,
			isSuccess: isDeleteAddressSuccess,
			reset: resetDeleteAddress
		}
	] = useDeleteAddressMutation();

	const createAddressHandler = (data: Partial<AddressType>) => createAddress(data);

	const updateAddressHandler = (data: Partial<AddressType>) => updateAddress(data);

	const deleteAddressHandler = (addressId: number) => deleteAddress(addressId);

	const setAddressAsDefaultHandler = (data: { id: number; is_default: boolean }) => {
		setToSetAsDefaultAddressId(data.id);
		setAddressAsDefault(data);
	};

	const setAndOpenDeleteAddressModalHandler = (address: AddressType) => {
		setSelectedAddress(address);
		openDeleteAddressModalHandler();
	};

	const setAndOpenEditAddressModalHandler = (address: AddressType) => {
		setSelectedAddress(address);
		openEditAddressModalHandler();
	};

	useEffect(() => {
		if (isCreateAddressSuccess) {
			closeAddAddressModalHandler();
			resetCreateAddress();
		}
	}, [isCreateAddressSuccess, closeAddAddressModalHandler, resetCreateAddress]);

	useEffect(() => {
		if (isUpdateAddressSuccess) {
			closeEditAddressModalHandler();
			resetUpdateAddress();
			setSelectedAddress(undefined);
		}
	}, [isUpdateAddressSuccess, closeEditAddressModalHandler, resetUpdateAddress]);

	useEffect(() => {
		if (isSetAddressAsDefaultSuccess) {
			setToSetAsDefaultAddressId(-1);
			resetSetAddressAsDefault();
		}
	}, [isSetAddressAsDefaultSuccess, resetSetAddressAsDefault]);

	useEffect(() => {
		if (isDeleteAddressSuccess) {
			closeDeleteAddressModalHandler();
			resetDeleteAddress();
			setSelectedAddress(undefined);
		}
	}, [isDeleteAddressSuccess, closeDeleteAddressModalHandler, resetDeleteAddress]);

	return (
		<MyAddressContainer>
			<InputAddressModal
				open={isAddAddressModalOpen}
				onClose={() => {
					resetCreateAddress();
					closeAddAddressModalHandler();
				}}
				modalTitle="Tambah Alamat"
				onSubmit={createAddressHandler}
				isLoading={isCreateAddressLoading}
				error={createAddressError}
			/>
			<InputAddressModal
				open={isEditAddressModalOpen}
				onClose={() => {
					resetUpdateAddress();
					closeEditAddressModalHandler();
				}}
				modalTitle="Ubah Alamat"
				onSubmit={updateAddressHandler}
				isLoading={isUpdateAddressLoading}
				addressData={selectedAddress}
				error={updateAddressError}
			/>
			<ConfirmationModal
				modalTitle="Hapus Alamat"
				modalDescription={`Apakah Anda yakin untuk menghapus alamat ${selectedAddress?.label}? Alamat yang sudah dihapus tidak dapat dikembalikan.`}
				onClose={closeDeleteAddressModalHandler}
				open={isDeleteAddressModalOpen}
				confirmText="Delete"
				confirmColor="error"
				cancelText="Cancel"
				cancelColor="secondary"
				error={deleteAddressError}
				isLoading={isDeleteAddressLoading}
				onConfirm={() => {
					if (selectedAddress) deleteAddressHandler(selectedAddress.id);
				}}
			/>
			{!isGetAddressLoading && getAddressError && (
				<FallbackContainer>
					<ErrorMessage>{addressError?.data?.message}</ErrorMessage>
					<BoxButton onClick={refetchAddress}>Try again</BoxButton>
				</FallbackContainer>
			)}
			{isGetAddressLoading && (
				<FallbackContainer>
					<CircularProgress />
				</FallbackContainer>
			)}
			{!isGetAddressLoading && isGetAddressSuccess && noDataFound && (
				<FallbackContainer>
					<Typography>You have no address. Please create one!</Typography>
				</FallbackContainer>
			)}
			{addressData &&
				isGetAddressSuccess &&
				!noDataFound &&
				addressData.data.address.map((address: AddressType) => (
					<Address
						key={address.id}
						onDelete={setAndOpenDeleteAddressModalHandler}
						onEdit={setAndOpenEditAddressModalHandler}
						onSetAsDefault={setAddressAsDefaultHandler}
						isSetAsDefaultLoading={
							isSetAddressAsDefaultLoading && toSetAsDefaultAddressId == address.id
						}
						addressData={address}
					/>
				))}

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
