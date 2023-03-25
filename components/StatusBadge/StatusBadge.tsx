// Dependencies
import React from "react";

// Styles
import { StatusBadgeContainer } from "./StatusBadge.styles";

interface StatusBadgeProps {
	children: string | React.ReactElement | React.ReactElement[];
	color?: "primary" | "secondary" | "error" | "info" | "warning" | string;
}

const StatusBadge = ({ children, color = "primary" }: StatusBadgeProps) => {
	return (
		<StatusBadgeContainer color={color} data-testid="status-badge">
			{children}
		</StatusBadgeContainer>
	);
};

export default StatusBadge;
