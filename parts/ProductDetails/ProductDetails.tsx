// Dependencies
import React, { useEffect, useState } from "react";
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
	ProductsRecommendation,
	FallbackImageContainer,
	FallbackImageText,
	FallbackContainer
} from "./ProductDetails.styles";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Types
import { Product } from "../../interfaces";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useSelector from "../../hooks/useSelector";
import useWishlist from "../../hooks/useWishlist";
import useCart from "../../hooks/useCart";
import usePagination from "../../hooks/usePagination";
import { useTrackProductSeenMutation } from "../../api/activity.api";
import { useRouter } from "next/router";

// Components
import { Divider, Rating, Stack, Grid, Typography } from "@mui/material";
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
import ShareProduct from "../../components/ShareProduct/ShareProduct";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import Image from "next/image";

interface ProductDetailsProps {
	productData: Product;
}

const ProductDetails = ({ productData }: ProductDetailsProps) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const router = useRouter();
	const { wWidth } = useWindowSize();
	const [shoesSize, setShoesSize] = useState(
		productData?.sizes?.length > 0 ? productData?.sizes[0] : "36"
	);
	const [quantity, setQuantity] = useState(1);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const { addToCartHandler, isAddToCartLoading } = useCart();

	// Reviews pagination
	const { page: reviewPage, onChange: reviewPaginationChangeHandler } = usePagination();

	// Track user product last seen
	const [trackProductSeen] = useTrackProductSeenMutation();

	// Re-set shoesSize if productData is changed
	useEffect(() => {
		if (productData && !productData.sizes.includes(shoesSize)) {
			setShoesSize(productData?.sizes?.length > 0 ? productData?.sizes[0] : "36");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productData]);

	useEffect(() => {
		if (isAuth && productData) {
			trackProductSeen(productData?.id);
		}
	}, [isAuth, productData, trackProductSeen]);

	const {
		isWishlisted,
		addToWishlistHandler,
		isAddToWishlistLoading,
		deleteFromWishlistHandler,
		isDeleteFromWishlistLoading
	} = useWishlist(productData);

	const links = [
		{ label: "Beranda", url: "/" },
		{ label: "Produk", url: "/products" },
		{ label: productData?.title, url: "current" }
	];

	const addProductToCartHandler = () => {
		if (!productData?.sizes || !shoesSize || !quantity) return;

		const newCartItem = { product_id: productData.id, size: shoesSize, quantity };

		addToCartHandler(newCartItem, productData);
	};

	return (
		<>
			<Head>
				<title>Product Details | {productData?.title}</title>
			</Head>
			<ProductDetailsContainer>
				{productData ? (
					<>
						<ImageViewer
							isOpen={isLightboxOpen}
							onClose={() => setIsLightboxOpen(false)}
							imageIndex={lightboxIndex}
							slides={
								productData?.images?.length !== 0
									? productData?.images.map(url => ({ src: url }))
									: [{ src: "/images/no-image.png" }]
							}
						/>
						<ProductViewModal />
						<PageBreadcrumbs links={links} />
						<GridContainer container spacing={{ xs: 3, lg: 4, xl: 5 }}>
							<ImageCarouselContainer item xs={12} md={6}>
								<CarouselWithThumb
									size="medium"
									images={
										productData?.images?.length !== 0
											? productData?.images!
											: ["/images/no-image.png"]
									}
									onImageClick={(imageIndex: number) => {
										setLightboxIndex(imageIndex);
										setIsLightboxOpen(true);
									}}
								/>
							</ImageCarouselContainer>
							<ProductInfoContainer item xs={12} md={6}>
								<ProductTitle data-testid="product-title">{productData?.title}</ProductTitle>
								<Stack direction="row" alignItems="center" gap="1rem">
									{productData?.rating ? (
										<>
											<Rating value={+productData.rating} readOnly precision={0.1} />
											<RatingText>
												{(+productData?.rating).toFixed(1)} | {productData.review_count} Ulasan
											</RatingText>
										</>
									) : (
										<RatingText sx={{ mt: 2 }}>- Belum ada ulasan -</RatingText>
									)}
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
									onClick={addProductToCartHandler}
									loading={isAddToCartLoading}
									data-testid="add-to-cart"
								>
									Tambahkan ke keranjang
								</Button>
								{isAuth && (
									<Button
										variant="outlined"
										sx={{ mt: { xs: 1.5, sm: 2 } }}
										fullWidth
										color={isWishlisted ? "error" : "primary"}
										endIcon={
											isDeleteFromWishlistLoading ||
											isAddToWishlistLoading ? null : isWishlisted ? (
												<ClearIcon sx={{ color: "error.primary" }} />
											) : (
												<FavoriteIcon sx={{ color: "primary.light" }} />
											)
										}
										onClick={() =>
											isWishlisted
												? deleteFromWishlistHandler(productData.id)
												: addToWishlistHandler(productData.id)
										}
										loading={isDeleteFromWishlistLoading || isAddToWishlistLoading}
										size={wWidth <= 600 ? "small" : "large"}
									>
										{isWishlisted ? "Hapus dari wishlist" : "Tambahkan ke wishlist"}
									</Button>
								)}
								<ShareProduct
									url={`https://github.com`}
									title={productData.title}
									text={`${productData.description.slice(0, 200)}...`}
								/>
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
									<TabsPanel label={`Ulasan (${productData?.review_count || "0"})`}>
										{productData.reviews.length === 0 && (
											<Typography textAlign="center">- Belum ada ulasan -</Typography>
										)}
										{productData.reviews.length !== 0 && (
											<>
												<Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
													{productData.reviews
														.slice((reviewPage - 1) * 4, (reviewPage - 1) * 4 + 4)
														.map(review => (
															<ReviewItem reviewData={review} key={review.id} />
														))}
												</Grid>
												{Math.ceil(productData.reviews.length / 4) > 1 && (
													<ReviewsPagination
														page={reviewPage}
														onChange={reviewPaginationChangeHandler}
														count={Math.ceil(productData.reviews.length / 4)}
														shape="rounded"
														color="primary"
													/>
												)}
											</>
										)}
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
					</>
				) : (
					<FallbackContainer>
						<FallbackImageContainer>
							<Image
								src="/images/no-product.png"
								alt="produk tidak ditemukan"
								height={512}
								width={512}
								layout="responsive"
							/>
						</FallbackImageContainer>
						<FallbackImageText>Produk tidak ditemukan!</FallbackImageText>
						<Button
							variant="outlined"
							size="small"
							startIcon={<ArrowBackIcon />}
							onClick={() => router.replace("/")}
						>
							Kembali ke Beranda
						</Button>
					</FallbackContainer>
				)}
			</ProductDetailsContainer>
		</>
	);
};

export default ProductDetails;
