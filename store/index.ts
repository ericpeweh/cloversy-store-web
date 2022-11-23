// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Slices
import globalReducer from "./slices/globalSlice";
import productsReducer from "./slices/productsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
	reducer: {
		global: globalReducer,
		products: productsReducer,
		auth: authReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
