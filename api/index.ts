// Dependencies
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
import { RootState } from "../store";

export const BASE_URL =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000"
		: "<production backend url goes here>";

export const API = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
		credentials: "include"
	}),
	tagTypes: [
		"Products",
		"Product",
		"Categories",
		"Brands",
		"Vouchers",
		"Addresses",
		"Provinces",
		"Cities",
		"Subdistricts",
		"Wishlist",
		"Cart"
	],
	endpoints: () => ({})
});

export default API;
