// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid, IconButton, TextField } from "@mui/material";
import Button from "../../components/Button/Button";

export const FooterContainer = styled("footer")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	padding: "5rem 0 0 4rem",
	[theme.breakpoints.down("xl")]: {
		padding: "5rem 2rem 0rem 5rem"
	},
	[theme.breakpoints.down("lg")]: {
		paddingTop: "0rem",
		padding: "5rem 2rem 0rem 5rem"
	}
}));

export const FooterContent = styled(Grid)(({ theme }) => ({
	margin: "4rem 0 8rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",
	[theme.breakpoints.up("xl")]: {
		width: "145rem"
	},
	[theme.breakpoints.down("xl")]: {
		width: "134rem"
	},
	"@media screen and (max-width: 1250px)": {
		width: "126rem"
	},
	[theme.breakpoints.down("lg")]: {
		width: "118rem"
	},
	"@media screen and (max-width: 1150px)": {
		width: "95vw"
	}
})) as typeof Grid;

export const FooterSection = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	[theme.breakpoints.down("md")]: {
		width: "100%"
	}
}));

export const FooterSectionTitle = styled("h5")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 500,
	textTransform: "uppercase",
	color: "#fff",
	letterSpacing: "2px",
	marginBottom: "4rem",
	[theme.breakpoints.down("xl")]: {
		fontSize: "1.6rem",
		marginBottom: "3.5rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem",
		marginBottom: "3rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.4rem",
		marginBottom: "2.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem",
		marginBottom: "2rem"
	}
}));

export const FooterList = styled("ul")({
	listStyleType: "none"
});

export const FooterListItem = styled("li")(({ theme }) => ({
	color: theme.palette.grey[100],
	fontWeight: 300,
	fontSize: "1.5rem",
	paddingBottom: "2.5rem",
	cursor: "pointer",
	"&:hover > a::after": {
		width: "100%"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.4rem",
		paddingBottom: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem",
		paddingBottom: "1.8rem"
	}
}));

export const FooterListLink = styled("a")(({ theme }) => ({
	position: "relative",
	letterSpacing: "1px",
	"&::after": {
		content: "''",
		width: "0%",
		height: "2px",
		position: "absolute",
		left: "0",
		bottom: "-0.8rem",
		backgroundColor: theme.palette.grey[400],
		transition: "width 0.25s ease"
	}
}));

export const FooterSubscribeForm = styled("form")({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	width: "100%"
});

export const EmailInput = styled(TextField)(({ theme }) => ({
	background: "#fff",
	borderRadius: "0.5rem",
	"& input": {
		fontSize: "1.6rem !important",
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.5rem !important",
			padding: "1.8rem 2.2rem !important"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem !important",
			padding: "1.5rem 2rem !important"
		}
	},
	"& input::placeholder": {
		color: "#000"
	}
})) as typeof TextField;

export const SubscribeButton = styled(Button)({
	border: "2px solid #fff",
	alignSelf: "flex-end"
}) as typeof Button;

export const FooterBottom = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "145rem",
	padding: "3rem 0 2rem 3.2rem",
	[theme.breakpoints.up("xl")]: {
		width: "145rem"
	},
	[theme.breakpoints.down("xl")]: {
		width: "134rem"
	},
	"@media screen and (max-width: 1250px)": {
		width: "126rem"
	},
	[theme.breakpoints.down("lg")]: {
		width: "118rem"
	},
	"@media screen and (max-width: 1150px)": {
		width: "100%",
		padding: "3rem 2rem",
		paddingLeft: "2rem",
		gap: "1rem"
	},
	"@media screen and (max-width: 450px)": {
		flexDirection: "column-reverse",
		justifyContent: "center"
	}
}));

export const CopyrightText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	color: theme.palette.grey[500],
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const SocialIcon = styled(IconButton)(({ theme }) => ({
	color: theme.palette.grey[400],
	transition: "0.3s ease",
	"&:hover": {
		color: theme.palette.grey[200]
	}
})) as typeof IconButton;
