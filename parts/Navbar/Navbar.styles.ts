// Dependencies
import { styled } from "@mui/system";

export const HeaderContainer = styled("header")(({ theme }) => ({
	height: "9rem",
	background: "#fff",
	fontSize: "1.8rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	boxShadow: "var(--shadow-light)",
	padding: "0 3rem",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: 1000,
	width: "100%",
	[theme.breakpoints.down("md")]: {
		height: "8rem"
	},
	[theme.breakpoints.down("sm")]: {
		height: "7rem",
		padding: "0 2rem"
	}
}));

export const HeaderLogo = styled("a")(({ theme }) => ({
	display: "block",
	width: "16rem",
	cursor: "pointer",
	[theme.breakpoints.down("md")]: {
		width: "12rem"
	}
}));

// Navigation
export const NavLinks = styled("nav")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.down("md")]: {
		display: "none"
	}
}));

export const NavLists = styled("ul")({
	listStyleType: "none"
});

export const NavListItem = styled("li")({
	padding: "0 2rem",
	display: "inline-block",
	cursor: "pointer",
	"&:hover > a::after": {
		width: "100%"
	}
});

interface NavLinkType {
	active?: boolean;
}

export const NavLink = styled("a", {
	shouldForwardProp: prop => prop !== "active"
})<NavLinkType>(({ theme, active }) => ({
	position: "relative",
	fontSize: "1.7rem",
	textTransform: "uppercase",
	letterSpacing: "1px",
	"&::after": {
		content: "''",
		width: active ? "100%" : "0%",
		height: "2px",
		position: "absolute",
		left: "0",
		bottom: "-0.8rem",
		backgroundColor: theme.palette.secondary.main,
		transition: "width 0.25s ease"
	}
}));

// Action buttons
export const HeaderActions = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	[theme.breakpoints.down("md")]: {
		"& > button:not(:last-child)": {
			display: "none"
		}
	}
}));
