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
			error: syncCartItemsErrorData
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

	// Open sync cart data confirm modal
	useEffect(() => {
		if (canSyncUserCart) {
			openSyncCartItemModalHandler();
		}
	}, [canSyncUserCart, openSyncCartItemModalHandler]);

	useEffect(() => {
		if (syncCartItemsData && syncCartItemsData.data && isSyncCartItemsSuccess) {
			closeSyncCartItemModalHandler();
			dispatch(setUserCart(syncCartItemsData.data));
			dispatch(openCartDrawer());
		}
	}, [closeSyncCartItemModalHandler, dispatch, isSyncCartItemsSuccess, syncCartItemsData]);

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
				syncUserCart();
			}}
		/>
	);
};

export default SyncCart;
