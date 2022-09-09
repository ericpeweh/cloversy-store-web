// Dependencies
import { styled } from "@mui/system";

export const TermsConditionsContainer = styled("section")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem",
	[theme.breakpoints.down("lg")]: {
		paddingBottom: "8rem"
	},
	[theme.breakpoints.down("md")]: {
		paddingBottom: "6rem"
	},
	[theme.breakpoints.down("sm")]: {
		paddingBottom: "4rem"
	}
}));

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
