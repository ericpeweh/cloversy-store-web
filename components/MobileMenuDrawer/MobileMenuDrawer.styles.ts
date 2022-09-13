// Dependencies
import { Drawer, TextField } from "@mui/material";
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

export const MobileMenuItem = styled("a")(({ theme }) => ({
	marginTop: "0",
	fontWeight: 400,
	textTransform: "uppercase",
	fontSize: "1.8rem",
	cursor: "pointer",
	padding: "1.7rem 0",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.7rem",
		padding: "1.4rem 0"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.6rem",
		padding: "1.3rem 0"
	}
}));

export const MobileMenuActionButtons = styled("div")(({ theme }) => ({
	justifySelf: "flex-end",
	display: "flex",
	flexDirection: "column",
	marginTop: "auto",
	fontSize: "1.9rem",
	"& p": {
		[theme.breakpoints.down("md")]: {
			fontSize: "1.7rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem"
		}
	}
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
	"& input": {
		fontSize: "2.2rem",
		fontFamily: "var(--font-secondary)",
		padding: "1.5rem",
		[theme.breakpoints.down("lg")]: {
			fontSize: "2rem"
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1.8rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.6rem"
		}
	},
	marginBottom: "4rem"
})) as typeof TextField;
