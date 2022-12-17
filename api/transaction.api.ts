// Dependencies
import API from "./index";

// Types
import { CheckoutBody, ClientTransactionDetails, ResponseBody } from "../interfaces";

const transactionApi = API.injectEndpoints({
	endpoints: build => ({
		getAllTransactions: build.query<
			ResponseBody<{ transactions: ClientTransactionDetails[] }>,
			boolean
		>({
			query: () => `transactions`,
			providesTags: result =>
				result
					? [
							...result.data.transactions.map(({ id }) => ({ type: "Transaction" as const, id })),
							"Transactions"
					  ]
					: ["Transactions"]
		}),
		checkout: build.mutation<
			ResponseBody<{ newTransaction: ClientTransactionDetails }>,
			CheckoutBody
		>({
			query: checkoutData => ({
				url: "transactions",
				method: "POST",
				body: checkoutData
			}),
			invalidatesTags: ["Transaction"]
		})
	}),
	overrideExisting: false
});

export const { useCheckoutMutation, useGetAllTransactionsQuery } = transactionApi;

export default transactionApi;
