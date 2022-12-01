// Dependencies
import React from "react";
import { IconButtonProps as MuiIconButtonProps } from "@mui/material";

// Styles
import { CustomIconButton, DotLoader } from "./IconButton.styles";

interface IconButtonProps extends MuiIconButtonProps {
	children: React.ReactNode;
	component?: any;
}

interface IconButtonProps {
	loading?: boolean;
}

const IconButton = ({ children, loading = false, ...props }: IconButtonProps) => {
	return (
		<CustomIconButton {...props}>
			{loading && <DotLoader />}
			{children}
		</CustomIconButton>
	);
};

export default IconButton;
