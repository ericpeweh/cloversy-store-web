import { styled } from "@mui/system";

interface TabsPanelProps {
	label: string;
	noHorizontalSpacing?: boolean;
}

export const TabsPanelContainer = styled("div", {
	shouldForwardProp: props => props !== "label" && props !== "noHorizontalSpacing"
})<TabsPanelProps>(({ noHorizontalSpacing }) => ({
	margin: "0 auto",
	padding: "4rem 2rem",
	paddingLeft: noHorizontalSpacing ? "0" : "2rem",
	fontSize: "1.5rem",
	lineHeight: "2.5rem"
}));
