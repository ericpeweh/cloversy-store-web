// Dependencies
import React from "react";

// Styles
import { TitleContainer } from "./PageTitle.styles";

interface PageTitleProps {
	children: React.ReactElement | string;
}

const PageTitle = ({ children }: PageTitleProps) => {
	return <TitleContainer>{children}</TitleContainer>;
};

export default PageTitle;
