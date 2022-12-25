// Dependencies
import React, { useEffect } from "react";

// Actions
import { setUserCart, changeCartSyncStatus, openCartDrawer } from "../../store/slices/globalSlice";

// Hooks
import { useClearSessionCartMutation, useSyncUserCartMutation } from "../../api/cart.api";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import useModal from "../../hooks/useModal";

// Components
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const SyncCart = () => {
	const dispatch = useDispatch();
	const canSyncUserCart = useSelector(state => state.global.canSyncUserCart);

	const [
		syncUserCart,
		{
			data: syncCartItemsData,
			isLoading: isSyncCartItemsLoading,
			isSuccess: isSyncCartItemsSuccess,
			error: syncCartItemsErrorData,
			reset: resetSyncUserCart
		}
	] = useSyncUserCartMutation();

	const [clearCartSession] = useClearSessionCartMutation();

	const {
		isOpen: isSyncCartItemModalOpen,
		openHandler: openSyncCartItemModalHandler,
		closeHandler: closeSyncCartItemModalHandler
	} = useModal();

	const clearSessionCartHandler = () => {
		clearCartSession();
		closeSyncCartItemModalHandler();
		dispatch(changeCartSyncStatus(false));
	};

	const syncCartHandler = async () => {
		const result = await syncUserCart().unwrap();

		if (result.status === "success" && result.data) {
			dispatch(setUserCart(result.data));
			dispatch(changeCartSyncStatus(false));
		}
	};

	// Close sync confirm modal, open cart drawer, reset sync cart req
	useEffect(() => {
		if (isSyncCartItemsSuccess && syncCartItemsData) {
			dispatch(openCartDrawer());
			closeSyncCartItemModalHandler();
			resetSyncUserCart();
		}
	}, [
		closeSyncCartItemModalHandler,
		dispatch,
		isSyncCartItemsSuccess,
		resetSyncUserCart,
		syncCartItemsData
	]);

	// Open sync cart data confirm modal
	useEffect(() => {
		if (canSyncUserCart) {
			openSyncCartItemModalHandler();
		}
	}, [canSyncUserCart, openSyncCartItemModalHandler]);

	return (
		<ConfirmationModal
			modalTitle="Sinkronkan Keranjang?"
			modalDescription={`Terdapat produk pada keranjang belanja umum anda, apakah anda ingin memindahkannya ke dalam keranjang belanja akun anda?`}
			onClose={clearSessionCartHandler}
			onlyCloseWithButton
			open={isSyncCartItemModalOpen}
			confirmText="Singkronkan"
			confirmColor="primary"
			cancelText="Kosongkan keranjang umum"
			cancelColor="error"
			error={syncCartItemsErrorData}
			isLoading={isSyncCartItemsLoading}
			onConfirm={() => {
				syncCartHandler();
			}}
		/>
	);
};

export default SyncCart;
