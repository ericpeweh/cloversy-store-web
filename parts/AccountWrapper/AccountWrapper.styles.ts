// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const MyAccountContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem",
	minHeight: "100vh"
});

export const OuterContainer = styled("div")({
	width: "120rem"
});

export const GridContainer = styled(Grid)({}) as typeof Grid;

// Account Menu
export const AccountMenu = styled(Grid)(({ theme }) => ({
	borderRight: `1px solid ${theme.palette.grey[300]}`,
	paddingBottom: "10rem"
})) as typeof Grid;

export const AccountName = styled("h2")({
	fontSize: "2rem",
	fontWeight: 500,
	marginTop: "1rem"
});

export const MenuContainer = styled("nav")({
	marginTop: "4rem"
});

export const MenuList = styled("ul")({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	alignItems: "flex-start"
});

interface MenuItemProps {
	active?: boolean;
}

export const MenuItem = styled("li")<MenuItemProps>(({ theme, active }) => ({
	display: "flex",
	gap: "1.5rem",
	alignItems: "center",
	position: "relative",
	cursor: "pointer",
	color: active ? theme.palette.primary.main : theme.palette.secondary.main,
	"&::after": {
		content: "''",
		width: active ? "100%" : "0%",
		height: "2px",
		position: "absolute",
		left: "0",
		bottom: "-0.6rem",
		backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[800],
		transition: "width 0.25s ease"
	},
	"&:hover::after": {
		width: "100%"
	},
	"& > svg": {
		fontSize: "2.4rem"
	}
}));

export const MenuLabel = styled("a")({
	fontSize: "1.7rem",
	fontWeight: 400
});

export const ContentContainer = styled(Grid)({}) as typeof Grid;
