// Dependencies
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export const ProductsContainer = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem",
	"& > div.infinite-scroll-component__outerdiv": {
		width: "100%"
	},
	[theme.breakpoints.down("lg")]: {
		marginBottom: "8rem"
	},
	[theme.breakpoints.down("md")]: {
		marginBottom: "6rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "4rem"
	}
}));

export const ProductsHeader = styled(Stack)(({ theme }) => ({
	justifyContent: "space-between",
	alignItems: "center",
	flexDirection: "row",
	alignSelf: "stretch",
	width: "180rem",
	margin: "0 auto",
	"@media screen and (max-width: 1850px)": {
		width: "95vw"
	},
	[theme.breakpoints.down("md")]: {
		width: "100%",
		padding: "0 2rem"
	},
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "flex-start",
		gap: "1rem"
	}
})) as typeof Stack;

export const ProductsContent = styled("div")(({ theme }) => ({
	margin: "2rem auto",
	alignSelf: "stretch",
	width: "180rem",
	display: "flex",
	justifyContent: "center",
	"@media screen and (max-width: 1850px)": {
		width: "95vw"
	},
	[theme.breakpoints.down("md")]: {
		width: "100%",
		padding: "0 2rem"
	}
}));
