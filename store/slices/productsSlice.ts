// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
	showFilterDrawer: boolean;
}

const initialState: ProductsState = {
	showFilterDrawer: false
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
		}
	}
});

export const { openFilterDrawer, closeFilterDrawer } = productsSlice.actions;

export default productsSlice.reducer;
