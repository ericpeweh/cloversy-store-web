// Dependencies
import { CardContent } from "@mui/material";
import React from "react";

// Styles
import {
	ProductCardContainer,
	ProductImage,
	ProductImageContainer,
	ProductPrice,
	ProductTitle,
	QuickViewButton
} from "./ProductCard.styles";

const ProductCard = () => {
	return (
		<ProductCardContainer>
			<ProductImageContainer>
				<QuickViewButton>Quick View</QuickViewButton>
				<ProductImage component="img" image="/images/product.jpg" alt="product name" />
			</ProductImageContainer>
			<CardContent>
				<ProductTitle>Nike AF1 Homesick</ProductTitle>
				<ProductPrice>Rp.3.499.000</ProductPrice>
			</CardContent>
		</ProductCardContainer>
	);
};

export default ProductCard;
