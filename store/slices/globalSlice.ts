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
	userWishlist: number[];
}

const initialState: GlobalState = {
	showSearchModal: false,
	showCartModal: false,
	showProductView: false,
	productViewData: null,
	userWishlist: []
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		openSearchDrawer: state => {
			state.showSearchModal = true;
		},
		closeSearchDrawer: state => {
			state.showSearchModal = false;
		},
		openCartDrawer: state => {
			state.showCartModal = true;
		},
		closeCartDrawer: state => {
			state.showCartModal = false;
		},
		openProductView: (state, { payload }: PayloadAction<Product>) => {
			state.showProductView = true;
			state.productViewData = payload;
		},
		closeProductView: state => {
			state.showProductView = false;
		},
		setUserWishlist: (state, { payload }: PayloadAction<number[]>) => {
			state.userWishlist = payload;
		}
	}
});

export const {
	openSearchDrawer,
	closeSearchDrawer,
	openCartDrawer,
	closeCartDrawer,
	openProductView,
	closeProductView,
	setUserWishlist
} = globalSlice.actions;

export default globalSlice.reducer;
