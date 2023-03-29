// Dependencies
import { Avatar, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

export const CartDrawerContainer = styled(Drawer)(({ theme }) => ({
	position: "relative",
	"& .MuiDrawer-paper": {
		width: "50rem",
		display: "flex",
		flexDirection: "column",
		padding: "2rem 3rem 3rem 3rem",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			padding: "2rem"
		}
	}
})) as typeof Drawer;

export const HideCartButton = styled(Button)(({ theme }) => ({
	color: theme.palette.grey[500],
	fontSize: "1.4rem",
	alignSelf: "flex-start",
	paddingLeft: "0",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.3rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.2rem"
	}
}));

export const CartLists = styled(List)(({ theme }) => ({
	width: "100%"
})) as typeof List;

export const CartActionButtons = styled("div")({
	justifySelf: "flex-end",
	display: "flex",
	flexDirection: "column",
	marginTop: "auto",
	gap: "1rem"
});
