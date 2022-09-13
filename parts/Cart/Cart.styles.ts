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

export const CartContentContainer = styled(Grid)(({ theme }) => ({
	width: "145rem",
	marginTop: "2rem",
	[theme.breakpoints.down("xl")]: {
		width: "95vw"
	}
})) as typeof Grid;
