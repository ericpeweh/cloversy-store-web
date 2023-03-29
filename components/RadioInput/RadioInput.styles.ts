// Dependencies
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import { styled } from "@mui/system";

export const RadioInputContainer = styled(FormControl)({}) as typeof FormControl;

export const RadioInputLabel = styled(FormLabel, {
	shouldForwardProp: props => props !== "error"
})<{ error: boolean }>(({ error, theme }) => ({
	color: error ? theme.palette.error.main : theme.palette.primary.main
})) as typeof FormLabel;

export const RadioContainer = styled(RadioGroup)({
	gap: "4rem",
	rowGap: "0rem",
	marginTop: "1rem"
}) as typeof RadioGroup;

export const RadioLabel = styled(FormControlLabel)({}) as typeof FormControlLabel;
