import { styled } from "@mui/system";

export const SectionContainer = styled("section")(({ theme }) => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	margin: "10rem 0",
	[theme.breakpoints.down("xl")]: {
		margin: "8rem 0"
	},
	[theme.breakpoints.down("lg")]: {
		margin: "6rem 0"
	},
	[theme.breakpoints.down("md")]: {
		margin: "4rem 0"
	},
	[theme.breakpoints.down("sm")]: {
		margin: "3rem 0"
	}
}));

export const SectionTitle = styled("h2")(({ theme }) => ({
	fontSize: "3rem",
	fontWeight: 400,
	[theme.breakpoints.down("xl")]: {
		fontSize: "2.9rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.8rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2.4rem"
	}
}));
