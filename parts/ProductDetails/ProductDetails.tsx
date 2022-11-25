// Dependencies
import React, { useState } from "react";
import Head from "next/head";

// Styles
import {
	ProductDetailsContainer,
	ImageCarouselContainer,
	ProductInfoContainer,
	GridContainer,
	ProductTitle,
	RatingText,
	ProductPrice,
	ProductDesription,
	MainText,
	ReviewsPagination,
	ProductsRecommendation
} from "./ProductDetails.styles";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Types
import { Product } from "../../interfaces";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useSelector from "../../hooks/useSelector";

// Components
import { Divider, Rating, Stack, Grid, IconButton, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import CarouselWithThumb from "../../components/CarouselWithThumb/CarouselWithThumb";
import SizeRadio from "../../components/SizeRadio/SizeRadio";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import TabsNavigation from "../../components/TabsNavigation/TabsNavigation";
import TabsPanel from "../../components/TabsPanel/TabsPanel";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import ProductViewModal from "../../components/ProductViewModal/ProductViewModal";

interface ProductDetailsProps {
	productData: Product;
}

const ProductDetails = ({ productData }: ProductDetailsProps) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const { wWidth } = useWindowSize();
	const [shoesSize, setShoesSize] = useState(36);
	const [quantity, setQuantity] = useState(1);

	const links = [
		{ label: "Products", url: "/products" },
		{ label: productData?.brand, url: "#" },
		{ label: productData?.title, url: "current" }
	];

	return (
		<>
			<Head>
				{" "}
				<title>Product Details | {productData?.title}</title>
			</Head>

			<ProductDetailsContainer>
				<ProductViewModal />
				<PageBreadcrumbs links={links} />
				<GridContainer container spacing={{ xs: 3, lg: 4, xl: 5 }}>
					<ImageCarouselContainer item xs={12} md={6}>
						<CarouselWithThumb
							size="medium"
							images={
								productData?.images?.length !== 0 ? productData?.images! : ["/images/no-image.png"]
							}
						/>
					</ImageCarouselContainer>
					<ProductInfoContainer item xs={12} md={6}>
						<ProductTitle>{productData?.title}</ProductTitle>
						<Stack direction="row" alignItems="center" gap="1rem">
							<Rating value={4.5} readOnly precision={0.5} />
							<RatingText>4.8 | 24 Reviews</RatingText>
						</Stack>
						<ProductPrice>{formatToRupiah(productData?.price)}</ProductPrice>
						<ProductDesription>
							{productData?.description.split("\n\r")[0] || "No description provided."}
						</ProductDesription>
						<Divider sx={{ mb: { xs: 2, sm: 0 } }} />
						<MainText>Ukuran: EU</MainText>
						<SizeRadio
							value={shoesSize}
							onChange={setShoesSize}
							size={{ xs: 3, sm: 2, md: 3, lg: 2 }}
							sizeOptions={productData?.sizes ?? []}
						/>
						<Divider sx={{ mt: 2 }} />
						<Stack direction="row" alignItems="center" mt={3} mb={5} gap={2}>
							<MainText>Jumlah barang: </MainText>
							<QuantityInput
								size={wWidth <= 600 ? "small" : "medium"}
								value={quantity}
								onChangeQuantity={setQuantity}
							/>
						</Stack>
						<Button
							variant="contained"
							fullWidth
							size={wWidth <= 600 ? "small" : "large"}
							color="primary"
						>
							Tambahkan ke keranjang
						</Button>
						{isAuth && (
							<Button
								variant="outlined"
								sx={{ mt: { xs: 1.5, sm: 2 } }}
								fullWidth
								color="primary"
								endIcon={<FavoriteIcon sx={{ color: "primary.light" }} />}
								size={wWidth <= 600 ? "small" : "large"}
							>
								Tambahkan ke wishlist
							</Button>
						)}
						<Stack direction="row" alignItems="center" mt={2} gap={2}>
							<MainText>Share: </MainText>
							<Stack direction="row">
								<IconButton>
									<FacebookIcon />
								</IconButton>
								<IconButton>
									<TwitterIcon />
								</IconButton>
								<IconButton>
									<WhatsAppIcon />
								</IconButton>
								<IconButton>
									<InstagramIcon />
								</IconButton>
								<IconButton>
									<TelegramIcon />
								</IconButton>
							</Stack>
						</Stack>
					</ProductInfoContainer>
				</GridContainer>
				<GridContainer container spacing={{ xs: 3, lg: 4, xl: 5 }} rowSpacing={1} pt={5}>
					<Grid item xs={12}>
						<TabsNavigation>
							<TabsPanel label="Deskripsi">
								<Typography sx={{ whiteSpace: "pre-wrap" }}>
									{productData?.description || "No description provided."}
								</Typography>
							</TabsPanel>
							<TabsPanel label="Ulasan (5)">
								<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
									<ReviewItem />
									<ReviewItem />
									<ReviewItem />
								</Grid>
								<ReviewsPagination count={5} shape="rounded" color="primary" />
							</TabsPanel>
						</TabsNavigation>
					</Grid>
				</GridContainer>
				{productData?.recommendations.length > 0 && (
					<ProductsRecommendation>
						<MainText>Produk lainnya</MainText>
						<ProductsContainer spacing={{ xs: 1, sm: 2, lg: 3 }} size={{ xs: 6, md: 3, xl: 3 }}>
							{productData?.recommendations.map(productData => (
								<ProductCard size="small" productData={productData} key={productData.id} />
							))}
						</ProductsContainer>
					</ProductsRecommendation>
				)}
			</ProductDetailsContainer>
		</>
	);
};

export default ProductDetails;
