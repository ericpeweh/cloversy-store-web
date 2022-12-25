// Dependencies
import React, { useState } from "react";
import Head from "next/head";

// Styles
import {
	Address,
	AddressContainer,
	AddressName,
	AddressNumber,
	Details,
	DetailsContainer,
	ImageContainer,
	InfoContainer,
	InfoDescription,
	InfoTitle,
	OrderCardContainer,
	OrderDetailsContainer,
	Section,
	SectionTitle,
	TotalPriceText
} from "./OrderDetails.styles";

// Hooks
import { useGetTransactionDetailsQuery } from "../../api/transaction.api";
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Utils
import { formatDateFull } from "../../utils/formatDate";
import formatToRupiah from "../../utils/formatToRupiah";
import getOrderStatus from "../../utils/getOrderStatus";

// Components
import { Alert, CircularProgress, Divider, Grid, IconButton, Snackbar, Stack } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import OrderCard from "../../components/OrderCard/OrderCard";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Tooltip from "../../components/Tooltip/Tooltip";
import Timeline from "../../components/Timeline/Timeline";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import BoxButton from "../../components/BoxButton/BoxButton";
import Image from "next/image";

const OrderDetails = () => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const router = useRouter();
	const { orderId } = router.query;
	const [successCopyTransactionNumber, setSuccessCopyTransactionNumber] = useState(false);
	const [successCopyTrackingCode, setSuccessCopyTrackingCode] = useState(false);

	const {
		data: resultData,
		isLoading: isGetOrderLoading,
		isSuccess: isGetOrderSuccess,
		error: getOrderErrorData,
		refetch: refetchOrder,
		isUninitialized: isGetOrderUninitialized
	} = useGetTransactionDetailsQuery(orderId as string, { skip: !isAuth });
	const getOrderError: any = getOrderErrorData;
	const orderData = resultData?.data.transaction;

	const orderStatus = getOrderStatus(orderData?.order_status || "pending");
	const shipping = orderData?.shipping_details;
	const payment = orderData?.payment_details;
	const items = orderData?.item_details;

	const copyTransactionNumberHandler = async () => {
		await navigator.clipboard.writeText(orderData?.id || "");
		setSuccessCopyTransactionNumber(true);
	};

	const copyTrackingCodeHandler = async () => {
		await navigator.clipboard.writeText(shipping?.shipping_tracking_code || "");
		setSuccessCopyTrackingCode(true);
	};

	return (
		<>
			<Head>
				<title>
					Detail Pesanan |{" "}
					{isGetOrderLoading
						? "Loading..."
						: !orderData
						? "Pesanan tidak ditemukan"
						: orderData?.id}
				</title>
			</Head>
			<OrderDetailsContainer>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={successCopyTransactionNumber}
					onClose={() => setSuccessCopyTransactionNumber(false)}
					message="No transaksi telah disalin!"
					key={"transaction_number_copy"}
					autoHideDuration={1500}
				/>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					open={successCopyTrackingCode}
					onClose={() => setSuccessCopyTrackingCode(false)}
					message="Nomor resi pengiriman telah disalin!"
					key={"tracking_code_copy"}
					autoHideDuration={1500}
				/>
				<DetailsContainer>
					<PageTitle>Detail Pesanan</PageTitle>
					<Grid container spacing={{ xs: 1, xl: 2 }}>
						<Grid item xs={12}>
							<Button
								variant="text"
								size="small"
								startIcon={<ArrowBackIosNewIcon />}
								onClick={() =>
									router.push({ pathname: "/account/orders" }, undefined, { scroll: false })
								}
							>
								Kembali
							</Button>
						</Grid>
						{(isGetOrderUninitialized || isGetOrderLoading) && (
							<FallbackContainer>
								<CircularProgress />
							</FallbackContainer>
						)}
						{!isGetOrderLoading && getOrderError && (
							<FallbackContainer>
								<Alert severity="error" sx={{ mb: 2 }}>
									{getOrderError?.data.message}
								</Alert>
								<BoxButton onClick={refetchOrder}>Try again</BoxButton>
							</FallbackContainer>
						)}
						{isGetOrderSuccess && orderData && shipping && payment && items && (
							<>
								<Grid item xs={12} md={6}>
									<Details>
										<Section>
											<SectionTitle>Informasi pesanan</SectionTitle>
											<InfoContainer>
												<InfoTitle>No. Transaksi</InfoTitle>
												<InfoDescription>
													<Tooltip title="Salin nomor transaksi">
														<IconButton sx={{ mr: 1 }} onClick={copyTransactionNumberHandler}>
															<ContentCopyIcon sx={{ fontSize: "1.8rem" }} />
														</IconButton>
													</Tooltip>
													<span>{orderData.id}</span>
												</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>Status Pesanan</InfoTitle>
												<InfoDescription>
													<StatusBadge color={orderStatus.color}>{orderStatus.label}</StatusBadge>
												</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>Tanggal Pembelian</InfoTitle>
												<InfoDescription>{formatDateFull(orderData.created_at)}</InfoDescription>
											</InfoContainer>
										</Section>
										<Section>
											<SectionTitle>Produk</SectionTitle>
											<OrderCardContainer>
												{items.map(item => (
													<OrderCard
														slug={item.slug}
														clickable={true}
														key={item.product_id}
														title={item.title}
														sizeDesc={`EU ${item.product_size}`}
														qtyDesc={item.quantity.toString()}
														price={formatToRupiah(+item.price * +item.quantity)}
														imageUrl={(item?.images || [])[0] || "/images/no-image.png"}
													/>
												))}
											</OrderCardContainer>
										</Section>
										<Section>
											<SectionTitle>Rincian Pembayaran</SectionTitle>
											<InfoContainer>
												<InfoTitle>Metode Pembayaran</InfoTitle>
												<Stack direction="row" gap={2} alignItems="center">
													<ImageContainer>
														<Image
															src={`/images/${payment.payment_method}.png`}
															alt={"payment method logo"}
															height={200}
															width={400}
															layout="responsive"
														/>
													</ImageContainer>
													<InfoDescription>
														{payment.payment_method === "gopay"
															? "Gopay"
															: `${payment.payment_method.toUpperCase()} Virtual Account`}
													</InfoDescription>
												</Stack>
											</InfoContainer>
											<Divider flexItem sx={{ mb: 1 }} />
											<InfoContainer>
												<InfoTitle>Subtotal Produk</InfoTitle>
												<InfoDescription>{formatToRupiah(+orderData.subtotal)}</InfoDescription>
											</InfoContainer>
											{+orderData.discount_total !== 0 && (
												<InfoContainer>
													<InfoTitle>Diskon / Potongan Harga</InfoTitle>
													<InfoDescription>
														{formatToRupiah(+orderData.discount_total)}
													</InfoDescription>
												</InfoContainer>
											)}
											<InfoContainer>
												<InfoTitle>Biaya Pengiriman</InfoTitle>
												<InfoDescription>{formatToRupiah(+shipping.shipping_cost)}</InfoDescription>
											</InfoContainer>
											<InfoContainer>
												<TotalPriceText>
													<strong>Total Pesanan</strong>
												</TotalPriceText>
												<TotalPriceText>
													<strong>{formatToRupiah(+orderData.total)}</strong>
												</TotalPriceText>
											</InfoContainer>
										</Section>
										{(orderData.customer_note || orderData.gift_note) && (
											<Section>
												<SectionTitle>Informasi lainnya</SectionTitle>
												{orderData.customer_note && (
													<Stack gap={0.5} mb={3}>
														<InfoTitle>Catatan pesanan: </InfoTitle>
														<InfoDescription>{orderData.customer_note}</InfoDescription>
													</Stack>
												)}
												{orderData.gift_note && (
													<Stack gap={0.5}>
														<InfoTitle>Catatan hadiah:</InfoTitle>
														<InfoDescription>{orderData.gift_note}</InfoDescription>
													</Stack>
												)}
											</Section>
										)}
									</Details>
								</Grid>
								<Grid item xs={12} md={6}>
									<Details sx={{ mt: { xs: -3, md: 0 } }}>
										<Section>
											<SectionTitle>Pengiriman</SectionTitle>
											<InfoContainer>
												<InfoTitle>Kurir</InfoTitle>
												<Stack direction="row" gap={2} alignItems="center">
													<ImageContainer>
														<Image
															src={`/images/${shipping.shipping_courier}.png`}
															alt={"shipping courier logo"}
															height={200}
															width={400}
															layout="responsive"
														/>
													</ImageContainer>
													<InfoDescription>{`${shipping.shipping_courier.toUpperCase()} ${
														shipping.shipping_service
													} (${shipping.shipping_etd} hari)`}</InfoDescription>
												</Stack>
											</InfoContainer>
											<InfoContainer>
												<InfoTitle>No Resi</InfoTitle>
												<InfoDescription>
													{shipping.shipping_tracking_code && (
														<Tooltip title="Salin nomor resi">
															<IconButton sx={{ mr: 1 }} onClick={copyTrackingCodeHandler}>
																<ContentCopyIcon sx={{ fontSize: "1.8rem" }} />
															</IconButton>
														</Tooltip>
													)}
													{shipping.shipping_tracking_code || "Belum tersedia"}
												</InfoDescription>
											</InfoContainer>
											<AddressContainer>
												<InfoTitle>Alamat Penerima :</InfoTitle>
												<AddressName>{shipping.recipient_name}</AddressName>
												<AddressNumber>{shipping.contact}</AddressNumber>
												<Address>{shipping.address}</Address>
												<Address>
													{shipping.province}, {shipping.city}
												</Address>
												<Address>
													{shipping.subdistrict}, {shipping.postal_code}
												</Address>
												<Divider sx={{ my: 1 }} />
												<Address>Label: {shipping.label || "-"}</Address>
												<Address>Catatan pengiriman: {shipping.shipping_note || "-"}</Address>
											</AddressContainer>
										</Section>
										<Section>
											<SectionTitle>Timeline Pesanan</SectionTitle>
											<Timeline
												items={orderData.timeline.map(item => ({
													date: item.timeline_date,
													desc: item.description
												}))}
											/>
										</Section>
									</Details>
								</Grid>
							</>
						)}
					</Grid>
				</DetailsContainer>
			</OrderDetailsContainer>
		</>
	);
};

export default OrderDetails;
