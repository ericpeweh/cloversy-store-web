// Dependencies
import { styled } from "@mui/system";

export const ContentTitleContainer = styled("h2", {
	shouldForwardProp: props => props !== "color"
})(({ color, theme }) => ({
	fontSize: "2rem",
	fontWeight: 600,
	marginBottom: "2.5rem",
	fontFamily: "var(--font-secondary)",
	color: color === "primary" ? theme.palette.primary.main : theme.palette.grey[700]
}));
