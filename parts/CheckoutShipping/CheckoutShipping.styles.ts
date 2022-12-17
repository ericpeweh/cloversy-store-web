// Dependencies
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ShippingCostItem = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: "100%"
}));

export const CostItemDetail = styled("div")({
	display: "flex",
	gap: "2rem",
	alignItems: "center"
});

export const CostItemTitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: "500",
	textTransform: "uppercase",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
})) as typeof Typography;

export const EstimatedTime = styled(Typography)(({ theme }) => ({
	fontSize: "1.5rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
})) as typeof Typography;

export const CourierImage = styled("div")(({ theme }) => ({
	marginLeft: "1rem",
	width: "12rem",
	[theme.breakpoints.down("md")]: {
		width: "9rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "7rem"
	}
}));

export const CostItemPrice = styled(Typography)(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: "600",
	display: "flex",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
})) as typeof Typography;
