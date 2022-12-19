// Dependencies
import React from "react";

// Styles
import { TabsPanelContainer } from "./TabsPanel.styles";

interface TabsPanelProps {
	label: string;
	children: React.ReactNode | React.ReactNode[];
	noHorizontalSpacing?: boolean;
}

const TabsPanel = ({ label, children, noHorizontalSpacing = false }: TabsPanelProps) => {
	return (
		<TabsPanelContainer label={label} noHorizontalSpacing={noHorizontalSpacing}>
			{children}
		</TabsPanelContainer>
	);
};

export default TabsPanel;
