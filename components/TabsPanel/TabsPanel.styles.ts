import { styled } from "@mui/system";

interface TabsPanelProps {
	label: string;
	noHorizontalSpacing?: boolean;
}

export const TabsPanelContainer = styled("div", {
	shouldForwardProp: props => props !== "label" && props !== "noHorizontalSpacing"
})<TabsPanelProps>(({ noHorizontalSpacing, theme }) => ({
	margin: "0 auto",
	padding: "4rem 2rem",
	paddingLeft: noHorizontalSpacing ? "0" : "2rem",
	fontSize: "1.5rem",
	lineHeight: "2.5rem",
	[theme.breakpoints.down("lg")]: {
		padding: "3.5rem 1rem",
		fontSize: "1.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "2.5rem 0rem",
		fontSize: "1.3rem"
	}
}));
