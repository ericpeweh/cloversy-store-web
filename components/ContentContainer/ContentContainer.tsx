import React from "react";
import { ContentContainerOuter } from "./ContentContainer.styles";

interface ContentContainerProps {
	children: any;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
	return <ContentContainerOuter>{children}</ContentContainerOuter>;
};

export default ContentContainer;
