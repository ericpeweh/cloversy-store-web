// Dependencies
import React, { useState } from "react";

// Styles
import {
	MyVoucherContainer,
	VoucherContainer,
	UsageList,
	InfoTitle,
	InfoText
} from "./MyVoucher.styles";

// Icons
import InfoIcon from "@mui/icons-material/Info";

// Hooks
import useModal from "../../hooks/useModal";
import { useGetVouchersQuery } from "../../api/voucher.api";

// Utils
import { formatDateFullMonth } from "../../utils/formatDate";

// Types
import { Voucher as VoucherType } from "../../interfaces";

// Components
import {
	CircularProgress,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Grid,
	Snackbar,
	Typography
} from "@mui/material";
import Button from "../../components/Button/Button";
import Voucher from "../../components/Voucher/Voucher";
import CloseButton from "../../components/CloseButton/CloseButton";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";

const MyVoucher = () => {
	const [successCopy, setSuccessCopy] = useState(false);

	const {
		isOpen: isInfoVoucherModalOpen,
		openHandler: openInfoVoucherModalHandler,
		closeHandler: closeInfoVoucherModalHandler
	} = useModal();

	const {
		data: vouchersData,
		isFetching: isGetVouchersFetching,
		isLoading: isGetVouchersLoading,
		isSuccess: isGetVouchersSuccess,
		error: getVouchersError,
		refetch: refetchVouchers
	} = useGetVouchersQuery();
	const vouchersError: any = getVouchersError;
	const noDataFound = vouchersData?.data.vouchers.length === 0;

	const copyVoucherCodeHandler = async (voucherCode: string) => {
		await navigator.clipboard.writeText(voucherCode);
		setSuccessCopy(true);
	};

	return (
		<MyVoucherContainer>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={successCopy}
				onClose={() => setSuccessCopy(false)}
				message="Voucher code copied!"
				key={"voucher_code_copy"}
				autoHideDuration={1500}
			/>
			<Dialog open={isInfoVoucherModalOpen} onClose={closeInfoVoucherModalHandler}>
				<CloseButton
					onClick={closeInfoVoucherModalHandler}
					sx={{
						top: { xs: "1.5rem" },
						right: { xs: "2rem", sm: "2.5rem" },
						width: "3rem",
						height: "3rem"
					}}
				/>
				<DialogTitle
					sx={{
						fontSize: { xs: "1.7rem", sm: "1.8rem", md: "1.9rem" },
						p: { xs: "1.5rem 2rem", sm: "1.5rem 2.5rem" }
					}}
				>
					Penggunaan Voucher
				</DialogTitle>
				<Divider />
				<DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
					<DialogContentText sx={{ mb: 3 }} component="div">
						<InfoTitle>Syarat & Ketentuan</InfoTitle>
						<InfoText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut! Nemo id tempore a
							maxime! Placeat error consectetur itaque beatae inventore. A, esse aperiam. Ratione id
							sapiente iure odio nulla?
						</InfoText>
					</DialogContentText>
					<DialogContentText sx={{ mb: 3 }}>
						<InfoTitle>Memperoleh Voucher</InfoTitle>
						<InfoText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut! Nemo id tempore a
							maxime! Placeat error consectetur itaque beatae inventore. A, esse aperiam. Ratione id
							sapiente iure odio nulla?
						</InfoText>
					</DialogContentText>
					<DialogContentText component="div">
						<InfoTitle>Cara Pakai</InfoTitle>
						<UsageList>
							<li>
								<InfoText>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut! Nemo id
									tempore a maxime!
								</InfoText>
							</li>
							<li>
								<InfoText>
									Placeat error consectetur itaque beatae inventore. A, esse aperiam. Ratione id
									sapiente iure odio nulla?
								</InfoText>
							</li>
							<li>
								<InfoText>Placeat error consectetur itaque beatae inventore.</InfoText>
							</li>
							<li>
								<InfoText>Placeat error consectetur itaque beatae inventore. A,</InfoText>
							</li>
						</UsageList>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			{!isGetVouchersLoading && getVouchersError && (
				<FallbackContainer>
					<ErrorMessage>{vouchersError.data.message}</ErrorMessage>
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
					<Typography>No voucher found!</Typography>
				</FallbackContainer>
			)}
			<VoucherContainer container spacing={2}>
				{vouchersData &&
					isGetVouchersSuccess &&
					!noDataFound &&
					vouchersData.data.vouchers.map((voucher: VoucherType) => (
						<Grid key={voucher.code} item xs={12} md={6}>
							<Voucher
								title={voucher.title}
								expiryDate={formatDateFullMonth(voucher.expiry_date)}
								code={voucher.code}
								onCopyCode={copyVoucherCodeHandler}
							/>
						</Grid>
					))}
			</VoucherContainer>
			<Divider flexItem />
			<Button
				sx={{ alignSelf: "flex-end" }}
				size="small"
				startIcon={<InfoIcon />}
				onClick={openInfoVoucherModalHandler}
			>
				Informasi
			</Button>
		</MyVoucherContainer>
	);
};

export default MyVoucher;
