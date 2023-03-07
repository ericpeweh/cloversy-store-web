// Dependencies
import React from "react";

// Styles
import {
	ContentCard,
	MenuContent,
	ContentTitle,
	MenuTitle,
	ContentBadge,
	MenuTitleContainer,
	InformationText
} from "./MyAccount.styles";

// Hooks
import { useGetAllTransactionsQuery } from "../../api/transaction.api";
import { useGetUserLastSeenProductsQuery } from "../../api/activity.api";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useRouter } from "next/router";

// Actions
import { setOrdersTabIndex } from "../../store/slices/globalSlice";

// Icons
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";

// Components
import { Alert, CircularProgress, Grid } from "@mui/material";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";
import ProductCard from "../../components/ProductCard/ProductCard";

const MyAccount = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isAuth = useSelector(state => state.auth.isAuth);

	// Transactions
	const {
		data: transactionsData,
		isLoading: isGetTransactionsLoading,
		isUninitialized: isGetTransactionsUninitialized,
		isSuccess: isGetTransactionsSuccess,
		error: getTransactionsErrorData,
		refetch: refetchTransactions
	} = useGetAllTransactionsQuery(isAuth, { skip: !isAuth });
	const getTransactionsError: any = getTransactionsErrorData;
	const transactions = transactionsData?.data.transactions;

	// Last seen products
	const {
		data: lastSeenProductsData,
		isLoading: isGetLastSeenProductsLoading,
		isUninitialized: isGetLastSeenProductsUninitialized,
		isSuccess: isGetLastSeenProductsSuccess,
		error: getLastSeenProductsErrorData,
		refetch: refetchLastSeenProducts
	} = useGetUserLastSeenProductsQuery(isAuth, { skip: !isAuth });
	const getLastSeenProductsError: any = getLastSeenProductsErrorData;
	const lastSeenProducts = lastSeenProductsData?.data.products;

	const orderCardClickHandler = (tabIndex: number) => {
		dispatch(setOrdersTabIndex(tabIndex));
		router.push("/account/orders");
	};

	return (
		<>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Pesanan saya</MenuTitle>
				</Grid>

				{(isGetTransactionsUninitialized || isGetTransactionsLoading) && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isGetTransactionsLoading && getTransactionsError && (
					<FallbackContainer>
						<Alert severity="error" sx={{ mb: 2 }}>
							{getTransactionsError?.data?.message ||
								"Error occured while fetching transactions data."}
						</Alert>
						<BoxButton onClick={() => refetchTransactions()}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{isGetTransactionsSuccess && transactions && (
					<>
						<Grid item xs={6} md={3}>
							<ContentCard onClick={() => orderCardClickHandler(1)}>
								<AccountBalanceWalletOutlinedIcon />
								<ContentTitle>
									Belum Bayar{" "}
									<ContentBadge>
										{transactions.filter(item => item.order_status === "pending").length || 0}
									</ContentBadge>
								</ContentTitle>
							</ContentCard>
						</Grid>
						<Grid item xs={6} md={3}>
							<ContentCard onClick={() => orderCardClickHandler(2)}>
								<Inventory2OutlinedIcon />
								<ContentTitle>
									Diproses
									<ContentBadge>
										{transactions.filter(item => item.order_status === "process").length || 0}
									</ContentBadge>
								</ContentTitle>
							</ContentCard>
						</Grid>
						<Grid item xs={6} md={3}>
							<ContentCard onClick={() => orderCardClickHandler(3)}>
								<LocalShippingOutlinedIcon />
								<ContentTitle>
									Dikirim
									<ContentBadge>
										{transactions.filter(item => item.order_status === "sent").length || 0}
									</ContentBadge>
								</ContentTitle>
							</ContentCard>
						</Grid>
						<Grid item xs={6} md={3}>
							<ContentCard onClick={() => orderCardClickHandler(4)}>
								<StarsOutlinedIcon />
								<ContentTitle>
									Beri Penilaian
									<ContentBadge>
										{transactions.filter(
											item => item.order_status === "success" && !item.is_reviewed
										).length || 0}
									</ContentBadge>
								</ContentTitle>
							</ContentCard>
						</Grid>
					</>
				)}
			</MenuContent>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Informasi akun</MenuTitle>
				</Grid>
				<Grid item xs={6}>
					<ContentCard clickable={false}>
						<MenuTitleContainer>
							<LoyaltyOutlinedIcon />
							Cloversy Credits
						</MenuTitleContainer>
						<ContentTitle>
							Poin anda: <ContentBadge>0</ContentBadge>
						</ContentTitle>
					</ContentCard>
				</Grid>
				<Grid item xs={12}>
					<InformationText>
						*Info: saat ini Cloversy credits belum dapat digunakan, kedepannya credits dapat
						ditukarkan dengan penawaran menarik
					</InformationText>
				</Grid>
			</MenuContent>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Terakhir dilihat</MenuTitle>
				</Grid>
				{isGetLastSeenProductsSuccess && lastSeenProducts && lastSeenProducts.length === 0 && (
					<Grid item xs={12} md={6}>
						<Alert severity="info" sx={{ mb: 2 }}>
							Kamu belum melihat produk manapun!
						</Alert>
					</Grid>
				)}
				{(isGetLastSeenProductsUninitialized || isGetLastSeenProductsLoading) && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isGetLastSeenProductsLoading && getLastSeenProductsError && (
					<FallbackContainer>
						<Alert severity="error" sx={{ mb: 2 }}>
							{getLastSeenProductsError?.data?.message ||
								"Error occured while fetching last seen products."}
						</Alert>
						<BoxButton onClick={() => refetchLastSeenProducts()}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{isGetLastSeenProductsSuccess &&
					lastSeenProducts &&
					lastSeenProducts.map(product => (
						<Grid item xs={6} sm={3} sx={{ mt: { xs: -2, sm: 0 } }} key={product.id}>
							<ProductCard size="small" disableActionButtons productData={product} />
						</Grid>
					))}
			</MenuContent>
		</>
	);
};

export default MyAccount;
