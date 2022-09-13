// Dependencies
import { FormControlLabel, Checkbox as MuiCheckbox, SxProps } from "@mui/material";
import React from "react";

// Styles
import { CheckboxContainer } from "./Checkbox.styles";

interface CheckboxProps {
	label: string | React.ReactElement;
	checked: boolean;
	onChange: (value: boolean) => void;
	sx?: SxProps;
}

const Checkbox = ({ label, checked, onChange, sx }: CheckboxProps) => {
	const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	return (
		<CheckboxContainer sx={sx}>
			<FormControlLabel
				sx={{
					"& .MuiFormControlLabel-label": { fontSize: { xs: "1.4rem", sm: "1.5rem", md: "1.6rem" } }
				}}
				label={label}
				control={<MuiCheckbox checked={checked} onChange={checkboxChangeHandler} />}
			/>
		</CheckboxContainer>
	);
};

export default Checkbox;
