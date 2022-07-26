// Dependencies
import { Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";

export const CartContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem"
});

export const CartContentContainer = styled(Grid)({
	width: "145rem",
	marginTop: "2rem"
}) as typeof Grid;
