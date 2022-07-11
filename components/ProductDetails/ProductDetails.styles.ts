// Dependencies
import { Breadcrumbs, Grid, Pagination } from "@mui/material";
import { styled } from "@mui/system";

export const ProductDetailsContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem"
});

export const GridContainer = styled(Grid)({
	width: "145rem",
	marginTop: "2rem"
}) as typeof Grid;

export const ImageCarouselContainer = styled(Grid)({}) as typeof Grid;

export const ProductInfoContainer = styled(Grid)({}) as typeof Grid;

// Right side
export const ProductTitle = styled("h3")({
	fontFamily: "var(--font-secondary)",
	fontSize: "2.6rem",
	textTransform: "uppercase",
	marginBottom: "0.5rem"
});

export const RatingText = styled("p")({
	fontSize: "1.5rem",
	display: "flex",
	letterSpacing: "1px",
	marginBottom: "-1px"
});

export const ProductPrice = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 500,
	color: theme.palette.grey[800],
	margin: "2rem 0"
}));

export const ProductDesription = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	lineHeight: "2.4rem",
	fontWeight: 400,
	color: theme.palette.grey[800],
	marginBottom: "2rem"
}));

export const MainText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	color: theme.palette.grey[800],
	margin: "2rem 0"
}));

export const ProductNavigationContainer = styled("div")({
	marginTop: "4rem",
	width: "100%",
	display: "flex",
	justifyContent: "center"
});

export const ProductBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
	width: "145rem",
	backgroundColor: theme.palette.grey[100],
	padding: "1.5rem 3rem",
	borderRadius: "0.5rem"
})) as typeof Breadcrumbs;

export const ReviewsPagination = styled(Pagination)({
	width: "100%",
	marginTop: "4rem",
	display: "flex",
	justifyContent: "center"
}) as typeof Pagination;
