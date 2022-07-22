// Dependencies
import React from "react";

// Styles
import { StatusBadgeContainer } from "./StatusBadge.styles";

interface StatusBadgeProps {
	children: string | React.ReactElement | React.ReactElement[];
}

const StatusBadge = ({ children }: StatusBadgeProps) => {
	return <StatusBadgeContainer>{children}</StatusBadgeContainer>;
};

export default StatusBadge;
