// Dependencies
import React from "react";

// Styles
import {
	MyVoucherContainer,
	VoucherImage,
	VoucherContainer,
	VoucherContent,
	VoucherTitle,
	VoucherExpiry,
	Voucher,
	VoucherCode,
	VoucherInfo,
	UsageList,
	InfoTitle,
	InfoText
} from "./MyVoucher.styles";

// Icons
import InfoIcon from "@mui/icons-material/Info";
import DiscountIcon from "@mui/icons-material/Discount";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Hooks
import useModal from "../../hooks/useModal";

// Components
import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Grid,
	IconButton
} from "@mui/material";
import Button from "../../components/Button/Button";
import Tooltip from "../../components/Tooltip/Tooltip";
import CloseButton from "../../components/CloseButton/CloseButton";

const MyVoucher = () => {
	const {
		isOpen: isInfoVoucherModalOpen,
		openHandler: openInfoVoucherModalHandler,
		closeHandler: closeInfoVoucherModalHandler
	} = useModal();

	return (
		<MyVoucherContainer>
			<Dialog open={isInfoVoucherModalOpen} onClose={closeInfoVoucherModalHandler}>
				<CloseButton
					onClick={closeInfoVoucherModalHandler}
					sx={{ top: "1.5rem", right: "1.5rem", width: "3rem", height: "3rem" }}
				/>
				<DialogTitle>Penggunaan Voucher</DialogTitle>
				<Divider />
				<DialogContent>
					<DialogContentText sx={{ mb: 3 }}>
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
					<DialogContentText>
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
			<VoucherContainer container spacing={2}>
				<Grid item xs={6}>
					<Voucher>
						<VoucherImage>
							<DiscountIcon fontSize="large" />
						</VoucherImage>
						<VoucherInfo>
							<VoucherContent>
								<VoucherTitle>Diskon Rp 25.000</VoucherTitle>
								<VoucherExpiry>Berlaku hingga 23 Jul 2022</VoucherExpiry>
							</VoucherContent>
							<VoucherCode>
								<Tooltip title="Salin kode">
									<IconButton>
										<ContentCopyIcon />
									</IconButton>
								</Tooltip>
								ACBD98DC88
							</VoucherCode>
						</VoucherInfo>
					</Voucher>
				</Grid>
				<Grid item xs={6}>
					<Voucher>
						<VoucherImage>
							<DiscountIcon fontSize="large" />
						</VoucherImage>
						<VoucherInfo>
							<VoucherContent>
								<VoucherTitle>Diskon Rp 25.000</VoucherTitle>
								<VoucherExpiry>Berlaku hingga 23 Jul 2022</VoucherExpiry>
							</VoucherContent>
							<VoucherCode>
								<Tooltip title="Salin kode">
									<IconButton>
										<ContentCopyIcon />
									</IconButton>
								</Tooltip>
								ACBD98DC88
							</VoucherCode>
						</VoucherInfo>
					</Voucher>
				</Grid>
				<Grid item xs={6}>
					<Voucher>
						<VoucherImage>
							<DiscountIcon fontSize="large" />
						</VoucherImage>
						<VoucherInfo>
							<VoucherContent>
								<VoucherTitle>Diskon Rp 25.000</VoucherTitle>
								<VoucherExpiry>Berlaku hingga 23 Jul 2022</VoucherExpiry>
							</VoucherContent>
							<VoucherCode>
								<Tooltip title="Salin kode">
									<IconButton>
										<ContentCopyIcon />
									</IconButton>
								</Tooltip>
								ACBD98DC88
							</VoucherCode>
						</VoucherInfo>
					</Voucher>
				</Grid>
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
