// Dependencies
import React from "react";

// Icon
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// Types
import { TransactionListItem } from "../../interfaces";

// Hooks
import { useRouter } from "next/router";
import { useCancelTransactionMutation } from "../../api/transaction.api";

// Styles
import {
	OrderCardsContainer,
	Transaction,
	TransactionDetails,
	TransactionDate,
	TransactionCode,
	TransactionSummary,
	TransactionTotal,
	TransactionActions
} from "./OrderListItem.styles";

// Utils
import getOrderStatus from "../../utils/getOrderStatus";
import formatToRupiah from "../../utils/formatToRupiah";
import { formatDateFullMonth } from "../../utils/formatDate";

// Components
import OrderCard from "../../components/OrderCard/OrderCard";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Button from "../../components/Button/Button";
import { Alert, Divider } from "@mui/material";

interface OrderListItemProps {
	orderData: TransactionListItem;
}

const OrderListItem = ({ orderData }: OrderListItemProps) => {
	const router = useRouter();
	const orderStatus = getOrderStatus(orderData?.order_status || "pending");

	const [
		cancelTransaction,
		{
			isLoading: isCancelTransactionLoading,
			error: cancelTransactionErrorData,
			reset: resetCancelTransaction
		}
	] = useCancelTransactionMutation();
	const cancelTransactionError: any = cancelTransactionErrorData;

	const cancelTransactionHandler = async () => {
		if (!orderData?.id) return;

		await cancelTransaction(orderData.id);
		resetCancelTransaction();
	};

	return (
		<Transaction>
			<TransactionDetails>
				<StatusBadge color={orderStatus.color}>{orderStatus.label}</StatusBadge>
				<TransactionCode>{orderData.id}</TransactionCode>
				<TransactionDate>{formatDateFullMonth(orderData.created_at)}</TransactionDate>
			</TransactionDetails>
			<OrderCardsContainer>
				{orderData.item_details.map((item, i, arr) => (
					<>
						<OrderCard
							key={item.product_id}
							title={item.title}
							sizeDesc={`EU ${item.product_size}`}
							qtyDesc={item.quantity.toString()}
							price={formatToRupiah(+item.price * +item.quantity)}
							imageUrl={(item?.images || [])[0] || "/images/no-image.png"}
						/>
						{i !== arr.length - 1 && <Divider flexItem />}
					</>
				))}
			</OrderCardsContainer>
			<TransactionSummary>
				<strong>Total Pesanan: </strong>
				<TransactionTotal>{formatToRupiah(+orderData.total)}</TransactionTotal>
			</TransactionSummary>
			<TransactionActions>
				<Button
					size="small"
					variant="outlined"
					endIcon={<DescriptionOutlinedIcon />}
					onClick={() => router.push(`/account/orders/${orderData.id}`)}
				>
					Lihat detail pesanan
				</Button>
				{orderData.order_status === "pending" && (
					<>
						<Button
							size="small"
							color="error"
							loading={isCancelTransactionLoading}
							onClick={cancelTransactionHandler}
						>
							Batalkan
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => router.push(`/account/orders/${orderData.id}/payment`)}
						>
							Bayar sekarang
						</Button>
					</>
				)}
				{(orderData.order_status === "process" || orderData.order_status === "sent") && (
					<>
						<Button size="small">Hubungi admin</Button>
					</>
				)}
				{orderData.order_status === "success" && (
					<>
						<Button size="small">Beri ulasan</Button>
						<Button size="small" color="primary">
							Beli lagi
						</Button>
					</>
				)}
			</TransactionActions>
			{cancelTransactionError && (
				<Alert severity="error">{cancelTransactionError?.data.message}</Alert>
			)}
		</Transaction>
	);
};

export default OrderListItem;
