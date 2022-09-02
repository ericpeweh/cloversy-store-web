// Dependencies
import { Avatar, Button, Drawer, List, ListItem, ListItemText, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const MobileMenuDrawerContainer = styled(Drawer)(({ theme }) => ({
	position: "relative",
	"& .MuiDrawer-paper": {
		width: "50rem",
		display: "flex",
		flexDirection: "column",
		padding: "2rem 3rem 3rem",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	}
})) as typeof Drawer;

export const MobileMenuLists = styled("nav")(({ theme }) => ({
	width: "100%",
	marginTop: "6rem",
	display: "flex",
	flexDirection: "column"
}));

export const MobileMenuItem = styled("a")({
	marginTop: "0",
	fontWeight: 400,
	textTransform: "uppercase",
	fontSize: "2rem",
	cursor: "pointer",
	padding: "1.7rem 0"
});

export const MobileMenuActionButtons = styled("div")({
	justifySelf: "flex-end",
	display: "flex",
	flexDirection: "column",
	marginTop: "auto"
});

export const SearchInput = styled(TextField)({
	"& input": {
		fontSize: "2.2rem",
		fontFamily: "var(--font-secondary)",
		padding: "1.5rem"
	},
	marginBottom: "4rem"
}) as typeof TextField;
