// Dependencies
import React, { useState } from "react";

// Styles
import { AccordionContainer, Details, Summary } from "./Accordion.styles";

// Components
import ContentTitle from "../ContentTitle/ContentTitle";
import ContentDescription from "../ContentDescription/ContentDescription";

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
				<ContentTitle
					color={isExpanded ? "primary" : "black"}
					sx={{ mb: { xs: 0, md: 1, xl: 1.5 } }}
				>
					{title}
				</ContentTitle>
			</Summary>
			<Details>
				<ContentDescription>{description}</ContentDescription>
			</Details>
		</AccordionContainer>
	);
};

export default Accordion;
