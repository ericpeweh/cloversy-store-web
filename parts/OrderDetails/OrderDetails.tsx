// Dependencies
import React from "react";

// Styles
import {
	Address,
	AddressContainer,
	AddressName,
	AddressNumber,
	Details,
	DetailsContainer,
	InfoContainer,
	InfoDescription,
	InfoTitle,
	OrderCardContainer,
	OrderDetailsContainer,
	Section,
	SectionTitle,
	TotalPriceText
} from "./OrderDetails.styles";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Components
import { Divider, Grid, IconButton } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import OrderCard from "../../components/OrderCard/OrderCard";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import Tooltip from "../../components/Tooltip/Tooltip";
import Timeline from "../../components/Timeline/Timeline";

const OrderDetails = () => {
	return (
		<OrderDetailsContainer>
			<DetailsContainer>
				<PageTitle>Detail Pesanan</PageTitle>
				<Grid container spacing={{ xs: 1, xl: 2 }}>
					<Grid item xs={12}>
						<Button variant="text" size="small" startIcon={<ArrowBackIosNewIcon />}>
							Kembali
						</Button>
					</Grid>
					<Grid item xs={12} md={6}>
						<Details>
							<Section>
								<SectionTitle>Informasi pesanan</SectionTitle>
								<InfoContainer>
									<InfoTitle>No. Invoice</InfoTitle>
									<InfoDescription>
										<Tooltip title="Salin Nomor Invoice">
											<IconButton sx={{ mr: 1 }}>
												<ContentCopyIcon sx={{ fontSize: "1.8rem" }} />
											</IconButton>
										</Tooltip>
										<span>PROD/21072022/00001</span>
									</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<InfoTitle>Status Pesanan</InfoTitle>
									<InfoDescription>
										<StatusBadge>Belum bayar</StatusBadge>
									</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<InfoTitle>Tanggal Pembelian</InfoTitle>
									<InfoDescription>21 Juli 2022, 14:40 WIB</InfoDescription>
								</InfoContainer>
							</Section>
							<Section>
								<SectionTitle>Produk</SectionTitle>
								<OrderCardContainer>
									<OrderCard
										title="Ventela Lost Angel"
										sizeDesc="EU 37"
										qtyDesc="1"
										price="700.000"
									/>
									<OrderCard
										title="Nike AF1 Homesick"
										sizeDesc="EU 40"
										qtyDesc="1"
										price="3.920.000"
									/>
									<OrderCard
										title="Nike AF1 Homesick"
										sizeDesc="EU 40"
										qtyDesc="1"
										price="3.920.000"
									/>
								</OrderCardContainer>
							</Section>
							<Section>
								<SectionTitle>Rincian Pembayaran</SectionTitle>
								<InfoContainer>
									<InfoTitle>Metode Pembayaran</InfoTitle>
									<InfoDescription>BCA Bank Transfer</InfoDescription>
								</InfoContainer>
								<Divider flexItem sx={{ mb: 1 }} />
								<InfoContainer>
									<InfoTitle>Subtotal Produk</InfoTitle>
									<InfoDescription>Rp 6.845.000</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<InfoTitle>Biaya Pengiriman</InfoTitle>
									<InfoDescription>Rp 100.000</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<InfoTitle>Diskon / Potongan Harga</InfoTitle>
									<InfoDescription>Rp 80.000</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<TotalPriceText>
										<strong>Total Pesanan</strong>
									</TotalPriceText>
									<TotalPriceText>
										<strong>Rp 6.720.000</strong>
									</TotalPriceText>
								</InfoContainer>
							</Section>
						</Details>
					</Grid>
					<Grid item xs={12} md={6}>
						<Details sx={{ mt: { xs: -3, md: 0 } }}>
							<Section>
								<SectionTitle>Pengiriman</SectionTitle>
								<InfoContainer>
									<InfoTitle>Kurir</InfoTitle>
									<InfoDescription>JNE Regular (1-3 hari)</InfoDescription>
								</InfoContainer>
								<InfoContainer>
									<InfoTitle>No Resi</InfoTitle>
									<InfoDescription>
										<Tooltip title="Salin No Resi">
											<IconButton sx={{ mr: 1 }}>
												<ContentCopyIcon sx={{ fontSize: "1.8rem" }} />
											</IconButton>
										</Tooltip>
										ABCDEFG123456789
									</InfoDescription>
								</InfoContainer>
								<AddressContainer>
									<InfoTitle>Alamat Penerima :</InfoTitle>
									<AddressName>Mikici Cimol</AddressName>
									<AddressNumber>+62 878 1234 1234</AddressNumber>
									<Address>
										Kedai Vegetarian Kan En, Jl. DR. Setia Budi, Kec. Pontianak Sel.,{" "}
									</Address>
									<Address>
										Kota Pontianak, Kalimantan Barat, 78391 Rumah No. 46A ( Samping Showroom Vespa )
									</Address>
									<Address>Pontianak Selatan, Kota Pontianak Kalimantan Barat 78391</Address>
								</AddressContainer>
							</Section>
							<Section>
								<SectionTitle>Timeline Pesanan</SectionTitle>
								<Timeline
									items={[
										{
											date: "22 Aug 2022, 10:46",
											desc: "Paket telah diterima oleh Mikici Cimol"
										},
										{
											date: "22 Aug 2022, 10:20",
											desc: "Paket sedang diantarkan kurir ke alamat penerima"
										},
										{
											date: "18 Aug 2022, 20:15",
											desc: "Barang telah sampai digudang transit (Pontianak)"
										},
										{
											date: "10 Aug 2022, 17:15",
											desc: "Produk telah selesai (finishing)"
										},
										{
											date: "8 Aug 2022, 12:00",
											desc: "Produk dalam proses pengerjaan (painting)"
										},
										{
											date: "7 Aug 2022, 10:20",
											desc: "Pembayaran berhasil & pesanan dikonfirmasi"
										}
									]}
								/>
							</Section>
						</Details>
					</Grid>
				</Grid>
			</DetailsContainer>
		</OrderDetailsContainer>
	);
};

export default OrderDetails;
