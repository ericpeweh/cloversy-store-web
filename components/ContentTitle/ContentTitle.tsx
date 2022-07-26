// Dependencies
import React from "react";

// Styles
import { ContentTitleContainer } from "./ContentTitle.styles";

interface ContentTitleProps {
	children: any;
	color?: "primary" | "black";
}

const ContentTitle = ({ children, color = "black" }: ContentTitleProps) => {
	return <ContentTitleContainer color={color}>{children}</ContentTitleContainer>;
};

export default ContentTitle;
