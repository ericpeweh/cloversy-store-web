// Dependencies
import React from "react";

// Components
import { Stack, SxProps } from "@mui/material";

interface FallbackContainerProps {
	children: React.ReactNode;
	size?: "small" | "medium";
	sx?: SxProps;
}

const FallbackContainer = ({ children, size = "medium", sx = {} }: FallbackContainerProps) => {
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{ height: size === "medium" ? "20rem" : "13rem", width: "100%", ...(sx && sx) }}
		>
			{children}
		</Stack>
	);
};

export default FallbackContainer;
