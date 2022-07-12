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

export const ContentContainer = styled("div")(({ theme }) => ({
	marginTop: "5rem",
	borderRadius: "0.5rem",
	overflow: "hidden",
	border: `1px solid ${theme.palette.grey[300]}`,
	minHeight: "33rem"
}));

export const ContentTitle = styled("h2")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	padding: "2rem",
	background: theme.palette.grey[200]
}));

export const InputContainer = styled(Stack)({
	padding: "2rem"
}) as typeof Stack;

export const ResultInfo = styled(Grid)({
	padding: "2rem"
}) as typeof Grid;
