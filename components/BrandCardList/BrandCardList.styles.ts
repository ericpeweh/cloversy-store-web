// Dependencies
import { styled } from "@mui/system";
import Image from "next/image";

// Components
import { Grid } from "@mui/material";

export const BrandCards = styled(Grid)(({ theme }) => ({
	[theme.breakpoints.up("xl")]: {
		width: "145rem"
	},
	[theme.breakpoints.down("xl")]: {
		width: "135rem"
	},
	"@media screen and (max-width: 1250px)": {
		width: "125rem"
	},
	[theme.breakpoints.down("lg")]: {
		width: "120rem",
		padding: "0 1rem"
	},
	"@media screen and (max-width: 1150px)": {
		width: "100%"
	}
})) as typeof Grid;

export const BrandCard = styled(Grid)(({ theme }) => ({
	height: "60rem",
	borderRadius: "0.5rem",
	"@media screen and (max-width: 1250px)": {
		height: "58rem"
	},
	[theme.breakpoints.down("lg")]: {
		height: "55rem"
	},
	"@media screen and (max-width: 1150px)": {
		height: "48rem"
	},
	[theme.breakpoints.down("md")]: {
		height: "45rem"
	},
	[theme.breakpoints.down("sm")]: {
		height: "30rem"
	}
})) as typeof Grid;

export const CardContent = styled("div")({
	backgroundColor: "#fff",
	borderRadius: "0.5rem",
	overflow: "hidden",
	height: "100%",
	width: "100%",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	"&:hover img": {
		transform: "scale(1.1)"
	}
});

export const CardTitle = styled("h2")(({ theme }) => ({
	fontSize: "2.8rem",
	fontWeight: 400,
	color: "#fff",
	boxShadow: "var(--shadow-light)",
	position: "relative",
	top: 0,
	left: 0,
	zIndex: 10,
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2.2rem"
	}
}));

export const CardImage = styled(Image)({
	objectFit: "cover",
	objectPosition: "center",
	transition: "0.5s ease-out"
});
