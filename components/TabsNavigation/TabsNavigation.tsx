// Dependencies
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

// Styles
import { TabsNavigationContainer } from "./TabsNavigation.styles";

interface TabsNavigationChildProps {
	label: string;
	show: boolean;
}

interface TabsNavigationProps {
	children:
		| React.ReactElement<TabsNavigationChildProps>
		| React.ReactElement<TabsNavigationChildProps>[];
}

const TabsNavigation = ({ children }: TabsNavigationProps) => {
	const [tabsValue, setTabsValue] = useState(0);

	const tabsChangeHandler = (_: React.SyntheticEvent, newValue: number) => {
		setTabsValue(newValue);
	};

	return (
		<>
			<TabsNavigationContainer onChange={tabsChangeHandler} value={tabsValue}>
				{React.Children.map(children, element => (
					<Tab {...element.props} label={element.props.label} />
				))}
			</TabsNavigationContainer>
			{React.Children.map(children, (element, i) => {
				if (tabsValue === i) return element;
			})}
		</>
	);
};

export default TabsNavigation;
