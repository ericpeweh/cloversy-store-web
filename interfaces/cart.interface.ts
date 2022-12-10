// Types
import { Product } from "./product.interface";

export interface CartItem {
	id: string | number;
	product_id: number;
	quantity: number;
	size: string;
}

export type CartItemDetails = CartItem & Omit<Product, "id">;
