// Dependencies
import React from "react";

// Components
import { ContentDescriptionContainer } from "./ContentDescription.styles";

interface ContentDescriptionProps {
	children: any;
}

const ContentDescription = ({ children }: ContentDescriptionProps) => {
	return <ContentDescriptionContainer>{children}</ContentDescriptionContainer>;
};

export default ContentDescription;
