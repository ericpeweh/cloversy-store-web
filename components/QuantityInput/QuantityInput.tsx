// Dependencies
import React from "react";

// Styles
import { QuantityButton, QuantityInputContainer, QuantityInputField } from "./QuantityInput.styles";

interface QuantityInputProps {
	value: number;
	size?: "small" | "medium";
	onChangeQuantity: React.Dispatch<React.SetStateAction<number>>;
	onChangeCallback?: Function;
}

const QuantityInput = ({
	value,
	size = "small",
	onChangeQuantity,
	onChangeCallback
}: QuantityInputProps) => {
	const buttonSize = size === "small" ? "3rem" : "3.5rem";
	const buttonProps = {
		minWidth: buttonSize,
		height: buttonSize,
		backgroundColor: "secondary.light"
	};

	const quantityIncrementHandler = () => {
		onChangeQuantity(prevQty => {
			if (onChangeCallback) onChangeCallback(prevQty + 1);
			return prevQty + 1;
		});
	};

	const quantityDecrementHandler = () => {
		onChangeQuantity(prevQty => {
			if (onChangeCallback) onChangeCallback(prevQty > 0 ? prevQty - 1 : prevQty);
			return prevQty > 0 ? prevQty - 1 : prevQty;
		});
	};

	const quantityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value > 100 || +e.target.value < 0) return;

		if (isNaN(parseInt(e.target.value))) onChangeQuantity(0);

		onChangeQuantity(_ => +e.target.value.toString());
		if (onChangeCallback) onChangeCallback(+e.target.value.toString());
	};

	return (
		<QuantityInputContainer>
			<QuantityButton
				variant="contained"
				sx={{ ...buttonProps, mr: "-2px" }}
				onClick={quantityDecrementHandler}
			>
				-
			</QuantityButton>
			<QuantityInputField
				type="number"
				value={value.toString()}
				onChange={quantityChangeHandler}
				onBlur={quantityChangeHandler}
				max={100}
				min={0}
			/>
			<QuantityButton
				variant="contained"
				sx={{ ...buttonProps, ml: "-2px" }}
				onClick={quantityIncrementHandler}
			>
				+
			</QuantityButton>
		</QuantityInputContainer>
	);
};

export default QuantityInput;
