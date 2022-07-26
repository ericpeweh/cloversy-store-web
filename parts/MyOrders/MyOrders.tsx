// Dependencies
import { Divider } from "@mui/material";
import React from "react";
import Button from "../../components/Button/Button";

// Styles
import {
	MyOrdersContainer,
	OrderCardsContainer,
	Transaction,
	TransactionDetails,
	TransactionDate,
	TransactionCode,
	TransactionSummary,
	TransactionTotal,
	TransactionActions
} from "./MyOrders.styles";

// Icon
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// Components
import TabsNavigation from "../../components/TabsNavigation/TabsNavigation";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import OrderCard from "../../components/OrderCard/OrderCard";
import StatusBadge from "../../components/StatusBadge/StatusBadge";

const TemporaryTransactionsComponent = () => (
	<>
		<Transaction>
			<TransactionDetails>
				<StatusBadge>Belum bayar</StatusBadge>
				<TransactionCode>PROD/21072022/00001</TransactionCode>
				<TransactionDate>21 Juli 2022</TransactionDate>
			</TransactionDetails>
			<OrderCardsContainer>
				<OrderCard title="Nike AF1 Homesick" sizeDesc="EU 40" qtyDesc="2" price="6.240.000" />
				<Divider flexItem />
				<OrderCard title="Ventela Lost Angel" sizeDesc="EU 37" qtyDesc="1" price="700.000" />
			</OrderCardsContainer>
			<TransactionSummary>
				<strong>Total Pesanan: </strong>
				<TransactionTotal>Rp 6.940.000</TransactionTotal>
			</TransactionSummary>
			<TransactionActions>
				<Button size="small" variant="text" endIcon={<DescriptionOutlinedIcon />}>
					Lihat detail pesanan
				</Button>
				<Button size="small" color="primary">
					Bayar sekarang
				</Button>
			</TransactionActions>
		</Transaction>
		<Transaction>
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
		</Transaction>
	</>
);

const MyOrders = () => {
	return (
		<MyOrdersContainer>
			<TabsNavigation variant="fullWidth">
				<TabsPanel label="Semua" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
				<TabsPanel label="Belum Bayar" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
				<TabsPanel label="Dikemas" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
				<TabsPanel label="Dikirim" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
				<TabsPanel label="Selesai" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
				<TabsPanel label="Dibatalkan" noHorizontalSpacing>
					<TemporaryTransactionsComponent />
				</TabsPanel>
			</TabsNavigation>
		</MyOrdersContainer>
	);
};

export default MyOrders;
