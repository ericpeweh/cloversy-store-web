// Dependencies
import { styled } from "@mui/system";

// Components
import { Breadcrumbs } from "@mui/material";

export const BreadcrumbsOuterContainer = styled("div")(({ theme }) => ({
	marginTop: "4rem",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	[theme.breakpoints.down("xl")]: {
		marginTop: "3rem"
	},
	[theme.breakpoints.down("lg")]: {
		marginTop: "2rem"
	},
	[theme.breakpoints.down("md")]: {
		marginTop: "1rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "0rem"
	}
}));

export const BreadcrumbsContainer = styled(Breadcrumbs)(({ theme }) => ({
	width: "145rem",
	backgroundColor: theme.palette.grey[100],
	padding: "1.5rem 3rem",
	borderRadius: "0.5rem",
	"& a, & p": {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("xl")]: {
		width: "95vw"
	},
	[theme.breakpoints.down("md")]: {
		"& a, & p": {
			fontSize: "1.5rem"
		}
	},
	[theme.breakpoints.down("sm")]: {
		"& a, & p": {
			fontSize: "1.4rem"
		},
		padding: "1rem 2rem"
	}
})) as typeof Breadcrumbs;
