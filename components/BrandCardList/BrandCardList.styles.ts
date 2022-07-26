// Dependencies
import { styled } from "@mui/system";
import Image from "next/image";

// Components
import { Grid } from "@mui/material";

export const BrandCards = styled(Grid)(({ theme }) => ({
	width: "145rem"
})) as typeof Grid;

export const BrandCard = styled(Grid)({
	height: "60rem",
	borderRadius: "0.5rem"
}) as typeof Grid;

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

export const CardTitle = styled("h2")({
	fontSize: "2.8rem",
	fontWeight: 400,
	color: "#fff",
	boxShadow: "var(--shadow-light)",
	position: "relative",
	top: 0,
	left: 0,
	zIndex: 10
});

export const CardImage = styled(Image)({
	objectFit: "cover",
	objectPosition: "center",
	transition: "0.5s ease-out"
});
