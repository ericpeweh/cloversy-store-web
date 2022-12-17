// Dependencies
import React from "react";

// Styles
import {
	VoucherActions,
	VoucherCode,
	VoucherContainer,
	VoucherContent,
	VoucherExpiry,
	VoucherImage,
	VoucherInfo,
	VoucherTitle
} from "./Voucher.styles";

// Icons
import DiscountIcon from "@mui/icons-material/Discount";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Components
import { IconButton } from "@mui/material";
import Tooltip from "../Tooltip/Tooltip";
import Button from "../Button/Button";

interface VoucherProps {
	title: string;
	expiryDate: string;
	code: string;
	onCopyCode: (voucherCode: string) => void;
	onSelect?: (code: string) => void;
}

const Voucher = ({ title, expiryDate, code, onCopyCode, onSelect }: VoucherProps) => {
	return (
		<VoucherContainer>
			<VoucherImage>
				<DiscountIcon sx={{ fontSize: { xs: "2.4rem", sm: "2.6rem", md: "3rem", lg: "3.4" } }} />
			</VoucherImage>
			<VoucherInfo>
				<VoucherContent>
					<VoucherTitle>{title}</VoucherTitle>
					<VoucherExpiry>Berlaku hingga {expiryDate}</VoucherExpiry>
				</VoucherContent>
				<VoucherCode>
					<Tooltip title="Salin kode">
						<IconButton onClick={() => onCopyCode(code)}>
							<ContentCopyIcon />
						</IconButton>
					</Tooltip>
					{code}
				</VoucherCode>
			</VoucherInfo>
			{onSelect && (
				<VoucherActions>
					<Button size="small" color="primary" onClick={() => onSelect(code)}>
						Pilih
					</Button>
				</VoucherActions>
			)}
		</VoucherContainer>
	);
};

export default Voucher;
