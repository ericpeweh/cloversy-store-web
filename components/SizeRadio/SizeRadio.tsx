// Dependencies
import React, { Dispatch, SetStateAction } from "react";

// Styles
import { SizeRadioContainer, SizeRadioItem, SizeRadioButton } from "./SizeRadio.styles";

// Types
import { ResponsiveSizing } from "../ProductsContainer/ProductsContainer";

interface SizeRadioProps {
	value: number;
	onChange: Dispatch<SetStateAction<number>>;
	columns?: number;
	size?: ResponsiveSizing;
	sizeOptions: string[];
}

const SizeRadio = ({
	value = 36,
	onChange,
	columns = 4,
	size: radioSelectSize,
	sizeOptions
}: SizeRadioProps) => {
	const sizeButtonClickHandler = (newSize: number) => {
		if (newSize === value) return;
		onChange(newSize);
	};

	return (
		<SizeRadioContainer container spacing={1}>
			{sizeOptions.map(size => (
				<SizeRadioItem item xs={12 / columns} key={size} {...radioSelectSize}>
					<SizeRadioButton
						variant="outlined"
						fullWidth
						color="primary"
						selected={Boolean(value === +size)}
						onClick={() => sizeButtonClickHandler(+size)}
					>
						{size}
					</SizeRadioButton>
				</SizeRadioItem>
			))}
		</SizeRadioContainer>
	);
};

export default SizeRadio;
