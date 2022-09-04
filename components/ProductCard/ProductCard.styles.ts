// Dependencies
import { styled } from "@mui/system";

// Components
import { Card, CardMedia } from "@mui/material";

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
	opacity: "0",
	[theme.breakpoints.down("md")]: {
		display: "none"
	}
}));

export const ProductCardContainer = styled(Card)(({ theme }) => ({
	boxShadow: "none",
	transition: "0.4s ease",
	"&:hover": {
		transform: "translateY(-0.5rem)",
		[theme.breakpoints.down("sm")]: {
			transform: "translateY(0)"
		}
	},
	"&:hover img": {
		transform: "scale(1.03)",
		[theme.breakpoints.down("sm")]: {
			transform: "scale(1)"
		}
	},
	"&:hover button": {
		bottom: "0",
		opacity: "1"
	}
})) as typeof Card;

export const ProductImageContainer = styled("div")({
	position: "relative",
	overflow: "hidden",
	borderRadius: "0.5rem"
});

interface ProductImageProps {
	size?: string;
}

export const ProductImage = styled(CardMedia, {
	shouldForwardProp: prop => prop !== "size"
})<ProductImageProps>({
	cursor: "pointer",
	transformOrigin: "bottom center",
	transition: "0.4s ease"
}) as typeof CardMedia;

export const ProductTitle = styled("h4")(({ theme }) => ({
	fontSize: "1.8rem",
	fontWeight: 500,
	marginBottom: "1rem",
	textTransform: "uppercase",
	cursor: "pointer",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ProductPrice = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	color: theme.palette.grey[600],
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));
