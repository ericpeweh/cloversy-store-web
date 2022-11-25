// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
	showFilterDrawer: boolean;
	isInitialized: boolean;
	brandFilter: number;
	priceFilter: [number, number];
	priceRange: [number, number];
}

const initialState: ProductsState = {
	showFilterDrawer: false,
	brandFilter: -1,
	priceFilter: [-1, -1],
	priceRange: [-1, -1],
	isInitialized: false
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		openFilterDrawer: (state: ProductsState) => {
			state.showFilterDrawer = true;
		},
		closeFilterDrawer: (state: ProductsState) => {
			state.showFilterDrawer = false;
		},
		resetFilter: (state: ProductsState) => {
			state.brandFilter = -1;
			state.priceFilter = state.priceRange;
		},
		setPriceFilter: (
			state: ProductsState,
			{ payload: newPriceFilter }: PayloadAction<[number, number]>
		) => {
			state.priceFilter = newPriceFilter;
		},
		setPriceRange: (
			state: ProductsState,
			{ payload: priceRange }: PayloadAction<[number, number]>
		) => {
			state.priceRange = priceRange;
			state.isInitialized = true;
		},
		changeBrandFilter: (
			state: ProductsState,
			{ payload: newBrandFilter }: PayloadAction<number>
		) => {
			state.brandFilter = newBrandFilter;
		}
	}
});

export const {
	openFilterDrawer,
	closeFilterDrawer,
	changeBrandFilter,
	setPriceFilter,
	setPriceRange,
	resetFilter
} = productsSlice.actions;

export default productsSlice.reducer;
