// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Slices
import homeReducer from "./slices/homeSlice";

const store = configureStore({
	reducer: {
		home: homeReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
