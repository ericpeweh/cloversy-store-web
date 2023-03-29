// Dependencies
import React, { useState, useEffect } from "react";

// Styles
import { TableCell, TableRow } from "../Table/Table.styles";
import {
	CartItemDesc,
	CartItemImage,
	CartItemImageContainer,
	CartItemTitle
} from "./CartTableItem.styles";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Types
import { CartItemDetails } from "../../interfaces";

// Icons
import ClearIcon from "@mui/icons-material/Clear";

// Actions
import { updateUserCartItem } from "../../store/slices/globalSlice";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useCart from "../../hooks/useCart";
import useDebounce from "../../hooks/useDebounce";
import useDispatch from "../../hooks/useDispatch";

// Components
import Link from "next/link";
import IconButton from "../IconButton/IconButton";
import { Stack, Tooltip } from "@mui/material";
import QuantityInput from "../QuantityInput/QuantityInput";

interface CartTableItemProps {
	itemData: CartItemDetails;
	readOnly: boolean;
	onDelete: (cartItem: CartItemDetails) => void;
	isDeleteLoading: boolean;
}

const CartTableItem = ({ itemData, readOnly, onDelete, isDeleteLoading }: CartTableItemProps) => {
	const dispatch = useDispatch();
	const [quantityTouched, setQuantityTouched] = useState(false);
	const [quantity, setQuantity] = useState(itemData.quantity);
	const { wWidth } = useWindowSize();

	const quantityDebounced = useDebounce(quantity, 800);

	const quantityTouchedHandler = () => setQuantityTouched(true);

	const { updateCartItemHandler, isDeleteCartItemLoading } = useCart();

	useEffect(() => {
		setQuantity(itemData.quantity);
	}, [itemData]);

	useEffect(() => {
		if (quantity && !isDeleteCartItemLoading) {
			dispatch(updateUserCartItem({ ...itemData, quantity }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, quantity, isDeleteCartItemLoading]);

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
		<TableRow key={itemData.id}>
			<TableCell component="th" scope="row">
				<Stack direction="row" alignItems="center" gap={{ xs: 1.5, sm: 2, lg: 3 }}>
					<Link href={`/products/${itemData.slug}`}>
						<CartItemImageContainer sx={{ alignSelf: "flex-start" }}>
							<CartItemImage src={(itemData?.images || [])[0] || "/images/no-image.png"} />
						</CartItemImageContainer>
					</Link>
					<Stack direction="column" justifyContent="center" gap="0.5rem" sx={{ flex: 1 }}>
						<CartItemTitle>{itemData.title}</CartItemTitle>
						{wWidth <= 1050 && <CartItemDesc>EU {itemData.size}</CartItemDesc>}
						{wWidth <= 700 && (
							<Stack direction="row" gap={1} alignItems="center">
								{readOnly ? (
									`x ${itemData.quantity}`
								) : (
									<QuantityInput
										value={quantity}
										onChangeQuantity={setQuantity}
										onChangeCallback={quantityTouchedHandler}
									/>
								)}
								{!readOnly && wWidth <= 1050 && (
									<Tooltip title="Hapus dari Cart" arrow sx={{ fontSize: "1.6rem" }}>
										<IconButton
											color="error"
											onClick={() => onDelete(itemData)}
											loading={isDeleteLoading}
										>
											<ClearIcon />
										</IconButton>
									</Tooltip>
								)}
							</Stack>
						)}
					</Stack>
				</Stack>
			</TableCell>
			{wWidth > 1050 && <TableCell align="center">EU {itemData.size}</TableCell>}
			{wWidth > 700 && (
				<TableCell align="center">
					{readOnly && wWidth >= 1050 ? (
						`x ${itemData.quantity}`
					) : (
						<Stack direction="row" gap={2} justifyContent="center" alignItems="center">
							{readOnly ? (
								`x ${itemData.quantity}`
							) : (
								<QuantityInput
									value={quantity}
									onChangeQuantity={setQuantity}
									onChangeCallback={quantityTouchedHandler}
								/>
							)}
							{!readOnly && wWidth <= 1050 && (
								<Tooltip title="Hapus dari Cart" arrow sx={{ fontSize: "1.6rem" }}>
									<IconButton
										color="error"
										onClick={() => onDelete(itemData)}
										loading={isDeleteLoading}
									>
										<ClearIcon />
									</IconButton>
								</Tooltip>
							)}
						</Stack>
					)}
				</TableCell>
			)}
			{wWidth > 1350 && <TableCell align="center">{formatToRupiah(itemData.price)}</TableCell>}
			<TableCell align="center">{formatToRupiah(itemData.quantity * itemData.price)}</TableCell>
			{wWidth > 1050 && !readOnly && (
				<TableCell align="center">
					<Tooltip title="Hapus dari Cart" arrow sx={{ fontSize: "1.6rem" }}>
						<IconButton color="error" onClick={() => onDelete(itemData)} loading={isDeleteLoading}>
							<ClearIcon />
						</IconButton>
					</Tooltip>
				</TableCell>
			)}
		</TableRow>
	);
};

export default CartTableItem;
