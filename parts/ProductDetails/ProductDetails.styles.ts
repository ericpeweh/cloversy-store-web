// Dependencies
import { Grid, Pagination } from "@mui/material";
import { styled } from "@mui/system";

export const ProductDetailsContainer = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	margin: "0 auto 10rem auto",
	width: "145rem",
	[theme.breakpoints.down("xl")]: {
		width: "95vw",
		margin: "0 auto 8rem auto"
	},
	[theme.breakpoints.down("lg")]: {
		marginBottom: "8rem"
	},
	[theme.breakpoints.down("md")]: {
		marginBottom: "6rem",
		width: "100%",
		padding: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "4rem"
	}
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
	width: "100%",
	marginLeft: "-4rem !important",
	marginTop: "0rem !important",
	[theme.breakpoints.up("lg")]: {
		marginLeft: "-3.4rem !important"
	},
	[theme.breakpoints.down("lg")]: {
		marginLeft: "-3.2rem !important",
		marginTop: "-1rem !important"
	},
	[theme.breakpoints.down("md")]: {
		marginLeft: "-2.6rem !important"
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "-1.3rem !important"
	}
})) as typeof Grid;

export const ImageCarouselContainer = styled(Grid)({}) as typeof Grid;

export const ProductInfoContainer = styled(Grid)({}) as typeof Grid;

// Right side
export const ProductTitle = styled("h3")(({ theme }) => ({
	fontFamily: "var(--font-secondary)",
	fontSize: "2.6rem",
	textTransform: "uppercase",
	marginBottom: "0.5rem",
	[theme.breakpoints.down("xl")]: {
		fontSize: "2.4rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.8rem"
	}
}));

export const RatingText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	display: "flex",
	letterSpacing: "1px",
	marginBottom: "-1px",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const ProductPrice = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 500,
	color: theme.palette.grey[800],
	margin: "2rem 0",
	[theme.breakpoints.down("xl")]: {
		fontSize: "1.9rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.8rem",
		margin: "1.5rem 0"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.6rem",
		margin: "1rem 0"
	}
}));

export const ProductDesription = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	lineHeight: "2.4rem",
	fontWeight: 400,
	color: theme.palette.grey[800],
	marginBottom: "2rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem",
		lineHeight: "2.2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		lineHeight: "1.9rem"
	}
}));

export const MainText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	color: theme.palette.grey[800],
	margin: "2rem 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem",
		margin: "1.7rem 0"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		margin: "1.4rem 0"
	}
}));

export const ReviewsPagination = styled(Pagination)(({ theme }) => ({
	width: "100%",
	marginTop: "4rem",
	display: "flex",
	justifyContent: "center",
	[theme.breakpoints.down("md")]: {
		marginTop: "3.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "2.5rem",
		"& .MuiPagination-ul button": {
			fontSize: "1.4rem !important"
		}
	}
})) as typeof Pagination;

export const ProductsRecommendation = styled("div")(({ theme }) => ({
	width: "140rem",
	margin: "4rem auto 2rem",
	"@media screen and (max-width: 1450px)": {
		width: "95vw"
	},
	[theme.breakpoints.down("sm")]: {
		paddingRight: "1.7rem"
	}
}));

export const FallbackContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	flex: 1,
	gap: "2rem"
});

export const FallbackImageContainer = styled("div")(({ theme }) => ({
	width: "30rem",
	[theme.breakpoints.down("sm")]: {
		width: "100%"
	}
}));

export const FallbackImageText = styled("p")(({ theme }) => ({
	textAlign: "center",
	fontWeight: "bold",
	fontSize: "2rem",
	width: "max-content",
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.7rem"
	}
}));
