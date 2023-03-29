// Dependencies
import { IconButton, Stack } from "@mui/material";
import React from "react";

// Hooks
import { useRouter } from "next/router";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import useWishlist from "../../hooks/useWishlist";

// Actions
import { openProductView } from "../../store/slices/globalSlice";

// Styles
import {
	ProductListItemContainer,
	ProductImage,
	ProductPrice,
	ProductTitle,
	ProductContent,
	ProductDesription,
	ProductActionsContainer,
	ProductImageContainer
} from "./ProductListItem.styles";

// Types
import { Product } from "../../interfaces";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Components
import Button from "../Button/Button";
import { QuickViewButton } from "../ProductCard/ProductCard.styles";
import Tooltip from "../Tooltip/Tooltip";

interface ProductListItemProps {
	productData: Product;
}

const ProductListItem = ({ productData }: ProductListItemProps) => {
	const { isWishlisted, addToWishlistHandler, deleteFromWishlistHandler } =
		useWishlist(productData);
	const router = useRouter();
	const isAuth = useSelector(state => state.auth.isAuth);
	const showProductView = useSelector(state => state.global.showProductView);
	const dispatch = useDispatch();

	const openProductViewHandler = () => {
		dispatch(openProductView(productData));
	};

	let productDescription = "No description provided.";
	if (productData?.description) productDescription = productData?.description;
	if (productData?.description.length! > 150) {
		productDescription = productData?.description.slice(0, 150) + "...";
	}

	return (
		<ProductListItemContainer>
			<ProductImageContainer>
				{!showProductView && (
					<QuickViewButton onClick={openProductViewHandler}>Quick view</QuickViewButton>
				)}
				<ProductImage imageUrl={(productData?.images || [])[0] || "/images/no-image.png"} />
			</ProductImageContainer>
			<ProductContent>
				<Stack direction="row" justifyContent="space-between">
					<ProductTitle>{productData?.title}</ProductTitle>
					{isAuth && (
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
					)}
				</Stack>
				<ProductPrice>{formatToRupiah(productData?.price)}</ProductPrice>
				<ProductDesription>{productDescription}</ProductDesription>
				<ProductActionsContainer>
					<Button
						color="primary"
						endIcon={<ChevronRightIcon />}
						size="small"
						onClick={() => router.push(`/products/${productData?.slug}`)}
					>
						Lihat detail produk
					</Button>
				</ProductActionsContainer>
			</ProductContent>
		</ProductListItemContainer>
	);
};

export default ProductListItem;
