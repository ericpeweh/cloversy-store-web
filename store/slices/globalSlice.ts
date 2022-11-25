// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Types
import { Product } from "../../interfaces";

interface GlobalState {
	showSearchModal: boolean;
	showCartModal: boolean;
	showProductView: boolean;
	productViewData: Product | null;
}

const initialState: GlobalState = {
	showSearchModal: false,
	showCartModal: false,
	showProductView: false,
	productViewData: null
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		openSearchDrawer: (state: GlobalState) => {
			state.showSearchModal = true;
		},
		closeSearchDrawer: (state: GlobalState) => {
			state.showSearchModal = false;
		},
		openCartDrawer: (state: GlobalState) => {
			state.showCartModal = true;
		},
		closeCartDrawer: (state: GlobalState) => {
			state.showCartModal = false;
		},
		openProductView: (state: GlobalState, { payload }: PayloadAction<Product>) => {
			state.showProductView = true;
			state.productViewData = payload;
		},
		closeProductView: (state: GlobalState) => {
			state.showProductView = false;
		}
	}
});

export const {
	openSearchDrawer,
	closeSearchDrawer,
	openCartDrawer,
	closeCartDrawer,
	openProductView,
	closeProductView
} = globalSlice.actions;

export default globalSlice.reducer;
