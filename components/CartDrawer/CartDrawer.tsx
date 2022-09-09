// Dependencies
import React from "react";
import Link from "next/link";

// Styles
import {
	CartActionButtons,
	CartDrawerContainer,
	CartItem,
	CartItemContent,
	CartItemImage,
	CartItemInfo,
	CartItemPrice,
	CartLists,
	HideCartButton,
	Badge
} from "./CartDrawer.styles";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Components
import { ListItemAvatar, Divider, Typography, Stack } from "@mui/material";
import Button from "../Button/Button";
import QuantityInput from "../QuantityInput/QuantityInput";

interface CartDrawerProps {
	open: boolean;
	onClose: () => void;
}

const cartItems = [
	{
		name: "Nike AF1 Homesick",
		sizeType: "EU",
		size: "43",
		sale: "50% OFF",
		qty: 3,
		price: "3.599.000"
	},
	{
		name: "Vans Lost Angel",
		sizeType: "EU",
		size: "40",
		qty: 12,
		price: "12.399.000"
	},
	{
		name: "Ventela Creation of Adam",
		sizeType: "EU",
		size: "39",
		sale: "10% OFF",
		qty: 5,
		price: "24.399.000"
	}
];

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
	return (
		<CartDrawerContainer open={open} onClose={onClose} anchor="right">
			<HideCartButton variant="text" endIcon={<ChevronRightIcon />} onClick={onClose}>
				Continue Shopping
			</HideCartButton>
			<CartLists>
				{[...cartItems, ...cartItems].map((item, i) => (
					<React.Fragment key={item.name + i}>
						<CartItem>
							<ListItemAvatar sx={{ marginRight: "2rem" }}>
								<Link href="#">
									<CartItemImage alt={item.name} src="/images/product.jpg" variant="rounded" />
								</Link>
								{item.sale && <Badge>{item.sale}</Badge>}
							</ListItemAvatar>
							<CartItemContent
								primary={<Link href="#">{item.name}</Link>}
								secondary={
									<>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											Size:{"  "}
										</Typography>
										{`${item.sizeType} | ${item.size}`}
										<CartItemInfo>
											<QuantityInput value={item.qty} />
											<CartItemPrice>Rp{item.price}</CartItemPrice>
										</CartItemInfo>
									</>
								}
							/>
						</CartItem>
						<Divider variant="fullWidth" component="li" sx={{ mb: "2rem" }} />
					</React.Fragment>
				))}
			</CartLists>
			<CartActionButtons>
				<Stack direction="row" justifyContent="space-between" mb="1rem">
					<Typography fontWeight={500} sx={{ fontSize: { xs: "1.5rem", sm: "1.6rem" } }}>
						Subtotal:
					</Typography>
					<Typography sx={{ fontWeight: 500, fontSize: { xs: "1.5rem", sm: "1.6rem" } }}>
						Rp35.880.000
					</Typography>
				</Stack>
				<Button variant="outlined">Lihat Keranjang</Button>
				<Button color="primary">Checkout</Button>
			</CartActionButtons>
		</CartDrawerContainer>
	);
};

export default CartDrawer;
