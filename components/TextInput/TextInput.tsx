// Dependencies
import React from "react";

// Styles
import { TextInputContainer } from "./TextInput.styles";

interface TextInputProps {
	label: string;
	id: string;
	variant?: "outlined" | "standard" | "filled" | undefined;
}

const TextInput = ({ label, id, variant = "outlined" }: TextInputProps) => {
	return (
		<TextInputContainer id={id} label={label} variant={variant} fullWidth></TextInputContainer>
	);
};

export default TextInput;
