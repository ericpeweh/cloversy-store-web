import { styled } from "@mui/system";

interface TabsPanelProps {
	label: string;
}

export const TabsPanelContainer = styled("div", {
	shouldForwardProp: props => props !== "label"
})<TabsPanelProps>({
	margin: "0 auto",
	padding: "4rem 2rem",
	fontSize: "1.5rem",
	lineHeight: "2.5rem"
});
