// Dependencies
import { styled } from "@mui/system";

export const CartItemImageContainer = styled("div")(({ theme }) => ({
	borderRadius: "0.5rem",
	overflow: "hidden",
	height: "9rem",
	width: "14rem",
	cursor: "pointer",
	[theme.breakpoints.down("lg")]: {
		height: "7rem",
		width: "12rem"
	},
	[theme.breakpoints.down("md")]: {
		height: "7rem",
		width: "8rem"
	}
}));

export const CartItemImage = styled("img")({
	objectFit: "cover",
	height: "100%",
	width: "100%"
});

export const CartItemTitle = styled("h2")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 500,
	width: "100%",
	cursor: "pointer",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const CartItemDesc = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	width: "max-content",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));
