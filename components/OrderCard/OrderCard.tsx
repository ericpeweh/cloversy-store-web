// Dependencies
import React from "react";

// Styles
import {
	CardContent,
	CardDescription,
	CardImage,
	CardPrice,
	CardTitle,
	OrderCardContainer
} from "./OrderCard.styles";

interface OrderCardProps {
	title: string;
	sizeDesc: string;
	qtyDesc: string;
	price: string;
}

const OrderCard = ({ title, sizeDesc, qtyDesc, price }: OrderCardProps) => {
	return (
		<OrderCardContainer>
			<CardImage />
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Ukuran: {sizeDesc}</CardDescription>
				<CardDescription>Jumlah: {qtyDesc}</CardDescription>
			</CardContent>
			<CardPrice>Rp {price}</CardPrice>
		</OrderCardContainer>
	);
};

export default OrderCard;
