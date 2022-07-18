// Dependencies
import { FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import { styled } from "@mui/system";

export const RadioInputContainer = styled(FormControl)({}) as typeof FormControl;

export const RadioInputLabel = styled(FormLabel)({}) as typeof FormLabel;

export const RadioContainer = styled(RadioGroup)({
	gap: "4rem",
	marginTop: "1rem"
}) as typeof RadioGroup;

export const RadioLabel = styled(FormControlLabel)({}) as typeof FormControlLabel;
