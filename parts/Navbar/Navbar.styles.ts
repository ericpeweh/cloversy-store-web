// Dependencies
import { styled } from "@mui/system";

export const HeaderContainer = styled("header")({
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
	width: "100%"
});

export const HeaderLogo = styled("a")({
	display: "block",
	width: "16rem",
	cursor: "pointer"
});

// Navigation
export const NavLinks = styled("nav")({
	display: "flex",
	justifyContent: "space-between"
});

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
export const HeaderActions = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "1rem"
});
