// Dependencies
import React, { useMemo } from "react";

// Styles
import { CartContainer, CartContentContainer } from "./Cart.styles";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Types
import { CartItemDetails } from "../../interfaces";

// Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useGetCartItemsQuery } from "../../api/cart.api";

// Icons
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import CartTable from "../../components/CartTable/CartTable";
import Button from "../../components/Button/Button";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";

const links = [
	{ label: "Beranda", url: "#" },
	{ label: "Keranjang Anda", url: "current" }
];

const Cart = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	const router = useRouter();
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.global.userCart);
	const authStatus = useSelector(state => state.auth.status);

	const {
		data: cartItemsData,
		isLoading: isGetCartItemsLoading,
		isSuccess: isGetCartItemsSuccess,
		error: getCartItemsErrorData,
		refetch: refetchCartItems
	} = useGetCartItemsQuery(authStatus, { skip: authStatus !== "fulfilled" });

	const getCartItemsError: any = getCartItemsErrorData;
	const noDataFound = cartItemsData?.data.cart.length === 0;

	const subtotal = useMemo(
		() =>
			cartItems?.reduce(
				(total: number, curr: CartItemDetails) => (total += curr.price * curr.quantity),
				0
			),
		[cartItems]
	);

	const checkoutHandler = () => {
		if (isAuthenticated) {
			router.push("/checkout");
		} else {
			loginWithRedirect({
				appState: {
					returnTo: "/checkout"
				}
			});
		}
	};

	return (
		<CartContainer>
			<PageBreadcrumbs links={links} />
			<PageTitle>Keranjang anda</PageTitle>
			<CartContentContainer container>
				{isGetCartItemsLoading && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isGetCartItemsLoading && getCartItemsErrorData && (
					<FallbackContainer>
						<ErrorMessage>
							{getCartItemsError?.data?.message || "Error occured while fetching cart items."}
						</ErrorMessage>
						<BoxButton onClick={refetchCartItems}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{!isGetCartItemsLoading && isGetCartItemsSuccess && noDataFound && (
					<FallbackContainer>
						<Typography>Keranjang belanja kamu kosong!</Typography>
						<BoxButton onClick={() => router.push("/products")} sx={{ mt: 2 }}>
							Belanja sekarang
						</BoxButton>
					</FallbackContainer>
				)}
				{cartItemsData && isGetCartItemsSuccess && !noDataFound && (
					<>
						<CartTable cartItemsData={cartItems} />
						<Box sx={{ width: "100%" }}>
							<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1} mt={4}>
								<Typography textAlign="right" fontWeight="bold">
									Subtotal:
								</Typography>
								<Typography textAlign="right" sx={{ minWidth: "13rem" }}>
									{formatToRupiah(subtotal ?? 0)}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={2} justifyContent="flex-end" mb={1} mt={2}>
								<Typography textAlign="right">
									*Pengiriman dan voucher akan dihitung saat checkout
								</Typography>
							</Stack>
							<Stack direction="row" justifyContent="space-between" mt={3}>
								<Button
									variant="outlined"
									startIcon={<ArrowBackIcon />}
									onClick={() => router.push("/products")}
								>
									Lanjutkan berbelanja
								</Button>
								<Button startIcon={<ShoppingCartCheckoutIcon />} onClick={checkoutHandler}>
									Checkout
								</Button>
							</Stack>
						</Box>
					</>
				)}
			</CartContentContainer>
		</CartContainer>
	);
};

export default Cart;
