// Dependencies
import React, { useEffect, useState } from "react";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useModal from "../../hooks/useModal";
import useCart from "../../hooks/useCart";

// Types
import { CartItemDetails } from "../../interfaces";

// Components
import Table from "../Table/Table";
import CartTableItem from "../CartTableItem/CartTableItem";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

interface CartTableProps {
	readOnly?: boolean;
	cartItemsData: CartItemDetails[];
}

const CartTable = ({ readOnly = false, cartItemsData }: CartTableProps) => {
	const [cartItemToDelete, setCartItemToDelete] = useState<CartItemDetails | null>(null);
	const { wWidth } = useWindowSize();
	const [tableHeadData, setTableHeadData] = useState([
		"Produk",
		"Ukuran",
		"Kuantitas",
		"Harga",
		"Jumlah",
		"Tindakan"
	]);

	useEffect(() => {
		if (wWidth <= 700) {
			setTableHeadData(readOnly ? ["Produk", "Jumlah", ""] : ["Produk", "Jumlah"]);
		} else if (wWidth <= 1050) {
			setTableHeadData(
				readOnly ? ["Produk", "Kuantitas", "Jumlah", ""] : ["Produk", "Tindakan", "Jumlah"]
			);
		} else if (wWidth <= 1350) {
			setTableHeadData(["Produk", "Ukuran", "Kuantitas", "Jumlah", "Tindakan"]);
		} else {
			setTableHeadData(["Produk", "Ukuran", "Kuantitas", "Harga", "Jumlah", "Tindakan"]);
		}
	}, [wWidth, readOnly]);

	const {
		deleteCartItemHandler,
		isDeleteCartItemLoading,
		deleteCartItemError,
		isDeleteCartItemSuccess
	} = useCart();

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

	useEffect(() => {
		cancelDeleteCartItemHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDeleteCartItemSuccess]);

	return (
		<>
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
			<Table headData={readOnly ? tableHeadData.slice(0, -1) : tableHeadData}>
				{cartItemsData.map(data => (
					<CartTableItem
						itemData={data}
						readOnly={readOnly}
						key={data.id}
						onDelete={setAndOpenDeleteCartItemModalHandler}
						isDeleteLoading={
							cartItemToDelete ? cartItemToDelete.id === data.id && isDeleteCartItemLoading : false
						}
					/>
				))}
			</Table>
		</>
	);
};

export default CartTable;
