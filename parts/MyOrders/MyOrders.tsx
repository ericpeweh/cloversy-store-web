// Dependencies
import React from "react";

// Styles
import { MyOrdersContainer } from "./MyOrders.styles";

// Types
import { TransactionStatus, TransactionListItem } from "../../interfaces";

// Actions
import { setOrdersTabIndex } from "../../store/slices/globalSlice";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useDispatch from "../../hooks/useDispatch";
import { useGetAllTransactionsQuery } from "../../api/transaction.api";
import useSelector from "../../hooks/useSelector";

// Components
import TabsNavigation from "../../components/TabsNavigation/TabsNavigation";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import { Alert, CircularProgress, Typography } from "@mui/material";
import BoxButton from "../../components/BoxButton/BoxButton";

const tabOptions: { label: string; status: TransactionStatus | "" }[] = [
	{
		label: "Semua",
		status: ""
	},
	{
		label: "Belum Bayar",
		status: "pending"
	},
	{
		label: "Diproses",
		status: "process"
	},
	{
		label: "Dikirim",
		status: "sent"
	},
	{
		label: "Selesai",
		status: "success"
	},
	{
		label: "Dibatalkan",
		status: "cancel"
	}
];

const _getTransactionComponent = (
	isLoading: boolean,
	isSuccess: boolean,
	refetch: Function,
	error: any,
	transactions: TransactionListItem[]
) => {
	return (
		<>
			{isSuccess &&
				transactions &&
				transactions.map(transaction => (
					<OrderListItem key={transaction.id} orderData={transaction} />
				))}
			{isLoading && (
				<FallbackContainer>
					<CircularProgress />
				</FallbackContainer>
			)}
			{!isLoading && error && (
				<FallbackContainer>
					<Alert severity="error" sx={{ mb: 2 }}>
						{error?.data?.message || "Error occured while fetching orders data."}
					</Alert>
					<BoxButton onClick={() => refetch()}>Try again</BoxButton>
				</FallbackContainer>
			)}
			{!isLoading && isSuccess && transactions.length === 0 && (
				<FallbackContainer>
					<Typography>Transaksi tidak ditemukan</Typography>
				</FallbackContainer>
			)}
		</>
	);
};

const MyOrders = () => {
	const dispatch = useDispatch();
	const ordersTabIndex = useSelector(state => state.global.ordersTabIndex);
	const isAuth = useSelector(state => state.auth.isAuth);
	const { wWidth } = useWindowSize();

	const {
		data: transactionsData,
		isLoading: isGetTransactionsLoading,
		isSuccess: isGetTransactionsSuccess,
		error: getTransactionsErrorData,
		refetch: refetchTransactions
	} = useGetAllTransactionsQuery(isAuth, { skip: !isAuth, pollingInterval: 1000 * 60 * 2 }); // Refetch transactions every 2 minutes
	const getTransactionsError: any = getTransactionsErrorData;
	const transactions = transactionsData?.data.transactions;

	const tabPanelChangeHandler = (newValue: number) => {
		dispatch(setOrdersTabIndex(newValue));
	};

	return (
		<MyOrdersContainer>
			<TabsNavigation
				variant={wWidth <= 600 ? "scrollable" : "fullWidth"}
				value={ordersTabIndex}
				onChangeCb={tabPanelChangeHandler}
			>
				{tabOptions.map(option => (
					<TabsPanel label={option.label} noHorizontalSpacing key={option.status}>
						{_getTransactionComponent(
							isGetTransactionsLoading,
							isGetTransactionsSuccess,
							refetchTransactions,
							getTransactionsError,
							transactions?.filter(order =>
								option.status === "" ? true : order.order_status === option.status
							) || []
						)}
					</TabsPanel>
				))}
			</TabsNavigation>
		</MyOrdersContainer>
	);
};

export default MyOrders;
