// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid, IconButton, TextField } from "@mui/material";
import Button from "../Button/Button";

export const FooterContainer = styled("footer")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	minHeight: "20rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
}));

export const FooterContent = styled(Grid)({
	width: "145rem",
	margin: "4rem 0 8rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start"
}) as typeof Grid;

export const FooterSection = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start"
});

export const FooterSectionTitle = styled("h5")({
	fontSize: "1.8rem",
	fontWeight: 500,
	textTransform: "uppercase",
	color: "#fff",
	letterSpacing: "2px",
	marginBottom: "4rem"
});

export const FooterList = styled("ul")({
	listStyleType: "none"
});

export const FooterListItem = styled("li")(({ theme }) => ({
	color: theme.palette.grey[100],
	fontWeight: 300,
	fontSize: "1.6rem",
	paddingBottom: "2.5rem",
	cursor: "pointer",
	"&:hover > a::after": {
		width: "100%"
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

export const EmailInput = styled(TextField)({
	background: "#fff",
	borderRadius: "0.5rem",
	"& input": {
		fontSize: "1.7rem !important"
	},
	"& input::placeholder": {
		color: "#000"
	}
}) as typeof TextField;

export const SubscribeButton = styled(Button)({
	border: "2px solid #fff",
	alignSelf: "flex-end"
});

export const FooterBottom = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "145rem",
	padding: "3rem 0 2rem 3.2rem"
});

export const CopyrightText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	color: theme.palette.grey[500]
}));

export const SocialIcon = styled(IconButton)(({ theme }) => ({
	color: theme.palette.grey[400],
	transition: "0.3s ease",
	"&:hover": {
		color: theme.palette.grey[200]
	}
})) as typeof IconButton;
