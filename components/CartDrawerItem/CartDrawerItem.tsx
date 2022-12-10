// Dependencies
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Styles
import {
	CartItem,
	CartItemContent,
	CartItemImage,
	CartItemInfo,
	CartItemPrice,
	CartItemTitle,
	CartItemSubtitle
} from "./CartDrawerItem.styles";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Hooks
import useDebounce from "../../hooks/useDebounce";
import useCart from "../../hooks/useCart";

// Actions
import { closeCartDrawer, updateUserCartItem } from "../../store/slices/globalSlice";

// Types
import { CartItemDetails } from "../../interfaces";

// Components
import { ListItemAvatar, Typography } from "@mui/material";
import QuantityInput from "../QuantityInput/QuantityInput";
import useDispatch from "../../hooks/useDispatch";

interface CartDrawerItemProps {
	itemData: CartItemDetails;
	onDelete: (cartItem: CartItemDetails) => void;
}

const CartDrawerItem = ({ itemData, onDelete }: CartDrawerItemProps) => {
	const dispatch = useDispatch();
	const [quantityTouched, setQuantityTouched] = useState(false);
	const [quantity, setQuantity] = useState(itemData.quantity);

	const quantityDebounced = useDebounce(quantity, 800);

	const quantityTouchedHandler = () => setQuantityTouched(true);

	const { updateCartItemHandler } = useCart();

	const closeCartDrawerHandler = () => dispatch(closeCartDrawer());

	useEffect(() => {
		if (quantity) {
			dispatch(updateUserCartItem({ ...itemData, quantity }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantity, dispatch]);

	useEffect(() => {
		if (quantityDebounced === 0 && quantityTouched) {
			setQuantity(1);
			onDelete(itemData);
		}

		if (!isNaN(quantityDebounced) && quantityDebounced > 0 && quantityTouched) {
			updateCartItemHandler({ id: itemData.id, quantity: quantityDebounced });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantityDebounced, quantityTouched]);

	return (
		<CartItem>
			<ListItemAvatar sx={{ marginRight: { xs: "1.5rem", md: "2rem" } }}>
				<Link href={`/products/${itemData.slug}`}>
					<CartItemImage
						onClick={closeCartDrawerHandler}
						alt={itemData.title}
						src={(itemData?.images || [])[0] || "/images/no-image.png"}
						variant="rounded"
					/>
				</Link>
			</ListItemAvatar>
			<CartItemContent
				disableTypography
				primary={
					<Link href={`/products/${itemData.slug}`}>
						<CartItemTitle onClick={closeCartDrawerHandler}>{itemData.title}</CartItemTitle>
					</Link>
				}
				secondary={
					<>
						<CartItemSubtitle sx={{ display: "inline" }}>
							{`Size: EU | ${itemData.size}`}
						</CartItemSubtitle>
						<CartItemInfo>
							<QuantityInput
								value={quantity}
								onChangeQuantity={setQuantity}
								onChangeCallback={quantityTouchedHandler}
							/>
							<CartItemPrice>{formatToRupiah(itemData.price * quantity)}</CartItemPrice>
						</CartItemInfo>
					</>
				}
			/>
		</CartItem>
	);
};

export default CartDrawerItem;
