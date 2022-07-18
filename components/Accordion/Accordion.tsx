// Dependencies
import React, { useState } from "react";

// Styles
import {
	AccordionContainer,
	AccordionDescription,
	AccordionTitle,
	Details,
	Summary
} from "./Accordion.styles";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionProps {
	title: string;
	description: string;
}

const Accordion = ({ title, description }: AccordionProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expandChangeHandler = (_: React.SyntheticEvent, newValue: boolean) => {
		setIsExpanded(newValue);
	};

	return (
		<AccordionContainer expanded={isExpanded} onChange={expandChangeHandler}>
			<Summary expandIcon={<ExpandMoreIcon />}>
				<AccordionTitle>{title}</AccordionTitle>
			</Summary>
			<Details>
				<AccordionDescription>{description}</AccordionDescription>
			</Details>
		</AccordionContainer>
	);
};

export default Accordion;
