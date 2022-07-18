// Dependencies
import { styled } from "@mui/system";

export const TermsConditionsContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem"
});

export const ContentContainer = styled("div")({
	width: "120rem",
	margin: "3rem 0 2rem"
});

export const ContentTitle = styled("h2")({
	fontSize: "2rem",
	fontWeight: 600,
	marginBottom: "2.5rem",
	fontFamily: "var(--font-secondary)"
});

export const ContentDescription = styled("p")({
	fontSize: "1.6rem",
	fontWeight: 400,
	lineHeight: "3rem",
	marginBottom: "1.5rem"
});

export const ListContainer = styled("div")({
	marginTop: "1rem",
	marginLeft: "2rem"
});

export const Lists = styled("ul")({
	marginTop: "1rem",
	marginLeft: "-2rem",
	listStyleType: "none"
});

export const ListItem = styled("li")({});
