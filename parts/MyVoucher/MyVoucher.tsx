// Dependencies
import React from "react";

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

// Components
import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Grid
} from "@mui/material";
import Button from "../../components/Button/Button";
import Voucher from "../../components/Voucher/Voucher";
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
			<VoucherContainer container spacing={2}>
				<Grid item xs={12} md={6}>
					<Voucher title={"Diskon Rp 25.000"} expiryDate={"23 Jul 2022"} code={"ACBD98DC88"} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Voucher title={"Diskon Rp 25.000"} expiryDate={"26 Jul 2022"} code={"FF3298DC88"} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Voucher title={"Diskon Rp 25.000"} expiryDate={"3 Aug 2022"} code={"BAAD98D828"} />
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
