// Dependencies
import { styled } from "@mui/system";

// Components
import { Avatar, Grid, List, ListItem, ListItemText } from "@mui/material";

export const ContactUsContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	minHeight: "100vh"
});

export const ContactContainer = styled("div")({
	width: "160rem ",
	marginBottom: "5rem",
	"@media screen and (max-width: 1700px)": {
		width: "95vw"
	}
});

// Contact Information
export const ContactInformation = styled("div")(({ theme }) => ({
	width: "100%",
	padding: "4rem",
	backgroundImage:
		"linear-gradient(rgba(85, 144, 78, 0.8),rgba(85, 144, 78, 0.5)), url(/images/3.jpg)",
	backgroundSize: "cover",
	backgroundPosition: "center",
	borderRadius: "0.5rem",
	height: "100%",
	[theme.breakpoints.down("md")]: {
		padding: "3rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "2rem"
	}
}));

export const ContactInformationTitle = styled("h1")(({ theme }) => ({
	fontSize: "2.5rem",
	fontWeight: 500,
	marginBottom: "1rem",
	fontFamily: "var(--font-secondary)",
	color: "#fff",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.3rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem"
	}
}));

export const ContactInformationDesc = styled("p")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 400,
	color: "#fff",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ContactInformationList = styled(List)({
	marginTop: "1rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start"
}) as typeof List;

export const ContactInformationListItem = styled(ListItem)(({ theme }) => ({
	paddingLeft: "0",
	cursor: "pointer",
	width: "max-content",
	marginBottom: "1rem",
	[theme.breakpoints.down("sm")]: {
		marginBottom: 0
	}
}));

export const ContactAvatar = styled(Avatar)({
	backgroundColor: "transparent"
});

export const ContactInformationText = styled(ListItemText)({
	color: "#fff",
	fontSize: "1.6rem"
}) as typeof ListItemText;

// Contact Form
export const ContactForm = styled("form")(({ theme }) => ({
	padding: "4rem",
	backgroundColor: "#fff",
	borderRadius: "0.5rem",
	border: `1px solid ${theme.palette.grey[400]}`,
	[theme.breakpoints.down("md")]: {
		marginTop: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "3rem 2rem"
	}
}));
