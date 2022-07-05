// Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
	showSearchModal: boolean;
}

const initialState: HomeState = {
	showSearchModal: false
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
		}
	}
});

export const { openSearchDrawer, closeSearchDrawer } = homeSlice.actions;

export default homeSlice.reducer;
