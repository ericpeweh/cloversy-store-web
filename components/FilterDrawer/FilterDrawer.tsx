// Dependencies
import React, { useMemo, useState, useEffect } from "react";
import { shallowEqual } from "react-redux";

// Styles
import {
	AmountFilterText,
	FilterContainer,
	FilterDrawerContainer,
	FilterTitle
} from "./FilterDrawer.styles";

// Components
import { SelectChangeEvent, Stack, Typography } from "@mui/material";
import Button from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import RangeSlider from "../RangeSlider/RangeSlider";

// Actions
import { setPriceFilter, changeBrandFilter, resetFilter } from "../../store/slices/productsSlice";

// Hooks
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useGetBrandsQuery } from "../../api/brand.api";
import { useRouter } from "next/router";

// Types
import { Brand } from "../../interfaces";

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
	const router = useRouter();
	const dispatch = useDispatch();
	const { priceFilter, brandFilter, priceRange, isInitialized } = useSelector(
		state => state.products,
		shallowEqual
	);

	const [priceFilterInput, setPriceFilterInput] = useState<[number, number]>(priceFilter);
	const [brandFilterInput, setBrandFilterInput] = useState(brandFilter);

	const { data: brandsData, isLoading: isGetBrandsLoading } = useGetBrandsQuery();

	useEffect(() => {
		setPriceFilterInput(priceFilter);
	}, [priceFilter]);

	useEffect(() => {
		setBrandFilterInput(brandFilter);
	}, [brandFilter]);

	const brandOptions = useMemo<{ label: string; value: number }[]>(() => {
		const availableOptions =
			brandsData?.data.brands
				?.filter((brand: Brand) => +brand.product_amount > 0)
				.map((brand: Brand) => ({
					label: `${brand.name} (${brand.product_amount})`,
					value: brand.id
				})) || [];

		return [{ label: "All brands", value: -1 }, ...availableOptions];
	}, [brandsData?.data.brands]);

	const priceFilterChangeHandler = (
		_: Event,
		newFilter: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newFilter)) {
			return;
		}

		if (activeThumb === 0) {
			setPriceFilterInput([
				Math.min(newFilter[0], priceFilterInput[1] - 500000),
				priceFilterInput[1]
			]);
		} else {
			setPriceFilterInput([
				priceFilterInput[0],
				Math.max(newFilter[1], priceFilterInput[0] + 500000)
			]);
		}
	};

	const brandFilterInputChangeHandler = (e: SelectChangeEvent<unknown>) => {
		setBrandFilterInput(parseInt(e.target.value + ""));
	};

	const applyFilterHandler = () => {
		dispatch(setPriceFilter(priceFilterInput));
		dispatch(changeBrandFilter(brandFilterInput));
		onClose();
	};

	const resetFilterHandler = () => {
		dispatch(resetFilter());
		onClose();
	};

	return (
		<FilterDrawerContainer anchor="left" open={isOpen} onClose={onClose} keepMounted>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
				<Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
					<TuneOutlinedIcon />
					<Typography
						sx={{
							fontWeight: 500,
							textTransform: "uppercase",
							fontSize: { xs: "1.6rem", md: "1.7rem", lg: "1.8rem" }
						}}
					>
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
					options={
						isGetBrandsLoading ? [{ label: "Loading...", value: brandFilterInput }] : brandOptions
					}
					value={brandFilterInput}
					onChange={brandFilterInputChangeHandler}
					defaultValue="All Brands"
				/>
			</FilterContainer>
			<FilterContainer>
				<FilterTitle>Filter Harga</FilterTitle>
				<RangeSlider
					min={priceRange[0]}
					max={priceRange[1]}
					step={100000}
					value={priceFilterInput}
					onChange={priceFilterChangeHandler}
					showLabel="off"
				/>
				<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
					<AmountFilterText>
						<strong>Min:</strong> {formatToRupiah(priceFilterInput[0])}
					</AmountFilterText>
					<AmountFilterText>
						<strong>Max:</strong> {formatToRupiah(priceFilterInput[1])}
					</AmountFilterText>
				</Stack>
			</FilterContainer>
			<Stack direction="column" gap={1} sx={{ mt: "auto" }}>
				<Button endIcon={<RestartAltOutlinedIcon />} onClick={resetFilterHandler}>
					Reset filters
				</Button>
				<Button variant="outlined" onClick={onClose}>
					Cancel
				</Button>
			</Stack>
		</FilterDrawerContainer>
	);
};

export default FilterDrawer;
