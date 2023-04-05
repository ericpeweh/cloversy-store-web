// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Types
import { Product, ProductsSortValues } from "../../interfaces";

interface ProductsState {
	showFilterDrawer: boolean;
	isInitialized: boolean;
	brandFilter: number;
	priceFilter: [number, number];
	priceRange: [number, number];
	products: Product[];
	sortBy: ProductsSortValues;
	currentPage: number;
	page: number;
	displayMode: "list" | "card";
}

const initialState: ProductsState = {
	showFilterDrawer: false,
	brandFilter: -1,
	priceFilter: [-1, -1],
	priceRange: [-1, -1],
	products: [],
	sortBy: "id",
	currentPage: 0,
	page: 1,
	displayMode: "card",
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
		},
		setSortBy: (state: ProductsState, { payload: sortBy }: PayloadAction<ProductsSortValues>) => {
			state.sortBy = sortBy;
		},
		setPage: (state: ProductsState, { payload: page }: PayloadAction<number>) => {
			state.page = page;
		},
		setDisplayMode: (
			state: ProductsState,
			{ payload: displayMode }: PayloadAction<"list" | "card">
		) => {
			state.displayMode = displayMode;
		},
		storeProducts: (
			state: ProductsState,
			{ payload: data }: PayloadAction<{ products: Product[]; currentPage: number }>
		) => {
			state.currentPage = data.currentPage;
			state.products = [...state.products, ...data.products];
		},
		resetProductsData: (state: ProductsState) => {
			state.products = [];
			state.currentPage = 0;
			state.page = 1;
		}
	}
});

export const {
	openFilterDrawer,
	closeFilterDrawer,
	changeBrandFilter,
	setPriceFilter,
	setPriceRange,
	resetFilter,
	setSortBy,
	setPage,
	setDisplayMode,
	storeProducts,
	resetProductsData
} = productsSlice.actions;

export default productsSlice.reducer;
