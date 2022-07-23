// Dependencies
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import React from "react";

// Styles
import { CheckboxContainer } from "./Checkbox.styles";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: (value: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
	const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};

	return (
		<CheckboxContainer>
			<FormControlLabel
				label={label}
				control={<MuiCheckbox checked={checked} onChange={checkboxChangeHandler} />}
			/>
		</CheckboxContainer>
	);
};

export default Checkbox;
