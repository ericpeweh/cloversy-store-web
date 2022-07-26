import { styled } from "@mui/system";
import { Stack, Grid } from "@mui/material";

export const VoucherInputContainer = styled("div")(({ theme }) => ({
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
