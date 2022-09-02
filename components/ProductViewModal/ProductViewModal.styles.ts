// Dependencies
import { styled } from "@mui/system";

// Components
import { Dialog, Grid } from "@mui/material";

export const ProductViewContainer = styled(Dialog)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		display: "none"
	},
	"& .MuiDialog-paper": {
		padding: "4rem 2rem 3rem",
		[theme.breakpoints.up("xl")]: {
			minWidth: "50vw",
			minHeight: "60vh"
		},
		"@media screen and (max-width: 1700px)": {
			minWidth: "55vw"
		},
		[theme.breakpoints.down("xl")]: {
			minWidth: "75vw",
			minHeight: "65vh"
		},
		[theme.breakpoints.down("lg")]: {
			minWidth: "90vw"
		}
	}
})) as typeof Dialog;

export const ContentContainer = styled(Grid)({
	height: "100%",
	flex: "1"
}) as typeof Grid;

// Left side
export const ImageCarousel = styled("div")({
	display: "flex",
	height: "100%",
	width: "100%"
});

// Right side
export const ProductDetails = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	height: "100%",
	width: "100%",
	fontSize: "1.6rem",
	overflow: "auto",
	paddingRight: "1rem",
	paddingBottom: "3rem",
	marginTop: "1rem",
	maxHeight: "calc(60vh - 4rem)",
	[theme.breakpoints.down("xl")]: {
		maxHeight: "calc(65vh - 4rem)"
	}
}));

export const ProductTitle = styled("h3")({
	fontFamily: "var(--font-secondary)",
	fontSize: "2.3rem",
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
