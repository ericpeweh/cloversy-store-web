// Dependencies
import { styled } from "@mui/system";

// Components
import { Avatar, Grid, List, ListItem, ListItemText } from "@mui/material";

export const ContactUsContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	height: "100vh"
});

export const ContactContainer = styled(Grid)({
	width: "160rem",
	marginBottom: "5rem"
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
	height: "100%"
}));

export const ContactInformationTitle = styled("h1")({
	fontSize: "2.5rem",
	fontWeight: 500,
	marginBottom: "1rem",
	fontFamily: "var(--font-secondary)",
	color: "#fff"
});

export const ContactInformationDesc = styled("p")({
	fontSize: "1.7rem",
	fontWeight: 400,
	color: "#fff"
});

export const ContactInformationList = styled(List)({
	marginTop: "1rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start"
}) as typeof List;

export const ContactInformationListItem = styled(ListItem)({
	paddingLeft: "0",
	cursor: "pointer",
	width: "max-content",
	marginBottom: "1rem"
});

export const ContactAvatar = styled(Avatar)({
	backgroundColor: "transparent"
});

export const ContactInformationText = styled(ListItemText)({
	color: "#fff"
}) as typeof ListItemText;

// Contact Form
export const ContactForm = styled("form")({
	padding: "4rem 2rem",
	backgroundColor: "#fff",
	borderRadius: "0.5rem"
});
