// Dependencies
import { CardContent } from "@mui/material";
import React from "react";

// Actions
import { openProductView } from "../../store/slices/homeSlice";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";

// Styles
import {
	ProductCardContainer,
	ProductImage,
	ProductImageContainer,
	ProductPrice,
	ProductTitle,
	QuickViewButton
} from "./ProductCard.styles";

const ProductCard = ({ size = "medium" }) => {
	const showProductView = useSelector(state => state.home.showProductView);
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
			<CardContent>
				<ProductTitle>Nike AF1 Homesick</ProductTitle>
				<ProductPrice>Rp3.499.000</ProductPrice>
			</CardContent>
		</ProductCardContainer>
	);
};

export default ProductCard;
