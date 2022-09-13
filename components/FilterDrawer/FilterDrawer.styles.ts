// Dependencies
import { styled } from "@mui/system";

// Components
import { Drawer } from "@mui/material";

export const FilterDrawerContainer = styled(Drawer)(({ theme }) => ({
	position: "relative",
	"& .MuiDrawer-paper": {
		width: "40rem",
		display: "flex",
		flexDirection: "column",
		padding: "2rem 3rem 3rem",
		[theme.breakpoints.down("sm")]: {
			width: "100vw",
			paddingBottom: "2rem"
		}
	}
})) as typeof Drawer;

export const FilterTitle = styled("h3")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	marginBottom: "2rem",
	fontFamily: "var(--font-secondary)",
	textTransform: "uppercase",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		marginBottom: "1.2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		marginBottom: "0.7rem"
	}
}));

export const FilterContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginBottom: "6rem",
	[theme.breakpoints.down("md")]: {
		marginBottom: "5rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "4rem"
	}
}));

export const AmountFilterText = styled("p")(({ theme }) => ({
	fontWeight: 400,
	fontSize: "1.5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
}));
