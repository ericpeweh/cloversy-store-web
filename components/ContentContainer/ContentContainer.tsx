// Dependencies
import { SxProps } from "@mui/material";
import React from "react";

// Styles
import { ContentContainerOuter } from "./ContentContainer.styles";

interface ContentContainerProps {
	children: any;
	sx?: SxProps;
}

const ContentContainer = ({ children, ...props }: ContentContainerProps) => {
	return <ContentContainerOuter {...props}>{children}</ContentContainerOuter>;
};

export default ContentContainer;
