// Dependencies
import React from "react";

// Icon
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// Types
import { TransactionListItem } from "../../interfaces";

// Hooks
import { useRouter } from "next/router";

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

// Components
import OrderCard from "../../components/OrderCard/OrderCard";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Button from "../../components/Button/Button";
import { Divider } from "@mui/material";
import { formatDateFullMonth } from "../../utils/formatDate";

interface OrderListItemProps {
	orderData: TransactionListItem;
}

const OrderListItem = ({ orderData }: OrderListItemProps) => {
	const router = useRouter();
	const orderStatus = getOrderStatus(orderData?.order_status || "pending");

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
							onClick={() => {
								// HANDLE CANCEL ORDER HERE
							}}
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
		</Transaction>
	);
};

export default OrderListItem;

{
	/* <Transaction>
			<TransactionDetails>
				<StatusBadge>Selesai</StatusBadge>
				<TransactionCode>PROD/21072022/00001</TransactionCode>
				<TransactionDate>21 Juli 2022</TransactionDate>
			</TransactionDetails>
			<OrderCardsContainer>
				<OrderCard title="Nike AF1 Homesick" sizeDesc="EU 40" qtyDesc="2" price="6.240.000" />
				<Divider flexItem />
			</OrderCardsContainer>
			<TransactionSummary>
				<strong>Total Pesanan: </strong>
				<TransactionTotal>Rp 6.940.000</TransactionTotal>
			</TransactionSummary>
			<TransactionActions>
				<Button size="small" variant="text" endIcon={<DescriptionOutlinedIcon />}>
					Lihat detail pesanan
				</Button>
				<Button size="small">Beri ulasan</Button>
				<Button size="small" color="primary">
					Beli lagi
				</Button>
			</TransactionActions>
		</Transaction> */
}
