// Dependencies
import React from "react";

// Styles
import { StatusBadgeContainer } from "./StatusBadge.styles";

interface StatusBadgeProps {
	children: string | React.ReactElement | React.ReactElement[];
	color?: "primary" | "secondary";
}

const StatusBadge = ({ children, color = "primary" }: StatusBadgeProps) => {
	return <StatusBadgeContainer color={color}>{children}</StatusBadgeContainer>;
};

export default StatusBadge;
