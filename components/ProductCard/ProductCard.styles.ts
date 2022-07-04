// Dependencies
import { styled } from "@mui/system";

// Components
import { Card, CardMedia, CardContent } from "@mui/material";

export const QuickViewButton = styled("button")(({ theme }) => ({
	fontSize: "1.8rem",
	fontFamily: "var(--font-secondary)",
	border: "none",
	width: "100%",
	padding: "1rem 2rem",
	height: "5rem",
	position: "absolute",
	bottom: "-5rem",
	left: "0",
	zIndex: "100",
	transition: "0.4s ease",
	cursor: "pointer",
	background: theme.palette.secondary.dark,
	color: "#fff",
	opacity: "0"
}));

export const ProductCardContainer = styled(Card)({
	height: "40rem",
	boxShadow: "none",
	transition: "0.4s ease",
	"&:hover": {
		transform: "translateY(-0.5rem)"
	},
	"&:hover img": {
		transform: "scale(1.03)"
	},
	"&:hover button": {
		bottom: "0",
		opacity: "1"
	}
}) as typeof Card;

export const ProductImageContainer = styled("div")({
	position: "relative",
	overflow: "hidden",
	borderRadius: "0.5rem"
});

export const ProductImage = styled(CardMedia)({
	height: "32rem",
	cursor: "pointer",
	transformOrigin: "bottom center",
	transition: "0.4s ease"
}) as typeof CardMedia;

export const ProductTitle = styled("h4")({
	fontSize: "1.8rem",
	fontWeight: 500,
	marginBottom: "1rem",
	textTransform: "uppercase",
	cursor: "pointer"
});

export const ProductPrice = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	color: theme.palette.grey[600]
}));
