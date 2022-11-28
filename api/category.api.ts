// Dependencies
import API from "./index";

// Types
import { Category, ResponseBody } from "../interfaces";

const categoryApi = API.injectEndpoints({
	endpoints: build => ({
		getCategories: build.query<ResponseBody<{ categories: Category[] }>, void>({
			query: () => `categories`,
			providesTags: ["Categories"]
		})
	}),
	overrideExisting: false
});

export const { useGetCategoriesQuery } = categoryApi;

export default categoryApi;
