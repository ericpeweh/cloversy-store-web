// Dependencies
import React from "react";
import { IconButtonProps as MuiIconButtonProps } from "@mui/material";

// Styles
import { CustomIconButton, DotLoader } from "./IconButton.styles";

interface IconButtonProps extends MuiIconButtonProps {
	children: React.ReactNode;
	component?: any;
	loading?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
	(props: IconButtonProps, ref) => {
		const { children, loading = false, ...otherProps } = props;

		return (
			<CustomIconButton {...otherProps} ref={ref}>
				{loading && <DotLoader />}
				{children}
			</CustomIconButton>
		);
	}
);

IconButton.displayName = "IconButton";

export default IconButton;
