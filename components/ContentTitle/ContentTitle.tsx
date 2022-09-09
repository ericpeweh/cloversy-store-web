// Dependencies
import { SxProps } from "@mui/material";
import React from "react";

// Styles
import { ContentTitleContainer } from "./ContentTitle.styles";

interface ContentTitleProps {
	children: any;
	color?: "primary" | "black";
	sx?: SxProps;
}

const ContentTitle = ({ children, color = "black", ...props }: ContentTitleProps) => {
	return (
		<ContentTitleContainer color={color} {...props}>
			{children}
		</ContentTitleContainer>
	);
};

export default ContentTitle;
