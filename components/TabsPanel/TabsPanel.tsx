// Dependencies
import React from "react";

// Styles
import { TabsPanelContainer } from "./TabsPanel.styles";

interface TabsPanelProps {
	label: string;
	children: React.ReactElement | React.ReactElement[];
}

const TabsPanel = ({ label, children }: TabsPanelProps) => {
	return <TabsPanelContainer label={label}>{children}</TabsPanelContainer>;
};

export default TabsPanel;
