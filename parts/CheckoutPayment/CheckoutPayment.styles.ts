// Dependencies
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PaymentMethodItem = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%"
}));

export const PaymentMethodTitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: "600",
	textTransform: "uppercase",
	letterSpacing: "1px",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
})) as typeof Typography;

export const PaymentMethodImage = styled("div")(({ theme }) => ({
	marginLeft: "1rem",
	width: "12rem",
	[theme.breakpoints.down("md")]: {
		width: "9rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "7rem"
	}
}));
