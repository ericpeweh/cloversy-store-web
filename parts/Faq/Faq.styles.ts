// Dependencies
import { styled } from "@mui/system";

export const FaqContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	minHeight: "100vh"
});

export const FaqSubtitle = styled("p")(({ theme }) => ({
	fontSize: "1.7rem",
	marginBottom: "5rem",
	textAlign: "center",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ContentContainer = styled("div")(({ theme }) => ({
	width: "120rem",
	marginBottom: "10rem",
	[theme.breakpoints.down("lg")]: {
		width: "90vw",
		marginBottom: "7rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		padding: "2rem",
		marginBottom: "5rem"
	}
}));
