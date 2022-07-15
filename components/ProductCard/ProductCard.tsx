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

const ProductCard = ({ size = "medium" }) => {
	const showProductView = useSelector(state => state.global.showProductView);
	const dispatch = useDispatch();

	const openProductViewHandler = () => {
		dispatch(openProductView());
	};

	return (
		<ProductCardContainer>
			<ProductImageContainer>
				{!showProductView && (
					<QuickViewButton onClick={openProductViewHandler}>Quick View</QuickViewButton>
				)}
				<ProductImage
					component="img"
					image="/images/product.jpg"
					alt="product name"
					sx={{
						height: size === "small" ? "14rem" : "32rem"
					}}
				/>
			</ProductImageContainer>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<CardContent>
					<ProductTitle>Nike AF1 Homesick</ProductTitle>
					<ProductPrice>Rp3.499.000</ProductPrice>
				</CardContent>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Tooltip title="Tambahkan ke wishlist">
						<IconButton>
							<FavoriteBorderOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Stack>
			</Stack>
		</ProductCardContainer>
	);
};

export default ProductCard;
