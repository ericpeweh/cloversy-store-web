// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
	showSearchModal: boolean;
	showCartModal: boolean;
	showProductView: boolean;
}

const initialState: GlobalState = {
	showSearchModal: false,
	showCartModal: false,
	showProductView: false
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
		openProductView: (state: GlobalState) => {
			state.showProductView = true;
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
