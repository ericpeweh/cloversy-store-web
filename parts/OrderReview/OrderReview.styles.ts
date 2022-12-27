// Dependencies
import { styled } from "@mui/system";

export const OrderReviewContainer = styled("div")(({ theme }) => ({
	width: "145rem",
	margin: "0 auto 10rem",
	[theme.breakpoints.down("xl")]: {
		width: "95vw",
		marginBottom: "7rem"
	},
	[theme.breakpoints.down("lg")]: {
		marginBottom: "4.5rem"
	},
	[theme.breakpoints.down("md")]: {
		marginBottom: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "0rem"
	}
}));

export const DetailsContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column"
});

export const Details = styled("div")(({ theme }) => ({
	padding: "2rem",
	[theme.breakpoints.down("sm")]: {
		padding: "1rem"
	}
}));

export const Section = styled("div")(({ theme }) => ({
	marginBottom: "5rem",
	[theme.breakpoints.down("md")]: {
		marginBottom: "4rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "3rem"
	}
}));

export const OrderCardContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	"& > div": {
		paddingLeft: "0",
		paddingRight: "0"
	}
});

export const BigText = styled("p")(({ theme }) => ({
	fontSize: "2.4rem",
	fontWeight: 600,
	marginRight: "1rem",
	marginTop: "0.5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem"
	}
}));

export const InputContainer = styled("div")({
	position: "relative"
});
