// Dependencies
import { styled } from "@mui/system";

// Components
import { Drawer, TextField } from "@mui/material";

export const SearchDrawerContainer = styled(Drawer)(({ theme }) => ({
	position: "relative",
	"& .MuiDrawer-paper": {
		minHeight: "30vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "10rem 0 5rem"
	},
	[theme.breakpoints.down("md")]: {
		display: "none"
	}
})) as typeof Drawer;

export const SearchBarContainer = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	width: "40vw",
	gap: "3rem",
	[theme.breakpoints.down("xl")]: {
		width: "45vw"
	},
	[theme.breakpoints.down("lg")]: {
		width: "50vw"
	},
	[theme.breakpoints.down("md")]: {
		width: "60vw"
	},
	[theme.breakpoints.down("sm")]: {
		width: "90vw"
	}
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
	"& input": {
		fontSize: "3.5rem",
		fontFamily: "var(--font-secondary)",
		[theme.breakpoints.down("xl")]: {
			fontSize: "3rem"
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "2.5rem"
		}
	}
})) as typeof TextField;

export const SearchResult = styled("div")(({ theme }) => ({
	width: "50vw",
	marginTop: "6rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "2rem",
	[theme.breakpoints.down(1700)]: {
		width: "60vw"
	},
	[theme.breakpoints.down("xl")]: {
		width: "70vw"
	},
	[theme.breakpoints.down("lg")]: {
		width: "70vw"
	},
	[theme.breakpoints.down("md")]: {
		width: "80vw"
	},
	[theme.breakpoints.down("sm")]: {
		width: "90vw"
	}
}));
