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
import useSelector from "../../hooks/useSelector";
import { useGetVouchersQuery } from "../../api/voucher.api";

// Utils
import { formatDateFullMonth } from "../../utils/formatDate";

// Types
import { Voucher as VoucherType } from "../../interfaces";

// Components
import {
	Alert,
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
	const isAuth = useSelector(state => state.auth.isAuth);
	const [successCopy, setSuccessCopy] = useState(false);

	const {
		isOpen: isInfoVoucherModalOpen,
		openHandler: openInfoVoucherModalHandler,
		closeHandler: closeInfoVoucherModalHandler
	} = useModal();

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
					data-testid="dialog-close-button"
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
							Voucher yang dapat digunakan hanya voucher yang diberikan oleh tim atau sistem
							Cloversy.id. Setiap voucher yang diberikan memiliki judul, besaran potongan harga,
							target audiens, dan tanggal berlakunya masing- masing.
						</InfoText>
					</DialogContentText>
					<DialogContentText sx={{ mb: 3 }}>
						<InfoTitle>Memperoleh Voucher</InfoTitle>
						<InfoText>
							Untuk memperoleh voucher, kamu dapat melakukan pembelian produk pada website
							Cloversy.id. Voucher hanya akan diberikan oleh tim Cloversy.id apabila transaksi
							memenuhi ketentuan. Kamu juga dapat memperoleh voucher melalui postingan promo
							Cloversy.id atau melalui penawaran langsung pada email.
						</InfoText>
					</DialogContentText>
					<DialogContentText component="div">
						<InfoTitle>Cara Pakai</InfoTitle>
						<UsageList>
							<li>
								<InfoText>Masuk ke tahapan checkout produk.</InfoText>
							</li>
							<li>
								<InfoText>
									Pilih voucher yang kamu punya dan terapkan, atau kamu juga dapat menuliskan kode
									voucher.
								</InfoText>
							</li>
							<li>
								<InfoText>Sistem akan mencoba menerapkan diskon voucher yang kamu pilih.</InfoText>
							</li>
							<li>
								<InfoText>
									Apabila berhasil, sistem akan menampilkan nama voucher, kode, dan besar potongan
									yang didapatkan.
								</InfoText>
							</li>
						</UsageList>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			{!isGetVouchersLoading && getVouchersError && (
				<FallbackContainer>
					<Alert severity="error">
						{vouchersError?.data?.message || "Error occured while fetching vouchers data."}
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
