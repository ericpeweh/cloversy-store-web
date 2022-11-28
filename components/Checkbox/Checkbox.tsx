// Dependencies
import { FormControlLabel, Checkbox as MuiCheckbox, SxProps } from "@mui/material";
import React from "react";

// Styles
import { CheckboxContainer } from "./Checkbox.styles";

interface CheckboxProps {
	label: string | React.ReactElement;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	sx?: SxProps;
}

const Checkbox = ({ label, checked, onChange, sx, name }: CheckboxProps) => {
	const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event);
	};

	return (
		<CheckboxContainer sx={sx}>
			<FormControlLabel
				sx={{
					"& .MuiFormControlLabel-label": { fontSize: { xs: "1.4rem", sm: "1.5rem", md: "1.6rem" } }
				}}
				label={label}
				control={<MuiCheckbox checked={checked} onChange={checkboxChangeHandler} name={name} />}
			/>
		</CheckboxContainer>
	);
};

export default Checkbox;
