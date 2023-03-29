// Dependencies
import { styled } from "@mui/system";
import { Avatar, ListItem, ListItemText } from "@mui/material";

export const CartItem = styled(ListItem)({
	alignItems: "flex-start",
	paddingRight: "0",
	paddingLeft: "0"
});

export const CartItemImage = styled(Avatar)({
	width: "9rem",
	height: "7rem",
	cursor: "pointer"
}) as typeof Avatar;

export const CartItemContent = styled(ListItemText)(({ theme }) => ({
	marginTop: "0",
	flexDirection: "column"
})) as typeof ListItemText;

export const CartItemTitle = styled("h4")(({ theme }) => ({
	fontWeight: 600,
	textTransform: "uppercase",
	fontSize: "1.7rem",
	cursor: "pointer",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const CartItemSubtitle = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const CartItemInfo = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "1.5rem"
});

export const CartItemPrice = styled("span")(({ theme }) => ({
	fontSize: "1.6rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));
