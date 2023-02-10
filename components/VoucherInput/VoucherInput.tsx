// Dependencies
import React, { useEffect, useState } from "react";

// Styles
import {
	ContentTitle,
	InputContainer,
	ResultInfo,
	VoucherInputContainer
} from "./VoucherInput.styles";

// Types
import { CheckoutFormValues } from "../../interfaces";

// Icons
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Hooks
import useModal from "../../hooks/useModal";
import useSelector from "../../hooks/useSelector";
import { useApplyVoucherMutation } from "../../api/voucher.api";
import { useFormikContext } from "formik";

// Components
import { Divider, Grid, Typography, Alert, CircularProgress } from "@mui/material";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import FallbackContainer from "../FallbackContainer/FallbackContainer";
import VoucherPickerModal from "../VoucherPickerModal/VoucherPickerModal";

const VoucherInput = () => {
	const { values, setFieldValue } = useFormikContext<CheckoutFormValues>();
	const [voucherCodeInput, setVoucherCodeInput] = useState(values.voucher_code);

	const [
		applyVoucher,
		{
			data: voucherData,
			isLoading: isVoucherLoading,
			isSuccess: isVoucherSuccess,
			error: voucherErrorData,
			reset: resetApplyVoucher
		}
	] = useApplyVoucherMutation();
	const voucherError: any = voucherErrorData;
	const voucher = voucherData?.data.voucher;
	const discountFormat =
		voucher?.discount_type === "value"
			? formatToRupiah(voucher?.discount)
			: `${voucher?.discount}%`;

	useEffect(() => {
		if (voucher && isVoucherSuccess) {
			setFieldValue("voucher_code", voucher?.code);
			setFieldValue("voucher_discount", voucher?.discount);
			setFieldValue("voucher_type", voucher?.discount_type);
		}
	}, [isVoucherSuccess, setFieldValue, voucher]);

	useEffect(() => {
		if (voucherError) {
			setFieldValue("voucher_code", "");
			setFieldValue("voucher_discount", 9);
			setFieldValue("voucher_type", "default");
		}
	}, [setFieldValue, voucherError]);

	const voucherCodeInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVoucherCodeInput(e.target.value);
	};

	const applyVoucherHandler = (code: string) => {
		if (!code) return;

		setVoucherCodeInput(code);
		resetApplyVoucher();
		applyVoucher(code);
	};

	const {
		isOpen: isVoucherPickerModalOpen,
		openHandler: openVoucherPickerModal,
		closeHandler: closeVoucherPickerModal
	} = useModal();

	return (
		<VoucherInputContainer>
			<VoucherPickerModal
				open={isVoucherPickerModalOpen}
				onClose={closeVoucherPickerModal}
				onSelectVoucher={applyVoucherHandler}
			/>
			<ContentTitle>Kode / Voucher Diskon</ContentTitle>
			<InputContainer direction={{ xs: "column", md: "row" }} alignItems="center" spacing={2}>
				<TextInput
					label="Kode Voucher"
					id="input-voucher"
					value={voucherCodeInput}
					onChange={voucherCodeInputChangeHandler}
					inputProps={{ style: { textTransform: "uppercase" } }}
				/>
				<Button
					fullWidth
					sx={{ width: { xs: "100%", md: "20rem" }, alignSelf: "stretch" }}
					onClick={_ => applyVoucherHandler(voucherCodeInput)}
					loading={isVoucherLoading}
				>
					Terapkan
				</Button>
			</InputContainer>
			<Divider variant="middle">
				<Typography variant="body2">ATAU</Typography>
			</Divider>
			<InputContainer direction="row" spacing={2}>
				<Button
					fullWidth
					color="primary"
					startIcon={<ConfirmationNumberOutlinedIcon />}
					onClick={openVoucherPickerModal}
				>
					Pilih voucher
				</Button>
			</InputContainer>
			<Divider />
			<ResultInfo container spacing={{ xs: 1 }}>
				{voucherError && (
					<Grid item xs={12}>
						<Alert severity="error" sx={{ mb: 2 }}>
							{voucherError.data.message}
						</Alert>
					</Grid>
				)}
				{isVoucherLoading ? (
					<FallbackContainer size="small">
						<CircularProgress />
					</FallbackContainer>
				) : (
					<>
						<Grid item xs={12}>
							<Typography>
								<strong>Kode voucher:</strong> {voucher?.code || "-"}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography>
								<strong>Nama voucher:</strong> {voucher?.title || "-"}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography>
								<strong>Potongan:</strong> - {voucher ? discountFormat : ""}
							</Typography>
						</Grid>
					</>
				)}
			</ResultInfo>
		</VoucherInputContainer>
	);
};

export default VoucherInput;
