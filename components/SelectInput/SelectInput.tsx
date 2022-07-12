// Dependencies
import { InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

// Styles
import { SelectInputContainer } from "./SelectInput.styles";

interface SelectInputProps {
	options: string[];
	label: string;
	value: string | number;
}

const SelectInput = ({ options, label, value }: SelectInputProps) => {
	return (
		<SelectInputContainer fullWidth>
			<InputLabel id={label}>{label}</InputLabel>
			<Select labelId={label} id={label} value={value} label={label} onChange={() => {}}>
				{options.map(option => (
					<MenuItem value={option} key={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</SelectInputContainer>
	);
};

export default SelectInput;
