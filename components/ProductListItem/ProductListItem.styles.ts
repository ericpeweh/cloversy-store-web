// Dependencies
import { styled } from "@mui/system";

export const ProductListItemContainer = styled("div")({
	display: "flex",
	gap: "3rem",
	padding: "2rem 0"
});

export const ProductImageContainer = styled("div")({
	position: "relative",
	overflow: "hidden",
	borderRadius: "0.5rem",
	"&:hover button": {
		bottom: "0",
		opacity: "1"
	}
});

interface ProductImageProps {
	imageUrl: string;
}

export const ProductImage = styled("div", {
	shouldForwardProp: props => props !== "imageUrl"
})<ProductImageProps>(props => ({
	height: "18rem",
	width: "25rem",
	backgroundImage: `url(${props.imageUrl})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
	"&:hover button": {
		bottom: "0",
		opacity: "1"
	}
}));

export const ProductContent = styled("div")({
	flex: 1
});

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

export const ProductDesription = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	lineHeight: "2.4rem",
	fontWeight: 400,
	color: theme.palette.grey[800],
	margin: "1rem 0 1.5rem"
}));

export const ProductActionsContainer = styled("div")({
	display: "flex",
	gap: "2rem"
});
