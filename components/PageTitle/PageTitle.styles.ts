// Dependencies
import { styled } from "@mui/system";

export const TitleContainer = styled("h1")(({ theme }) => ({
	fontSize: "3rem",
	fontWeight: 500,
	fontFamily: "var(--font-secondary)",
	margin: "4rem 0 5rem",
	[theme.breakpoints.down("xl")]: {
		fontSize: "2.8rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.6rem",
		margin: "3rem 0 4rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2.2rem",
		margin: "3rem 0 2rem"
	}
}));
