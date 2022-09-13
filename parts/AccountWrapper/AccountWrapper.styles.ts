// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const MyAccountContainer = styled("section")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem",
	minHeight: "100vh",
	[theme.breakpoints.down("lg")]: {
		paddingBottom: "8rem"
	},
	[theme.breakpoints.down("md")]: {
		paddingBottom: "6rem"
	},
	[theme.breakpoints.down("sm")]: {
		paddingBottom: "4rem"
	}
}));

export const OuterContainer = styled("div")(({ theme }) => ({
	width: "120rem",
	[theme.breakpoints.down("lg")]: {
		width: "90vw"
	},
	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		padding: "2rem"
	}
}));

export const GridContainer = styled(Grid)({}) as typeof Grid;

// Account Menu
export const AccountMenu = styled(Grid)(({ theme }) => ({
	borderRight: `1px solid ${theme.palette.grey[300]}`,
	paddingBottom: "10rem",
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.down("xl")]: {
		paddingBottom: "7rem"
	},
	[theme.breakpoints.down("lg")]: {
		alignItems: "center",
		borderRight: "none"
	},
	[theme.breakpoints.down("md")]: {
		paddingBottom: "5rem"
	},
	[theme.breakpoints.down("sm")]: {
		paddingBottom: "3rem"
	}
})) as typeof Grid;

export const AccountName = styled("h2")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 500,
	marginTop: "1rem",
	[theme.breakpoints.down("lg")]: {
		marginTop: "2rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.7rem"
	}
}));

export const MenuContainer = styled("nav")(({ theme }) => ({
	marginTop: "4rem",
	[theme.breakpoints.down("lg")]: {
		alignSelf: "center"
	},
	[theme.breakpoints.down("md")]: {
		marginTop: "3rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "2rem"
	}
}));

export const MenuList = styled("ul")(({ theme }) => ({
	display: "grid",
	gap: "2rem",
	gridTemplateColumns: "repeat(1, 1fr)",
	justifyItems: "flex-start",
	[theme.breakpoints.down("lg")]: {
		gridTemplateColumns: "repeat(3, 1fr)",
		justifyItems: "center",
		rowGap: "2.5rem",
		columnGap: "5rem",
		width: "100%"
	},
	"@media screen and (max-width: 750px)": {
		gridTemplateColumns: "repeat(2, 1fr)",
		columnGap: "2rem",
		marginTop: "2rem"
	}
}));

interface MenuItemProps {
	isActive?: boolean;
}

export const MenuItem = styled("li", {
	shouldForwardProp: props => props !== "isActive"
})<MenuItemProps>(({ theme, isActive }) => ({
	display: "flex",
	gap: "1.5rem",
	alignItems: "center",
	position: "relative",
	cursor: "pointer",
	color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
	[theme.breakpoints.down("sm")]: {
		gap: "1rem"
	},
	"&::after": {
		content: "''",
		width: isActive ? "100%" : "0%",
		height: "2px",
		position: "absolute",
		left: "0",
		bottom: "-0.6rem",
		backgroundColor: isActive ? theme.palette.primary.main : theme.palette.grey[800],
		transition: "width 0.25s ease"
	},
	"&:hover::after": {
		width: "100%"
	},
	"& > svg": {
		fontSize: "2.4rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "2.2rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "2rem"
		}
	}
}));

export const MenuLabel = styled("a")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 400,
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ContentContainer = styled(Grid)(({ theme }) => ({})) as typeof Grid;
