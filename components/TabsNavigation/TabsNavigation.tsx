// Dependencies
import React, { useState } from "react";

// Styles
import { TabHeader, TabsNavigationContainer } from "./TabsNavigation.styles";

interface TabsNavigationChildProps {
	label: string;
	show: boolean;
}

interface TabsNavigationProps {
	children:
		| React.ReactElement<TabsNavigationChildProps>
		| React.ReactElement<TabsNavigationChildProps>[];
	variant?: "standard" | "scrollable" | "fullWidth" | undefined;
	value?: number;
	onChangeCb?: (value: number) => void;
}

const TabsNavigation = ({
	children,
	variant = "standard",
	value,
	onChangeCb
}: TabsNavigationProps) => {
	const [tabsValue, setTabsValue] = useState(value ?? 0);

	const tabsChangeHandler = (_: React.SyntheticEvent, newValue: number) => {
		setTabsValue(newValue);
		onChangeCb && onChangeCb(newValue);
	};

	return (
		<>
			<TabsNavigationContainer onChange={tabsChangeHandler} value={tabsValue} variant={variant}>
				{React.Children.map(children, element => (
					<TabHeader label={element.props.label} />
				))}
			</TabsNavigationContainer>
			{React.Children.map(children, (element, i) => {
				if (tabsValue === i) return element;
			})}
		</>
	);
};

export default TabsNavigation;
