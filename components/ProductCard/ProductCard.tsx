// Dependencies
import { CardContent, IconButton, Stack } from "@mui/material";
import React from "react";

// Actions
import { openProductView, closeSearchDrawer } from "../../store/slices/globalSlice";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import useWishlisted from "../../hooks/useWishlist";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Types
import { Product } from "../../interfaces";

// Styles
import {
	ProductCardContainer,
	ProductImage,
	ProductImageContainer,
	ProductPrice,
	ProductTitle,
	QuickViewButton
} from "./ProductCard.styles";
import Tooltip from "../Tooltip/Tooltip";
import Link from "next/link";

interface ProductCardProps {
	size?: "small" | "medium";
	disableActionButtons?: boolean;
	productData: Product;
}

const ProductCard = ({
	size = "medium",
	disableActionButtons = false,
	productData
}: ProductCardProps) => {
	const {
		isWishlisted,
		addToWishlistHandler,
		isAddToWishlistLoading,
		deleteFromWishlistHandler,
		isDeleteFromWishlistLoading
	} = useWishlisted(productData);
	const isAuth = useSelector(state => state.auth.isAuth);
	const showProductView = useSelector(state => state.global.showProductView);
	const dispatch = useDispatch();

	const openProductViewHandler = () => {
		dispatch(openProductView(productData));
	};

	return (
		<ProductCardContainer>
			<ProductImageContainer>
				{!showProductView && !disableActionButtons && (
					<QuickViewButton onClick={openProductViewHandler}>Quick View</QuickViewButton>
				)}
				<Link href={`/products/${productData?.slug}`}>
					<ProductImage
						component="img"
						image={(productData?.images || [])[0] || "/images/no-image.png"}
						alt="product name"
						sx={{
							height: {
								xs: size === "small" ? "10rem" : "15rem",
								sm: size === "small" ? "12rem" : "26rem",
								md: size === "small" ? "13rem" : "28rem",
								lg: size === "small" ? "14rem" : "32rem"
							}
						}}
						onClick={() => dispatch(closeSearchDrawer())}
					/>
				</Link>
			</ProductImageContainer>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<CardContent>
					<Link href={`/products/${productData?.slug}`}>
						<ProductTitle onClick={() => dispatch(closeSearchDrawer())}>
							{productData?.title}
						</ProductTitle>
					</Link>
					<ProductPrice>{formatToRupiah(productData?.price)}</ProductPrice>
				</CardContent>
				{!disableActionButtons && isAuth && (
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Tooltip title={isWishlisted ? "Hapus dari wishlist" : "Tambahkan ke wishlist"}>
							<IconButton
								onClick={() =>
									isWishlisted
										? deleteFromWishlistHandler(productData.id)
										: addToWishlistHandler(productData.id)
								}
							>
								{isWishlisted ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon />}
							</IconButton>
						</Tooltip>
					</Stack>
				)}
			</Stack>
		</ProductCardContainer>
	);
};

export default ProductCard;
