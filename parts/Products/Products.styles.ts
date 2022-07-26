// Dependencies
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export const ProductsContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem"
});

export const ProductsHeader = styled(Stack)({
	justifyContent: "space-between",
	alignItems: "center",
	flexDirection: "row",
	alignSelf: "stretch",
	width: "180rem",
	margin: "0 auto"
}) as typeof Stack;

export const ProductsContent = styled("div")({
	margin: "2rem auto",
	alignSelf: "stretch",
	width: "180rem"
});
