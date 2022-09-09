// Dependencies
import { styled } from "@mui/system";

export const ContentTitleContainer = styled("h2", {
	shouldForwardProp: props => props !== "color"
})(({ color, theme }) => ({
	fontSize: "2rem",
	fontWeight: 600,
	marginBottom: "2.5rem",
	fontFamily: "var(--font-secondary)",
	color: color === "primary" ? theme.palette.primary.main : theme.palette.grey[800],
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.9rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.7rem"
	}
}));
