// Dependencies
import { styled } from "@mui/system";

// Components
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

interface AccordionContainerProps {
	active?: boolean;
}

export const AccordionContainer = styled(Accordion, {
	shouldForwardProp: props => props !== "active"
})<AccordionContainerProps>(({ theme, expanded }) => ({
	border: `1px solid ${expanded ? theme.palette.primary.main : theme.palette.grey[400]}`,
	borderRadius: "0.5rem",
	marginBottom: "1.5rem"
})) as typeof Accordion;

export const Summary = styled(AccordionSummary)({}) as typeof AccordionSummary;

export const Details = styled(AccordionDetails)({}) as typeof AccordionDetails;
