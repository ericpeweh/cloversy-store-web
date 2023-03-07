// Dependencies
import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual } from "react-redux";

// Styles
import {
	CartActionButtons,
	CartDrawerContainer,
	CartLists,
	HideCartButton
} from "./CartDrawer.styles";

// Hooks
import { useGetCartItemsQuery } from "../../api/cart.api";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import useModal from "../../hooks/useModal";
import useCart from "../../hooks/useCart";

// Actions
import { setUserCart, closeCartDrawer } from "../../store/slices/globalSlice";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Types
import { CartItemDetails } from "../../interfaces";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Components
import { Divider, Typography, Stack, CircularProgress, Alert } from "@mui/material";
import CartDrawerItem from "../CartDrawerItem/CartDrawerItem";
import Button from "../Button/Button";
import FallbackContainer from "../FallbackContainer/FallbackContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BoxButton from "../BoxButton/BoxButton";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const CartDrawer = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	const [isInitialized, setIsInitialized] = useState(false);
	const router = useRouter();
	const dispatch = useDispatch();
	const { userCart: cartItems, showCartModal } = useSelector(state => state.global, shallowEqual);
	const authStatus = useSelector(state => state.auth.status);
	const [cartItemToDelete, setCartItemToDelete] = useState<CartItemDetails | null>(null);

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

	useEffect(() => {
		if (cartItemsData && isGetCartItemsSuccess && !isInitialized) {
			dispatch(setUserCart(cartItemsData.data));
			setIsInitialized(true);
		}
	}, [cartItemsData, dispatch, isGetCartItemsSuccess, isInitialized]);

	const {
		deleteCartItemHandler,
		isDeleteCartItemLoading,
		deleteCartItemError,
		isDeleteCartItemSuccess
	} = useCart();

	const closeCartDrawerHandler = () => dispatch(closeCartDrawer());

	const openCartDetailsHandler = () => {
		closeCartDrawerHandler();
		router.push("/cart");
	};

	const {
		isOpen: isDeleteCartItemModalOpen,
		openHandler: openDeleteCartItemModalHandler,
		closeHandler: closeDeleteCartItemModalHandler
	} = useModal();

	const setAndOpenDeleteCartItemModalHandler = (cartItem: CartItemDetails) => {
		setCartItemToDelete(cartItem);
		openDeleteCartItemModalHandler();
	};

	const cancelDeleteCartItemHandler = () => {
		closeDeleteCartItemModalHandler();
		setTimeout(() => {
			setCartItemToDelete(null);
		}, 500);
	};

	const shopNowButtonClickHandler = () => {
		router.push("/products");
		closeCartDrawerHandler();
	};

	const checkoutHandler = () => {
		if (isAuthenticated) {
			router.push("/checkout");
			closeCartDrawerHandler();
		} else {
			loginWithRedirect({
				appState: {
					returnTo: "/checkout"
				}
			});
		}
	};

	useEffect(() => {
		cancelDeleteCartItemHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDeleteCartItemSuccess]);

	return (
		<CartDrawerContainer
			open={showCartModal}
			onClose={closeCartDrawerHandler}
			anchor="right"
			keepMounted
		>
			<ConfirmationModal
				modalTitle="Hapus Produk"
				modalDescription={`Apakah Anda yakin untuk menghapus produk ${cartItemToDelete?.title} ukuran ${cartItemToDelete?.size} dari keranjang belanja anda?`}
				onClose={cancelDeleteCartItemHandler}
				open={isDeleteCartItemModalOpen}
				confirmText="Delete"
				confirmColor="error"
				cancelText="Cancel"
				cancelColor="secondary"
				error={deleteCartItemError}
				isLoading={isDeleteCartItemLoading}
				onConfirm={() => {
					if (cartItemToDelete) deleteCartItemHandler(cartItemToDelete.id + "");
				}}
			/>
			<HideCartButton
				variant="text"
				endIcon={<ChevronRightIcon />}
				onClick={closeCartDrawerHandler}
			>
				Continue Shopping
			</HideCartButton>
			{isGetCartItemsLoading && (
				<FallbackContainer>
					<CircularProgress />
				</FallbackContainer>
			)}
			{!isGetCartItemsLoading && getCartItemsErrorData && (
				<FallbackContainer>
					<Alert severity="error">
						{getCartItemsError?.data?.message || "Error occured while fetching cart items."}
					</Alert>
					<BoxButton onClick={refetchCartItems}>Try again</BoxButton>
				</FallbackContainer>
			)}
			{!isGetCartItemsLoading && isGetCartItemsSuccess && noDataFound && (
				<FallbackContainer>
					<Typography>Keranjang belanja kamu kosong!</Typography>
					<BoxButton onClick={shopNowButtonClickHandler} sx={{ mt: 2 }}>
						Belanja sekarang
					</BoxButton>
				</FallbackContainer>
			)}
			{cartItemsData && isGetCartItemsSuccess && !noDataFound && (
				<>
					<CartLists>
						{cartItems.map((item: CartItemDetails, i: number, arr) => (
							<React.Fragment key={item.id}>
								<CartDrawerItem itemData={item} onDelete={setAndOpenDeleteCartItemModalHandler} />
								{i !== arr.length - 1 && (
									<Divider variant="fullWidth" component="li" sx={{ mb: "2rem" }} />
								)}
							</React.Fragment>
						))}
					</CartLists>
					<CartActionButtons>
						<Stack direction="row" justifyContent="space-between" mb="1rem">
							<Typography fontWeight={500} sx={{ fontSize: { xs: "1.5rem", sm: "1.6rem" } }}>
								Subtotal:
							</Typography>
							<Typography sx={{ fontWeight: 500, fontSize: { xs: "1.5rem", sm: "1.6rem" } }}>
								{formatToRupiah(subtotal)}
							</Typography>
						</Stack>
						<Button variant="outlined" onClick={openCartDetailsHandler}>
							Lihat Keranjang
						</Button>
						<Button color="primary" onClick={checkoutHandler}>
							Checkout
						</Button>
					</CartActionButtons>
				</>
			)}
		</CartDrawerContainer>
	);
};

export default CartDrawer;
