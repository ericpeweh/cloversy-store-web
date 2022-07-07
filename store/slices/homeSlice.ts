// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
	showSearchModal: boolean;
	showCartModal: boolean;
	showProductView: boolean;
}

const initialState: HomeState = {
	showSearchModal: false,
	showCartModal: false,
	showProductView: false
};

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		openSearchDrawer: (state: HomeState) => {
			state.showSearchModal = true;
		},
		closeSearchDrawer: (state: HomeState) => {
			state.showSearchModal = false;
		},
		openCartDrawer: (state: HomeState) => {
			state.showCartModal = true;
		},
		closeCartDrawer: (state: HomeState) => {
			state.showCartModal = false;
		},
		openProductView: (state: HomeState) => {
			state.showProductView = true;
		},
		closeProductView: (state: HomeState) => {
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
} = homeSlice.actions;

export default homeSlice.reducer;
