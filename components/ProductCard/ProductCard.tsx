// Dependencies
import { CardContent, IconButton, Stack } from "@mui/material";
import React from "react";

// Actions
import { openProductView } from "../../store/slices/globalSlice";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
}

const ProductCard = ({ size = "medium", disableActionButtons = false }: ProductCardProps) => {
	const showProductView = useSelector(state => state.global.showProductView);
	const dispatch = useDispatch();

	const openProductViewHandler = () => {
		dispatch(openProductView());
	};

	return (
		<ProductCardContainer>
			<ProductImageContainer>
				{!showProductView && !disableActionButtons && (
					<QuickViewButton onClick={openProductViewHandler}>Quick View</QuickViewButton>
				)}
				<Link href="/products/abc">
					<ProductImage
						component="img"
						image="/images/product.jpg"
						alt="product name"
						sx={{
							height: {
								xs: size === "small" ? "10rem" : "15rem",
								sm: size === "small" ? "12rem" : "26rem",
								md: size === "small" ? "13rem" : "28rem",
								lg: size === "small" ? "14rem" : "32rem"
							}
						}}
					/>
				</Link>
			</ProductImageContainer>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<CardContent>
					<Link href="/products/abc">
						<ProductTitle>Nike AF1 Homesick</ProductTitle>
					</Link>
					<ProductPrice>Rp3.499.000</ProductPrice>
				</CardContent>
				{!disableActionButtons && (
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Tooltip title="Tambahkan ke wishlist">
							<IconButton>
								<FavoriteBorderOutlinedIcon />
							</IconButton>
						</Tooltip>
					</Stack>
				)}
			</Stack>
		</ProductCardContainer>
	);
};

export default ProductCard;
