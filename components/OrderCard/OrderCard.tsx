// Dependencies
import React from "react";
import QuantityInput from "../QuantityInput/QuantityInput";

// Styles
import {
	CardContent,
	CardDescription,
	CardImage,
	CardPrice,
	CardTitle,
	InputContainer,
	OrderCardContainer
} from "./OrderCard.styles";

interface OrderCardProps {
	title: string;
	sizeDesc: string;
	qtyDesc: string;
	price: string;
	showInput?: boolean;
	imageUrl: string;
}

const OrderCard = ({
	title,
	sizeDesc,
	qtyDesc,
	price,
	showInput = false,
	imageUrl
}: OrderCardProps) => {
	return (
		<OrderCardContainer>
			<CardImage imageurl={imageUrl} />
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<CardDescription>Ukuran: {sizeDesc}</CardDescription>
				{!showInput && <CardDescription>Jumlah: {qtyDesc}</CardDescription>}
			</CardContent>
			{showInput && (
				<InputContainer>
					<QuantityInput value={4} size="small" onChangeQuantity={() => {}} />
				</InputContainer>
			)}
			<CardPrice>{price}</CardPrice>
		</OrderCardContainer>
	);
};

export default OrderCard;
