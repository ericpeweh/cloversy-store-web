// Dependencies
import API from "./index";

// Types
import { CartItem, CartItemDetails, ResponseBody } from "../interfaces";

const cartApi = API.injectEndpoints({
	endpoints: build => ({
		getCartItems: build.query<ResponseBody<{ cart: CartItemDetails[]; sync: boolean }>, string>({
			query: () => `cart`,
			providesTags: result =>
				result
					? [...result.data.cart.map(({ id }) => ({ type: "Cart" as const, id })), "Cart"]
					: ["Cart"]
		}),
		addProductToCart: build.mutation<ResponseBody<{ cart: CartItemDetails[] }>, Partial<CartItem>>({
			query: newCartItem => ({
				url: "cart/add",
				method: "POST",
				body: newCartItem
			}),
			invalidatesTags: ["Cart"]
		}),
		syncUserCart: build.mutation<ResponseBody<{ cart: CartItemDetails[]; sync: boolean }>, void>({
			query: () => ({
				url: "cart/sync",
				method: "POST"
			}),
			invalidatesTags: ["Cart"]
		}),
		clearSessionCart: build.mutation<ResponseBody<void>, void>({
			query: () => ({
				url: "cart/sync",
				method: "DELETE"
			}),
			invalidatesTags: ["Cart"]
		}),
		updateCartItem: build.mutation<ResponseBody<{ cart: CartItemDetails[] }>, Partial<CartItem>>({
			query: cartItemData => ({
				url: "cart/update",
				method: "PATCH",
				body: {
					id: cartItemData.id,
					quantity: cartItemData.quantity
				}
			}),
			invalidatesTags: (_, _1, arg) => [{ type: "Cart", id: arg.id }]
		}),
		deleteCartItem: build.mutation<ResponseBody<{ cart: CartItemDetails[] }>, string>({
			query: cartItemId => ({
				url: "cart/remove",
				method: "DELETE",
				body: {
					id: cartItemId
				}
			}),
			invalidatesTags: (_, _1, arg) => [{ type: "Cart", id: arg }]
		})
	}),
	overrideExisting: false
});

export const {
	useAddProductToCartMutation,
	useGetCartItemsQuery,
	useUpdateCartItemMutation,
	useDeleteCartItemMutation,
	useSyncUserCartMutation,
	useClearSessionCartMutation
} = cartApi;

export default cartApi;
