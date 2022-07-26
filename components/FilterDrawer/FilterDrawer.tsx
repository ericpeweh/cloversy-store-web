// Dependencies
import React, { useState } from "react";

// Styles
import {
	AmountFilterText,
	FilterContainer,
	FilterDrawerContainer,
	FilterTitle
} from "./FilterDrawer.styles";

// Components
import { Stack, Typography } from "@mui/material";
import Button from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import RangeSlider from "../RangeSlider/RangeSlider";

// Icons
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

interface FilterDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

const FilterDrawer = ({ isOpen, onClose }: FilterDrawerProps) => {
	const [priceFilter, setPriceFilter] = useState<number[]>([0, 10000000]);

	const priceFilterChangeHandler = (
		_: Event,
		newFilter: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newFilter)) {
			return;
		}

		if (activeThumb === 0) {
			setPriceFilter([Math.min(newFilter[0], priceFilter[1] - 500000), priceFilter[1]]);
		} else {
			setPriceFilter([priceFilter[0], Math.max(newFilter[1], priceFilter[0] + 500000)]);
		}
	};

	const applyFilterHandler = () => {
		onClose();
	};

	return (
		<FilterDrawerContainer anchor="left" open={isOpen} onClose={onClose}>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
				<Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
					<TuneOutlinedIcon />
					<Typography fontWeight="500" fontSize="1.8rem" textTransform="uppercase">
						Filters
					</Typography>
				</Stack>
				<Button onClick={applyFilterHandler} endIcon={<CheckOutlinedIcon />}>
					Terapkan
				</Button>
			</Stack>
			<FilterContainer>
				<FilterTitle>Filter Kategori</FilterTitle>
				<SelectInput
					options={[
						"All Brands",
						"Nike",
						"Adidas",
						"Yeezy",
						"Patrobas",
						"Ventela",
						"NAH Project",
						"Lainnya"
					]}
					value="All Brands"
					defaultValue="All Brands"
				/>
			</FilterContainer>
			<FilterContainer>
				<FilterTitle>Filter Harga</FilterTitle>
				<RangeSlider
					max={5000000}
					min={100000}
					step={100000}
					value={priceFilter}
					onChange={priceFilterChangeHandler}
					showLabel="off"
				/>
				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
					<AmountFilterText>
						<strong>Min:</strong> {formatToRupiah(priceFilter[0])}
					</AmountFilterText>
					<AmountFilterText>
						<strong>Max:</strong> {formatToRupiah(priceFilter[1])}
					</AmountFilterText>
				</Stack>
			</FilterContainer>
			<Button variant="outlined" sx={{ mt: "auto" }} endIcon={<RestartAltOutlinedIcon />}>
				Reset filters
			</Button>
		</FilterDrawerContainer>
	);
};

export default FilterDrawer;
