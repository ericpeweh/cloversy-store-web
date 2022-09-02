// Dependencies
import { Avatar, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

export const CartDrawerContainer = styled(Drawer)(({ theme }) => ({
	position: "relative",
	"& .MuiDrawer-paper": {
		width: "50rem",
		display: "flex",
		flexDirection: "column",
		padding: "2rem 3rem 3rem 4rem",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			padding: "2rem 3rem 3rem"
		}
	}
})) as typeof Drawer;

export const HideCartButton = styled(Button)(({ theme }) => ({
	color: theme.palette.grey[500],
	fontSize: "1.4rem",
	alignSelf: "flex-start",
	paddingLeft: "0"
}));

export const CartLists = styled(List)(({ theme }) => ({
	width: "100%"
})) as typeof List;

export const CartItem = styled(ListItem)({
	alignItems: "flex-start",
	paddingRight: "0",
	paddingLeft: "0"
});

export const CartItemImage = styled(Avatar)({
	width: "8rem",
	height: "6rem",
	cursor: "pointer"
}) as typeof Avatar;

export const CartItemContent = styled(ListItemText)({
	marginTop: "0",
	"& .MuiListItemText-primary": {
		fontWeight: 600,
		textTransform: "uppercase",
		fontSize: "1.7rem",
		cursor: "pointer"
	},
	"& .MuiListItemText-secondary": {}
}) as typeof ListItemText;

export const Badge = styled("div")(({ theme }) => ({
	fontSize: "1.5rem",
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	borderRadius: "0.5rem",
	textAlign: "center",
	fontFamily: "var(--font-secondary)",
	padding: "0.3rem",
	margin: "1rem 0"
}));

export const CartActionButtons = styled("div")({
	justifySelf: "flex-end",
	display: "flex",
	flexDirection: "column",
	marginTop: "auto",
	gap: "1rem"
});

export const CartItemInfo = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginTop: "2rem"
});

export const CartItemPrice = styled("p")({
	fontSize: "1.6rem"
});
