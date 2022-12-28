// Dependencies
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Styles
import {
	AddAddressModalContainer,
	FormContainer,
	InputContainer,
	InputLimitText,
	ModalTitle
} from "./InputAddressModal.styles";

// Types
import { Address } from "../../interfaces";

// Hooks
import useGetProvinceOptions from "../../hooks/useGetProvinceOptions";
import useGetCityOptions from "../../hooks/useGetCityOptions";
import useGetSubdistrictOptions from "../../hooks/useGetSubdistrictOptions";

// Components
import CloseButton from "../CloseButton/CloseButton";
import TextInput from "../TextInput/TextInput";
import { Divider, Grid, Link } from "@mui/material";
import SelectInput from "../SelectInput/SelectInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface AddAddressModalProps {
	modalTitle: string;
	open: boolean;
	isLoading?: boolean;
	addressData?: Address;
	onSubmit: Function;
	onClose: () => void;
	error?: any;
}

type InputAddressFormValues = Omit<Address, "id">;

const CreateAddressSchema = Yup.object().shape({
	recipient_name: Yup.string().required("Nama penerima dibutuhkan"),
	contact: Yup.string().required("Kontak dibutuhkan"),
	address: Yup.string().required("Mohon masukkan alamat yang tepat"),
	is_default: Yup.boolean(),
	province: Yup.string().required("Required"),
	province_id: Yup.number().not([-1], "Kamu harus memilih provinsi").required("Required"),
	city: Yup.string().required("Required"),
	city_id: Yup.number().not([-1], "Kamu harus memilih kota/kabupaten").required("Required"),
	subdistrict: Yup.string().required("Required"),
	subdistrict_id: Yup.number().not([-1], "Kamu harus memilih kecamatan").required("Required"),
	postal_code: Yup.string().required("Mohon masukkan kode pos"),
	label: Yup.string().required("Masukkan label untuk alamat ini"),
	shipping_note: Yup.string()
});

