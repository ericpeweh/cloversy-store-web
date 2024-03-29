// Dependencies
import React, { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";

// Styles
import {
	ContentContainer,
	ImageCarousel,
	ProductDesription,
	ProductDetails,
	ProductPrice,
	ProductTitle,
	ProductViewContainer,
	RatingText,
	MainText
} from "./ProductViewModal.styles";

// Hooks
import { useRouter } from "next/router";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import useWishlist from "../../hooks/useWishlist";
import useCart from "../../hooks/useCart";
import { useTrackProductSeenMutation } from "../../api/activity.api";

// Actions
import { closeProductView } from "../../store/slices/globalSlice";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import ClearIcon from "@mui/icons-material/Clear";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Components
import { Divider, Grid, Link, Rating, Stack } from "@mui/material";
import CarouselWithThumb from "../CarouselWithThumb/CarouselWithThumb";
import CloseButton from "../CloseButton/CloseButton";
import SizeRadio from "../SizeRadio/SizeRadio";
import QuantityInput from "../QuantityInput/QuantityInput";
import Button from "../Button/Button";
import ImageViewer from "../ImageViewer/ImageViewer";

const ProductViewModal = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);
	const { showProductView, productViewData } = useSelector(state => state.global, shallowEqual);

	// Track user product last seen
	const [trackProductSeen] = useTrackProductSeenMutation();

	useEffect(() => {
		if (isAuth && productViewData && showProductView) {
			trackProductSeen(productViewData.id);
		}
	}, [isAuth, productViewData, trackProductSeen, showProductView]);

	const [shoesSize, setShoesSize] = useState(productViewData?.sizes[0] || "36");
	const [quantity, setQuantity] = useState(1);

	// Lightbox
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const { addToCartHandler, isAddToCartLoading } = useCart();

	useEffect(() => {
		setShoesSize(productViewData?.sizes[0] || "36");
	}, [productViewData?.sizes]);

	const {
		isWishlisted,
		addToWishlistHandler,
		isAddToWishlistLoading,
		deleteFromWishlistHandler,
		isDeleteFromWishlistLoading
	} = useWishlist(productViewData!);

	const closeProductViewHandler = () => {
		dispatch(closeProductView());
	};

	const addProductToCartHandler = () => {
		if (!shoesSize || !quantity || !productViewData) return;

		const newCartItem = { product_id: productViewData.id, size: shoesSize, quantity };

		addToCartHandler(newCartItem, productViewData);
	};

	let productDescription = "No description provided.";
	if (productViewData?.description) productDescription = productViewData?.description;
	if (productViewData?.description.length! > 500) {
		productDescription = productViewData?.description.slice(0, 500) + "...";
	}

	return (
		<ProductViewContainer open={showProductView} onClose={closeProductViewHandler}>
			<ImageViewer
				isOpen={isLightboxOpen}
				onClose={() => setIsLightboxOpen(false)}
				imageIndex={lightboxIndex}
				slides={
					productViewData?.images?.length !== 0
						? productViewData?.images.map(url => ({ src: url }))
						: [{ src: "/images/no-image.png" }]
				}
			/>
			<CloseButton
				onClick={closeProductViewHandler}
				sx={{ top: "1rem", right: "1rem", width: "3rem", height: "3rem" }}
				data-testid="dialog-close-button"
			/>
			<ContentContainer container spacing={3}>
				<Grid item xs={6}>
					<ImageCarousel>
						<CarouselWithThumb
							images={
								productViewData?.images?.length !== 0
									? productViewData?.images!
									: ["/images/no-image.png"]
							}
							onImageClick={(imageIndex: number) => {
								setLightboxIndex(imageIndex);
								setIsLightboxOpen(true);
							}}
						/>
					</ImageCarousel>
				</Grid>
				<Grid item xs={6}>
					<ProductDetails>
						<ProductTitle data-testid="dialog-product-title">{productViewData?.title}</ProductTitle>
						<Stack direction="row" alignItems="center" gap="1rem">
							{productViewData?.rating ? (
								<>
									<Rating value={+productViewData.rating} readOnly precision={0.1} />
									<RatingText>
										{(+productViewData?.rating).toFixed(1)} | {productViewData.review_count} Ulasan
									</RatingText>
								</>
							) : (
								<RatingText>- Belum ada ulasan -</RatingText>
							)}
						</Stack>
						<ProductPrice data-testid="dialog-product-price">
							{formatToRupiah(productViewData?.price || 0)}
						</ProductPrice>
						<ProductDesription>{productDescription}</ProductDesription>
						<Link
							onClick={() => {
								router.push(`/products/${productViewData?.slug}`);
								closeProductViewHandler();
							}}
							href={`/products/${productViewData?.slug}`}
							component="button"
							sx={{ width: "max-content", fontSize: "1.6rem", mb: 2, marginLeft: "auto" }}
						>
							More detail{"   "}&rarr;
						</Link>
						<Divider />
						<MainText>Ukuran: EU</MainText>
						<SizeRadio
							value={shoesSize}
							onChange={setShoesSize}
							sizeOptions={productViewData?.sizes ?? []}
						/>
						<Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={5}>
							<MainText>Jumlah: </MainText>
							<QuantityInput value={quantity} size="medium" onChangeQuantity={setQuantity} />
						</Stack>
						<Button sx={{ mb: 1 }} onClick={addProductToCartHandler} loading={isAddToCartLoading}>
							Tambahkan ke keranjang
						</Button>
						{isAuth && productViewData && (
							<Button
								variant="outlined"
								color={isWishlisted ? "error" : "primary"}
								endIcon={
									isDeleteFromWishlistLoading || isAddToWishlistLoading ? null : isWishlisted ? (
										<ClearIcon sx={{ color: "error.primary" }} />
									) : (
										<FavoriteIcon sx={{ color: "primary.light" }} />
									)
								}
								onClick={() =>
									isWishlisted
										? deleteFromWishlistHandler(productViewData?.id)
										: addToWishlistHandler(productViewData?.id)
								}
								loading={isDeleteFromWishlistLoading || isAddToWishlistLoading}
							>
								{isWishlisted ? "Hapus dari wishlist" : "Tambahkan ke wishlist"}
							</Button>
						)}
					</ProductDetails>
				</Grid>
			</ContentContainer>
		</ProductViewContainer>
	);
};

export default ProductViewModal;
