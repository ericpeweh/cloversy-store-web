// Dependencies
import { styled } from "@mui/system";

// Components
import { Drawer, IconButton, Select, TextField } from "@mui/material";

export const SearchDrawerContainer = styled(Drawer)({
	position: "relative",
	"& .MuiDrawer-paper": {
		minHeight: "30vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "10rem 0 5rem"
	}
}) as typeof Drawer;

export const SearchBarContainer = styled("div")({
	display: "flex",
	justifyContent: "center",
	width: "40vw",
	gap: "3rem"
});

export const SearchInput = styled(TextField)({
	"& input": {
		fontSize: "3.5rem",
		fontFamily: "var(--font-secondary)"
	}
}) as typeof TextField;

export const CloseButton = styled(IconButton)(({ theme }) => ({
	position: "absolute",
	top: "3rem",
	right: "20vw",
	backgroundColor: theme.palette.grey[200]
}));

export const SearchResult = styled("div")({
	width: "50vw",
	marginTop: "6rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem"
});
