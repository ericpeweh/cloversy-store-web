// Dependencies
import React, { useEffect } from "react";

// Hooks
import { useFormikContext } from "formik";
import useModal from "../../hooks/useModal";
import { useCreateAddressMutation, useGetAllAddressesQuery } from "../../api/address.api";
import useSelector from "../../hooks/useSelector";

// Styles
import { OptionContainer, InputContainer, Subtitle } from "../Checkout/Checkout.styles";

// Types
import { Address as AddressType, CheckoutFormValues } from "../../interfaces";

// Icons
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddIcon from "@mui/icons-material/Add";

// Components
import {
	RadioGroup,
	CircularProgress,
	Grid,
	Typography,
	FormControlLabel,
	Stack,
	Radio,
	Alert
} from "@mui/material";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import Checkbox from "../../components/Checkbox/Checkbox";
import InputAddressModal from "../../components/InputAddressModal/InputAddressModal";
import Address from "../../components/Address/Address";

interface CheckoutInfoProps {
	setFormInitialValues: React.Dispatch<React.SetStateAction<CheckoutFormValues>>;
}

const CheckoutInfo = ({ setFormInitialValues }: CheckoutInfoProps) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
		useFormikContext<CheckoutFormValues>();

	const {
		isOpen: isAddAddressModalOpen,
		openHandler: openAddAddressModalHandler,
		closeHandler: closeAddAddressModalHandler
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
	const noAddressDataFound = addressData?.data.address.length === 0;

	useEffect(() => {
		if (isGetAddressSuccess && !noAddressDataFound && values.address_id === -1) {
			const defaultAddress = addressData.data.address.find(item => item.is_default === true)?.id;

			setFormInitialValues({
				...values,
				address_id: defaultAddress ?? addressData.data.address[0].id
			});
		}
	}, [addressData, isGetAddressSuccess, noAddressDataFound, setFormInitialValues, values]);

	const [
		createAddress,
		{
			isLoading: isCreateAddressLoading,
			error: createAddressError,
			isSuccess: isCreateAddressSuccess,
			reset: resetCreateAddress
		}
	] = useCreateAddressMutation();

	const createAddressHandler = (data: Partial<AddressType>) => createAddress(data);

	useEffect(() => {
		if (isCreateAddressSuccess) {
			closeAddAddressModalHandler();
			resetCreateAddress();
		}
	}, [isCreateAddressSuccess, closeAddAddressModalHandler, resetCreateAddress]);

	return (
		<Grid item xs={12} md={12} lg={7} xl={8}>
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
			<Subtitle>Alamat pengiriman</Subtitle>
			<RadioGroup
				value={values.address_id}
				name="address_id"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					handleChange(e);
					setFieldValue("shipping_courier", "default");
				}}
				onBlur={handleBlur}
			>
				<InputContainer>
					{errors.address_id && touched.address_id && (
						<Alert severity="error" sx={{ mb: 2 }}>
							{errors.address_id}
						</Alert>
					)}
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
					{!isGetAddressLoading && isGetAddressSuccess && noAddressDataFound && (
						<FallbackContainer size="small">
							<Typography>You have no address. Please create one!</Typography>
						</FallbackContainer>
					)}
					{addressData &&
						isGetAddressSuccess &&
						!noAddressDataFound &&
						addressData.data.address.map((address: AddressType) => (
							<OptionContainer key={address.id} selected={+values.address_id === address.id}>
								<FormControlLabel
									value={address.id}
									control={<Radio />}
									sx={{
										p: "0.5rem 1.5rem 1rem 1rem",
										width: "100%",
										m: 0,
										"& span:nth-of-type(2)": {
											width: "100%"
										}
									}}
									label={<Address addressData={address} noDivider={true} />}
								/>
							</OptionContainer>
						))}
					<Button
						sx={{ alignSelf: "center", mt: 2 }}
						color="primary"
						startIcon={<AddIcon />}
						onClick={openAddAddressModalHandler}
					>
						Tambah alamat
					</Button>
				</InputContainer>
			</RadioGroup>
			<Subtitle>Informasi lainnya</Subtitle>
			<InputContainer>
				<TextInput
					label="Catatan Pesanan (optional)"
					name="order_note"
					multiline
					rows={3}
					sx={{ mb: 1 }}
					value={values.order_note}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.order_note && touched.order_note && (
					<Alert severity="error" sx={{ mb: 2 }}>
						{errors.order_note}
					</Alert>
				)}
				<Checkbox
					label={
						<Stack direction="row" alignItems="center" gap={1}>
							<Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.6rem" }, userSelect: "none" }}>
								Kirim sebagai hadiah
							</Typography>
							<CardGiftcardIcon />
						</Stack>
					}
					checked={values.send_as_gift}
					name="send_as_gift"
					onChange={handleChange}
				/>
				{values.send_as_gift && (
					<TextInput
						label="Catatan hadiah (permintaan)"
						name="gift_note"
						id="catatan"
						multiline
						rows={4}
						value={values.gift_note}
						onChange={handleChange}
						onBlur={handleBlur}
						error={Boolean(errors.gift_note && touched.gift_note)}
					/>
				)}
				{errors.gift_note && touched.gift_note && (
					<Alert severity="error" sx={{ mb: 2 }}>
						{errors.gift_note}
					</Alert>
				)}
			</InputContainer>
		</Grid>
	);
};

export default CheckoutInfo;
