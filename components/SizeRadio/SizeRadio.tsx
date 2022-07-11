// Dependencies
import React, { Dispatch, SetStateAction } from "react";

// Styles
import { SizeRadioContainer, SizeRadioItem, SizeRadioButton } from "./SizeRadio.styles";

const sizes = [
	36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5
];

interface SizeRadioProps {
	value: number;
	onChange: Dispatch<SetStateAction<number>>;
	columns?: number;
}

const SizeRadio = ({ value = 36, onChange, columns = 4 }: SizeRadioProps) => {
	const sizeButtonClickHandler = (newSize: number) => {
		if (newSize === value) return;
		onChange(newSize);
	};

	return (
		<SizeRadioContainer container spacing={1}>
			{sizes.map(size => (
				<SizeRadioItem item xs={12 / columns} key={size}>
					<SizeRadioButton
						variant="outlined"
						fullWidth
						color="primary"
						selected={Boolean(value === size)}
						onClick={() => sizeButtonClickHandler(size)}
					>
						{size}
					</SizeRadioButton>
				</SizeRadioItem>
			))}
		</SizeRadioContainer>
	);
};

export default SizeRadio;
