// Dependencies
import React from "react";

// Styles
import {
	RadioInputContainer,
	RadioInputLabel,
	RadioContainer,
	RadioLabel
} from "./RadioInput.styles";

// Components
import { Radio, RadioProps } from "@mui/material";

interface RadioInputProps extends Omit<RadioProps, "onChange"> {
	label?: string;
	options: string[];
	row?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
	error?: boolean;
}

const RadioInput = ({ label, options, row, onChange, name, value, error }: RadioInputProps) => {
	return (
		<RadioInputContainer>
			<RadioInputLabel error={error}>{label}</RadioInputLabel>
			<RadioContainer row={row} name={name} value={value} onChange={onChange}>
				{options.map(option => (
					<RadioLabel value={option} key={option} label={option} control={<Radio />} />
				))}
			</RadioContainer>
		</RadioInputContainer>
	);
};

export default RadioInput;
