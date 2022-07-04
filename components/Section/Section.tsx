// Dependencies
import React from "react";

// Styles
import { SectionContainer, SectionTitle } from "./Section.styles";

interface SectionProps {
	title?: string;
	children: React.ReactNode;
}

const Section = ({ children, title }: SectionProps) => {
	return (
		<SectionContainer>
			{title && <SectionTitle>{title}</SectionTitle>}
			{children}
		</SectionContainer>
	);
};

export default Section;
