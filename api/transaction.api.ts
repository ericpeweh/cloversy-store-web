// Dependencies
import API from "./index";

// Types
import {
	CheckoutBody,
	ClientTransactionDetails,
	ResponseBody,
	TransactionListItem
} from "../interfaces";

const transactionApi = API.injectEndpoints({
	endpoints: build => ({
		getAllTransactions: build.query<ResponseBody<{ transactions: TransactionListItem[] }>, boolean>(
			{
				query: () => `transactions`,
				providesTags: ["Transactions"]
			}
		),
		getTransactionDetails: build.query<
			ResponseBody<{ transaction: ClientTransactionDetails }>,
			string
		>({
			query: transactionId => `transactions/${transactionId}`,
			providesTags: res => [{ type: "Transaction", id: res?.data.transaction.id }]
		}),
		checkout: build.mutation<ResponseBody<{ transaction: ClientTransactionDetails }>, CheckoutBody>(
			{
				query: checkoutData => ({
					url: "transactions",
					method: "POST",
					body: checkoutData
				}),
				invalidatesTags: ["Transactions", "Cart", "Checkout Cart"]
			}
		)
	}),
	overrideExisting: false
});

export const { useCheckoutMutation, useGetAllTransactionsQuery, useGetTransactionDetailsQuery } =
	transactionApi;

export default transactionApi;