// Dependencies
import API from "./index";

// Types
import { Province, City, Subdistrict, ResponseBody } from "../interfaces";

const dataApi = API.injectEndpoints({
	endpoints: build => ({
		getAllProvinces: build.query<ResponseBody<{ provinces: Province[] }>, boolean>({
			query: () => `data/province`,
			providesTags: ["Provinces"]
		}),
		getCitiesByProvinceId: build.query<ResponseBody<{ cities: City[] }>, number>({
			query: provinceId => `data/city?province=${provinceId}`,
			providesTags: ["Cities"]
		}),
		getSubdistrictsByCityId: build.query<ResponseBody<{ subdistricts: Subdistrict[] }>, number>({
			query: cityId => `data/subdistrict?city=${cityId}`,
			providesTags: ["Subdistricts"]
		})
	}),
	overrideExisting: false
});

export const {
	useGetAllProvincesQuery,
	useGetCitiesByProvinceIdQuery,
	useGetSubdistrictsByCityIdQuery
} = dataApi;

export default dataApi;
