// Dependencies
import { styled } from "@mui/system";

export const ServerProblemContainer = styled("div")({
	minHeight: "80vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	marginBottom: "10rem"
});

export const CodeText = styled("h1")(({ theme }) => ({
	fontSize: "20rem",
	lineHeight: "24rem",
	color: theme.palette.primary.main,
	fontFamily: "var(--font-secondary)"
}));

export const Message = styled("p")({
	fontSize: "2.4rem",
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	marginBottom: "4rem"
});
