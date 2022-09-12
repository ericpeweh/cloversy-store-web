// Dependencies
import { styled } from "@mui/system";

// Components
import { Tabs, Tab } from "@mui/material";

export const TabsNavigationContainer = styled(Tabs)({}) as typeof Tabs;

export const TabHeader = styled(Tab)(({ theme }) => ({
	fontSize: "1.6rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
})) as typeof Tab;
