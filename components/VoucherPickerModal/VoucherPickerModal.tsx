// Dependencies
import React, { useState } from "react";

// Components
import { Alert, CircularProgress, Divider, Snackbar, Typography } from "@mui/material";
import CloseButton from "../CloseButton/CloseButton";
import Voucher from "../Voucher/Voucher";

// Hooks
import { useGetVouchersQuery } from "../../api/voucher.api";
import useSelector from "../../hooks/useSelector";

// Styles
import { Voucher as VoucherType } from "../../interfaces";

// Utils
import { formatDateFullMonth } from "../../utils/formatDate";

// Styles
import {
	VoucherPickerModalContainer,
	ModalTitle,
	VoucherContainer,
	VoucherOptions
} from "./VoucherPickerModal.styles";
import FallbackContainer from "../FallbackContainer/FallbackContainer";
import BoxButton from "../BoxButton/BoxButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface VoucherPickerModalProps {
	open: boolean;
	onClose: () => void;
	onSelectVoucher: (code: string) => void;
}

const VoucherPickerModal = ({ open, onClose, onSelectVoucher }: VoucherPickerModalProps) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const [successCopy, setSuccessCopy] = useState(false);

	const {
		data: vouchersData,
		isLoading: isGetVouchersLoading,
		isSuccess: isGetVouchersSuccess,
		error: getVouchersError,
		refetch: refetchVouchers
	} = useGetVouchersQuery(isAuth, { skip: !isAuth });
	const vouchersError: any = getVouchersError;
	const noDataFound = vouchersData?.data.vouchers.length === 0;

	const copyVoucherCodeHandler = async (voucherCode: string) => {
		await navigator.clipboard.writeText(voucherCode);
		setSuccessCopy(true);
	};

	const voucherSelectHandler = (code: string) => {
		onSelectVoucher(code);
		onClose();
	};

	return (
		<VoucherPickerModalContainer open={open} onClose={onClose}>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={successCopy}
				onClose={() => setSuccessCopy(false)}
				message="Voucher code copied!"
				key={"voucher_code_copy"}
				autoHideDuration={1500}
			/>
			<CloseButton
				onClick={onClose}
				sx={{
					top: { xs: "1.5rem", sm: "2.5rem" },
					right: { xs: "2rem", sm: "3rem" },
					width: "3rem",
					height: "3rem"
				}}
			/>
			<ModalTitle>Pilih voucher</ModalTitle>
			<Divider />
			<VoucherOptions>
				{!isGetVouchersLoading && getVouchersError && (
					<FallbackContainer>
						<Alert severity="error">
							{vouchersError?.data?.message || "Error occured while fetching voucher data."}
						</Alert>
						<BoxButton onClick={refetchVouchers}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{isGetVouchersLoading && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isGetVouchersLoading && isGetVouchersSuccess && noDataFound && (
					<FallbackContainer>
						<Typography>Kamu tidak memiliki voucher.</Typography>
					</FallbackContainer>
				)}
				{vouchersData &&
					isGetVouchersSuccess &&
					!noDataFound &&
					vouchersData.data.vouchers.map((voucher: VoucherType) => (
						<Voucher
							key={voucher.code}
							title={voucher.title}
							expiryDate={formatDateFullMonth(voucher.expiry_date)}
							code={voucher.code}
							onCopyCode={copyVoucherCodeHandler}
							onSelect={voucherSelectHandler}
						/>
					))}
			</VoucherOptions>
		</VoucherPickerModalContainer>
	);
};

export default VoucherPickerModal;
