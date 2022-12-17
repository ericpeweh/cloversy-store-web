// Dependencies
import React from "react";
import { shallowEqual } from "react-redux";

// Styles
import {
	DetailContainer,
	DetailContainerSubtitle,
	DetailContainerText,
	DetailContainerTitle,
	ImageContainer,
	PriceContainer,
	PriceText,
	PriceTitle,
	SuccessMessage,
	TotalText
} from "./CheckoutSuccess.styles";
import { InputContainer, OrderCardsContainer } from "../Checkout/Checkout.styles";

// Types
import { ClientTransactionDetails } from "../../interfaces";

// Hooks
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";

// Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PaymentsIcon from "@mui/icons-material/Payments";

// Components
import { Divider, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import OrderCard from "../../components/OrderCard/OrderCard";
import formatToRupiah from "../../utils/formatToRupiah";
import Button from "../../components/Button/Button";

interface CheckoutSuccessProps {
	checkoutResultData: ClientTransactionDetails;
}

const CheckoutSuccess = ({ checkoutResultData: result }: CheckoutSuccessProps) => {
	const router = useRouter();
	const { full_name, email } = useSelector(state => state.auth, shallowEqual);

	const shipping = result.shipping_details;
	const payment = result.payment_details;
	const items = result.item_details;

	return (
		<>
			<Grid item xs={12} lg={7} xl={8}>
				<InputContainer>
					<Stack direction="row" alignItems="center" gap={1} mb={{ xs: 1, sm: 2, md: 3 }}>
						<CheckCircleOutlineIcon
							sx={{
								width: { xs: 40, md: 55, lg: 70 },
								height: { xs: 40, md: 55, lg: 70 }
							}}
							color="primary"
						/>
						<Stack>
							<Typography sx={{ fontSize: "1.5rem" }}>No Pesanan: {result.id}</Typography>
							<SuccessMessage>
								Terima kasih, {full_name.includes("@") ? "" : full_name}!
							</SuccessMessage>
						</Stack>
					</Stack>
					<Stack gap={2}>
						<DetailContainer>
							<DetailContainerTitle>Pesanan kamu telah dibuat!</DetailContainerTitle>
							<DetailContainerText>
								Kamu akan menerima konfirmasi email dan notifikasi terkait pesanan ini.
							</DetailContainerText>
						</DetailContainer>
						<DetailContainer>
							<DetailContainerTitle>Status pesanan dan pengiriman</DetailContainerTitle>
							<DetailContainerText>
								Kamu bisa melihat status pesanan dan pengiriman pada&nbsp;
								<Link
									onClick={() => router.push(`/orders/${result.id}`)}
									href={`/orders/${result.id}`}
									component="span"
									sx={{ cursor: "pointer" }}
								>
									detail transaksi
								</Link>
							</DetailContainerText>
						</DetailContainer>
						<DetailContainer>
							<DetailContainerTitle>Pembayaran</DetailContainerTitle>
							<DetailContainerText>
								Mohon segera melakukan pembayaran melalui tombol &quot;Bayar sekarang&quot; dibawah
							</DetailContainerText>
						</DetailContainer>
						<DetailContainer>
							<DetailContainerTitle>Informasi pesanan</DetailContainerTitle>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<DetailContainerSubtitle>Pengiriman</DetailContainerSubtitle>
									<Stack direction="row" alignItems="center" gap={2}>
										<ImageContainer>
											<Image
												src={`/images/${shipping.shipping_courier}.png`}
												alt={"shipping courier logo"}
												height={200}
												width={400}
												layout="responsive"
											/>
										</ImageContainer>
										<DetailContainerText
											sx={{ textTransform: "uppercase" }}
										>{`${shipping.shipping_courier} ${shipping.shipping_courier} (${shipping.shipping_etd} hari)`}</DetailContainerText>
									</Stack>
								</Grid>
								<Grid item xs={12} sm={6}>
									<DetailContainerSubtitle>Metode Pembayaran</DetailContainerSubtitle>
									<Stack direction="row" alignItems="center" gap={2}>
										<ImageContainer>
											<Image
												src={`/images/${payment.payment_method}.png`}
												alt={"payment method logo"}
												height={200}
												width={400}
												layout="responsive"
											/>
										</ImageContainer>
										<DetailContainerText>
											{payment.payment_method === "gopay"
												? "Gopay"
												: `${payment.payment_method.toUpperCase()} Virtual Account`}
										</DetailContainerText>
									</Stack>
								</Grid>
								<Grid item xs={12} sm={6}>
									<DetailContainerSubtitle>Alamat Pengiriman</DetailContainerSubtitle>
									<Stack gap={0.5}>
										<DetailContainerText>{shipping.recipient_name}</DetailContainerText>
										<DetailContainerText>{shipping.address}</DetailContainerText>
										<DetailContainerText>
											{shipping.province}, {shipping.city}
										</DetailContainerText>
										<DetailContainerText>
											{shipping.subdistrict} {shipping.postal_code}
										</DetailContainerText>
										<DetailContainerText>{shipping.contact}</DetailContainerText>
									</Stack>
								</Grid>
							</Grid>
						</DetailContainer>

						<Stack direction="row" justifyContent={{ xs: "stretch", sm: "flex-end" }}>
							<Stack
								direction={{ xs: "column", sm: "row" }}
								gap={{ xs: 1, sm: 2 }}
								width={{ xs: "100%", sm: "auto" }}
							>
								<Button variant="outlined" onClick={() => router.replace("/account/orders")}>
									Lihat Daftar pesanan
								</Button>
								<Button color="secondary" onClick={() => router.replace("/products")}>
									Belanja Lagi
								</Button>
								<Button
									color="primary"
									startIcon={<PaymentsIcon />}
									onClick={() => router.replace(`/account/orders/${result.id}/payment`)}
								>
									Bayar sekarang
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</InputContainer>
			</Grid>
			<Grid item xs={12} md={12} lg={5} xl={4}>
				<DetailContainerTitle>Detail pesanan</DetailContainerTitle>
				<Stack>
					<OrderCardsContainer>
						<React.Fragment>
							{items.map((item, i) => (
								<>
									<OrderCard
										title={item.title}
										sizeDesc={`EU ${item.product_size}`}
										qtyDesc={item.quantity.toString()}
										price={formatToRupiah(+item.price)}
										imageUrl={(item?.images || [])[0] || "/images/no-image.png"}
									/>
									{i !== items.length - 1 && <Divider flexItem />}
								</>
							))}
						</React.Fragment>
					</OrderCardsContainer>
					<Stack mt={4}>
						<PriceContainer>
							<PriceTitle>Subtotal: </PriceTitle>
							<PriceText>{formatToRupiah(+result.subtotal)}</PriceText>
						</PriceContainer>
						<PriceContainer>
							<PriceTitle>Potongan Harga: </PriceTitle>
							<PriceText>{formatToRupiah(+result.discount_total)}</PriceText>
						</PriceContainer>
						<PriceContainer>
							<PriceTitle>Biaya Pengiriman: </PriceTitle>
							<PriceText>{formatToRupiah(+shipping.shipping_cost)}</PriceText>
						</PriceContainer>
						<Divider sx={{ my: 1 }} />
						<PriceContainer>
							<PriceTitle>Total: </PriceTitle>
							<TotalText>{formatToRupiah(+result.total)}</TotalText>
						</PriceContainer>
					</Stack>
				</Stack>
			</Grid>
		</>
	);
};

export default CheckoutSuccess;
