// Dependencies
import { InputLabel, MenuItem, Select, SelectProps } from "@mui/material";
import React from "react";

// Styles
import { SelectInputContainer, SelectMenuItem } from "./SelectInput.styles";

interface SelectInputProps extends SelectProps {
	options: string[];
	label?: string;
	value: string | number;
}

const SelectInput = ({ options, label, value, ...props }: SelectInputProps) => {
	return (
		<SelectInputContainer fullWidth>
			{label && <InputLabel id={label}>{label}</InputLabel>}
			<Select
				labelId={label}
				id={label}
				value={value}
				label={label}
				onChange={() => {}}
				MenuProps={{ sx: { maxHeight: { xs: "40rem", sm: "20rem" } } }}
				sx={{
					fontSize: {
						xs: "1.4rem",
						sm: "1.5rem",
						md: "1.6rem"
					},
					height: {
						xs: "5rem",
						sm: "6rem"
					}
				}}
				{...props}
			>
				{options.map(option => (
					<SelectMenuItem value={option} key={option}>
						{option}
					</SelectMenuItem>
				))}
			</Select>
		</SelectInputContainer>
	);
};

export default SelectInput;
