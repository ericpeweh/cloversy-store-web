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
import { Radio } from "@mui/material";

interface RadioInputProps {
	label?: string;
	options: string[];
	row?: boolean;
}

const RadioInput = ({ label, options, row }: RadioInputProps) => {
	return (
		<RadioInputContainer>
			<RadioInputLabel>{label}</RadioInputLabel>
			<RadioContainer row={row}>
				{options.map(option => (
					<RadioLabel value={option} key={option} label={option} control={<Radio />} />
				))}
			</RadioContainer>
		</RadioInputContainer>
	);
};

export default RadioInput;
