// Dependencies
import React from "react";

// Styles
import { OrderCardsContainer, Subtitle } from "../Checkout/Checkout.styles";

// Hooks
import useSelector from "../../hooks/useSelector";
import { useGetCheckoutCartItemsQuery } from "../../api/cart.api";

// Types
import { CartItemDetails } from "../../interfaces";

// Components
import { Divider, Grid, Stack, Typography, CircularProgress } from "@mui/material";
import VoucherInput from "../../components/VoucherInput/VoucherInput";
import OrderCard from "../../components/OrderCard/OrderCard";
import formatToRupiah from "../../utils/formatToRupiah";
import BoxButton from "../../components/BoxButton/BoxButton";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CheckoutDetail = () => {
	const isAuth = useSelector(state => state.auth.isAuth);

	const {
		data: cartItemsData,
		isFetching: isGetCartItemsFetching,
		isLoading: isGetCartItemsLoading,
		isSuccess: isGetCartItemsSuccess,
		error: getCartItemsErrorData,
		refetch: refetchCartItems
	} = useGetCheckoutCartItemsQuery(isAuth, { skip: !isAuth });

	const getCartItemsError: any = getCartItemsErrorData;
	const noCartItemsDataFound = cartItemsData?.data.cart.length === 0;

	return (
		<Grid item xs={12} md={12} lg={5} xl={4}>
			<Subtitle>
				Detail pesanan {isGetCartItemsFetching && <CircularProgress size={15} sx={{ ml: 1 }} />}
			</Subtitle>
			<Stack direction="column">
				<OrderCardsContainer>
					{!isGetCartItemsLoading && getCartItemsErrorData && (
						<FallbackContainer>
							<ErrorMessage>
								{getCartItemsError?.data?.message || "Error occured while fetching cart items."}
							</ErrorMessage>
							<BoxButton onClick={refetchCartItems}>Try again</BoxButton>
						</FallbackContainer>
					)}
					{isGetCartItemsLoading && (
						<FallbackContainer>
							<CircularProgress />
						</FallbackContainer>
					)}
					{!isGetCartItemsLoading && isGetCartItemsSuccess && noCartItemsDataFound && (
						<FallbackContainer>
							<Typography>You have no item in your cart!</Typography>
						</FallbackContainer>
					)}
					{cartItemsData &&
						isGetCartItemsSuccess &&
						!noCartItemsDataFound &&
						!isGetCartItemsLoading &&
						cartItemsData?.data.cart.map((item: CartItemDetails, i: number) => (
							<React.Fragment key={item.id}>
								<OrderCard
									title={item.title}
									sizeDesc={`EU ${item.size}`}
									qtyDesc={item.quantity + ""}
									price={formatToRupiah(item.quantity * item.price)}
									imageUrl={(item.images || [])[0] || "/images/no-image.png"}
								/>
								{i !== cartItemsData?.data.cart.length - 1 && <Divider flexItem />}
							</React.Fragment>
						))}
				</OrderCardsContainer>
				<VoucherInput />
			</Stack>
		</Grid>
	);
};

export default CheckoutDetail;
