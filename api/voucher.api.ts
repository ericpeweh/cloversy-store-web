// Dependencies
import API from "./index";

// Types
import { Voucher, ResponseBody } from "../interfaces";

const voucherApi = API.injectEndpoints({
	endpoints: build => ({
		getVouchers: build.query<ResponseBody<{ vouchers: Voucher[] }>, void>({
			query: () => `vouchers`,
			providesTags: ["Vouchers"]
		})
	}),
	overrideExisting: false
});

export const { useGetVouchersQuery } = voucherApi;

export default voucherApi;
