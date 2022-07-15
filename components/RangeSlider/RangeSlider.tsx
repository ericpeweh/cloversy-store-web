// Dependencies
import React from "react";

// Styles
import { RangeSliderContainer } from "./RangeSlider.styles";

interface RangeSliderProps {
	value: number | number[];
	onChange?: (_: Event, newFilter: number | number[], activeThumb: number) => void;
	min: number;
	max: number;
	step: number;
	showLabel?: "auto" | "on" | "off";
}

const RangeSlider = ({ value, onChange, min, max, step, showLabel = "auto" }: RangeSliderProps) => {
	return (
		<RangeSliderContainer
			value={value}
			disableSwap
			valueLabelDisplay={showLabel}
			onChange={onChange}
			min={min}
			max={max}
			step={step}
		/>
	);
};

export default RangeSlider;
