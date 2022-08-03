// Dependencies
import React from "react";

// Styles
import {
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

interface VoucherProps {
	title: string;
	expiryDate: string;
	code: string;
}

const Voucher = ({ title, expiryDate, code }: VoucherProps) => {
	return (
		<VoucherContainer>
			<VoucherImage>
				<DiscountIcon fontSize="large" />
			</VoucherImage>
			<VoucherInfo>
				<VoucherContent>
					<VoucherTitle>{title}</VoucherTitle>
					<VoucherExpiry>Berlaku hingga {expiryDate}</VoucherExpiry>
				</VoucherContent>
				<VoucherCode>
					<Tooltip title="Salin kode">
						<IconButton>
							<ContentCopyIcon />
						</IconButton>
					</Tooltip>
					{code}
				</VoucherCode>
			</VoucherInfo>
		</VoucherContainer>
	);
};

export default Voucher;