const InputAddressModal = ({
	open,
	onClose,
	modalTitle,
	onSubmit,
	isLoading,
	addressData,
	error
}: AddAddressModalProps) => {
	const [selectedProvinceId, setSelectedProvinceId] = useState(-1);
	const [selectedCityId, setSelectedCityId] = useState(-1);

	const formInitialValues: InputAddressFormValues = {
		recipient_name: addressData?.recipient_name ?? "",
		contact: addressData?.contact ?? "",
		address: addressData?.address ?? "",
		is_default: addressData?.is_default ?? false,
		province: addressData?.province ?? "",
		province_id: addressData?.province_id ?? -1,
		city: addressData?.city ?? "",
		city_id: addressData?.city_id ?? -1,
		subdistrict: addressData?.subdistrict ?? "",
		subdistrict_id: addressData?.subdistrict_id ?? -1,
		postal_code: addressData?.postal_code ?? "",
		label: addressData?.label ?? "",
		shipping_note: addressData?.shipping_note ?? ""
	};

	useEffect(() => {
		if (addressData?.province_id) setSelectedProvinceId(addressData?.province_id);
		if (addressData?.city_id) setSelectedCityId(addressData?.city_id);
	}, [addressData]);

	const {
		provinceOptions,
		error: provincesError,
		isFetching: isGetProvincesFetching,
		refetch: refetchProvinces
	} = useGetProvinceOptions();
	const getProvincesError: any = provincesError;

	const {
		cityOptions,
		error: citiesError,
		isFetching: isGetCitiesFetching,
		refetch: refetchCities
	} = useGetCityOptions(selectedProvinceId);
	const getCitiesError: any = citiesError;

	const {
		subdistrictOptions,
		error: subdistrictError,
		isFetching: isGetSubdistrictsFetching,
		refetch: refetchSubdistricts
	} = useGetSubdistrictOptions(selectedCityId);
	const getSubdistrictsError: any = subdistrictError;

	return (
		<AddAddressModalContainer open={open} onClose={onClose}>
			<CloseButton
				onClick={onClose}
				sx={{
					top: { xs: "1.5rem", sm: "2.5rem" },
					right: { xs: "2rem", sm: "3rem" },
					width: "3rem",
					height: "3rem"
				}}
			/>
			<ModalTitle>{modalTitle}</ModalTitle>
			<Divider sx={{ mb: 1 }} />
			<Formik
				initialValues={formInitialValues}
				validationSchema={CreateAddressSchema}
				onSubmit={values => {
					if (!isGetProvincesFetching && !isGetCitiesFetching && !isGetSubdistrictsFetching) {
						onSubmit(addressData ? { id: addressData.id, ...values } : values);
					}
				}}
				enableReinitialize={true}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
					<FormContainer onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<InputContainer item xs={12}>
								<TextInput
									label="Nama Penerima *"
									name="recipient_name"
									value={values.recipient_name}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.recipient_name && touched.recipient_name)}
									performant
								/>
								{errors.recipient_name && touched.recipient_name && (
									<ErrorMessage>{errors.recipient_name}</ErrorMessage>
								)}
							</InputContainer>
							<InputContainer item xs={12}>
								<TextInput
									label="Nomor HP *"
									type="tel"
									name="contact"
									value={values.contact}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.contact && touched.contact)}
									performant
								/>
								{errors.contact && touched.contact && <ErrorMessage>{errors.contact}</ErrorMessage>}
							</InputContainer>
							<InputContainer item xs={12}>
								<TextInput
									label="Label Alamat *"
									placeholder="Rumah, kantor, apartemen..."
									name="label"
									value={values.label}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.label && touched.label)}
									performant
								/>
								{errors.label && touched.label && <ErrorMessage>{errors.label}</ErrorMessage>}
							</InputContainer>
							<InputContainer item xs={12}>
								<TextInput
									label="Catatan Pengiriman"
									name="shipping_note"
									value={values.shipping_note}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.shipping_note && touched.shipping_note)}
									performant
								/>
								{errors.shipping_note && touched.shipping_note && (
									<ErrorMessage>{errors.shipping_note}</ErrorMessage>
								)}
							</InputContainer>
							<Grid item xs={12}>
								<Divider flexItem />
							</Grid>
							<InputContainer item xs={12}>
								<SelectInput
									label="Provinsi *"
									name="province_id"
									options={
										isGetProvincesFetching
											? [{ label: "Loading...", value: values.province_id }]
											: provinceOptions
									}
									value={values.province_id}
									onChange={e => {
										handleChange(e);
										setFieldValue("city_id", -1);
										setSelectedProvinceId(e.target.value as number);
									}}
									onOptionClick={(label: string) => setFieldValue("province", label)}
									onBlur={handleBlur}
									error={Boolean(errors.province_id && touched.province_id)}
								/>
								{provincesError && (
									<ErrorMessage>
										{getProvincesError.data?.message}{" "}
										<Link
											underline="hover"
											color="text.primary"
											onClick={refetchProvinces}
											sx={{ cursor: "pointer" }}
										>
											Try again
										</Link>
									</ErrorMessage>
								)}
								{errors.province_id && touched.province_id && (
									<ErrorMessage>{errors.province_id}</ErrorMessage>
								)}
							</InputContainer>
							{values.province_id !== -1 && (
								<InputContainer item xs={12}>
									<InputContainer item xs={12}>
										<SelectInput
											label="Kabupaten / Kota *"
											name="city_id"
											options={
												isGetCitiesFetching
													? [{ label: "Loading...", value: values.city_id }]
													: cityOptions
											}
											value={values.city_id}
											onChange={e => {
												handleChange(e);
												setFieldValue("subdistrict_id", -1);
												setSelectedCityId(e.target.value as number);
											}}
											onOptionClick={(label: string) => setFieldValue("city", label)}
											onBlur={handleBlur}
											error={Boolean(errors.city_id && touched.city_id)}
										/>
									</InputContainer>
									{citiesError && (
										<ErrorMessage>
											{getCitiesError.data?.message}{" "}
											<Link
												underline="hover"
												color="text.primary"
												onClick={refetchCities}
												sx={{ cursor: "pointer" }}
											>
												Try again
											</Link>
										</ErrorMessage>
									)}
									{errors.city_id && touched.city_id && (
										<ErrorMessage>{errors.city_id}</ErrorMessage>
									)}
								</InputContainer>
							)}
							{values.city_id !== -1 && (
								<InputContainer item xs={12}>
									<InputContainer item xs={12}>
										<SelectInput
											label="Kecamatan *"
											name="subdistrict_id"
											options={
												isGetSubdistrictsFetching
													? [{ label: "Loading...", value: values.subdistrict_id }]
													: subdistrictOptions
											}
											value={values.subdistrict_id}
											onChange={handleChange}
											onOptionClick={(label: string) => setFieldValue("subdistrict", label)}
											onBlur={handleBlur}
											error={Boolean(errors.subdistrict_id && touched.subdistrict_id)}
										/>
									</InputContainer>
									{subdistrictError && (
										<ErrorMessage>
											{getSubdistrictsError.data?.message}{" "}
											<Link
												underline="hover"
												color="text.primary"
												onClick={refetchSubdistricts}
												sx={{ cursor: "pointer" }}
											>
												Try again
											</Link>
										</ErrorMessage>
									)}
									{errors.subdistrict_id && touched.subdistrict_id && (
										<ErrorMessage>{errors.subdistrict_id}</ErrorMessage>
									)}
								</InputContainer>
							)}
							<InputContainer item xs={12}>
								<TextInput
									label="Kode Pos *"
									name="postal_code"
									value={values.postal_code}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.postal_code && touched.postal_code)}
									performant
								/>
								{errors.postal_code && touched.postal_code && (
									<ErrorMessage>{errors.postal_code}</ErrorMessage>
								)}
							</InputContainer>
							<InputContainer item xs={12}>
								<TextInput
									label="Alamat Lengkap *"
									multiline
									rows={4}
									name="address"
									value={values.address}
									onChange={handleChange}
									onBlur={handleBlur}
									error={Boolean(errors.address && touched.address)}
									performant
								/>
								{errors.address && touched.address && <ErrorMessage>{errors.address}</ErrorMessage>}
							</InputContainer>
							<InputContainer item xs={12}>
								<Checkbox
									sx={{ mt: { xs: -2, sm: -1, md: 0, userSelect: "none" } }}
									name="is_default"
									label="Atur sebagai alamat utama"
									checked={values.is_default}
									onChange={handleChange}
								/>
							</InputContainer>
							<Grid item xs={12}>
								{error && <ErrorMessage>{error.data?.message}</ErrorMessage>}
								<InputContainer item xs={3} alignSelf="flex-end" ml="auto">
									<Button color="primary" fullWidth type="submit" loading={isLoading}>
										Simpan
									</Button>
								</InputContainer>
							</Grid>
						</Grid>
					</FormContainer>
				)}
			</Formik>
		</AddAddressModalContainer>
	);
};

export default InputAddressModal;
