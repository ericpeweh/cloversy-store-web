// Dependencies
import { styled } from "@mui/system";

export const ProductListItemContainer = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "3rem",
	padding: "2rem 0",
	[theme.breakpoints.down("md")]: {
		gap: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		gap: "1.5rem"
	}
}));

export const ProductImageContainer = styled("div")({
	position: "relative",
	overflow: "hidden",
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
})<ProductImageProps>(({ imageUrl, theme }) => ({
	width: "25rem",
	height: "18rem",
	backgroundImage: `url(${imageUrl})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
	borderRadius: "0.5rem",
	"&:hover button": {
		bottom: "0",
		opacity: "1"
	},
	[theme.breakpoints.down("lg")]: {
		width: "18rem",
		height: "14rem"
	},
	[theme.breakpoints.down("md")]: {
		width: "14rem",
		height: "10rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "11rem",
		height: "8rem"
	}
}));

export const ProductContent = styled("div")({
	flex: 1
});

export const ProductTitle = styled("h4")(({ theme }) => ({
	fontSize: "1.8rem",
	fontWeight: 500,
	marginBottom: "1rem",
	textTransform: "uppercase",
	cursor: "pointer",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const ProductPrice = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	color: theme.palette.grey[600],
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		marginTop: "-1rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const ProductDesription = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	lineHeight: "2.4rem",
	fontWeight: 400,
	color: theme.palette.grey[800],
	margin: "1rem 0 1.5rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
}));

export const ProductActionsContainer = styled("div")({
	display: "flex",
	gap: "2rem"
});
