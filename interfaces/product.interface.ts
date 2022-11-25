// Types

import { ResponseWithPagination } from "./common.interface";

export interface Product {
	id: number;
	title: string;
	sku: string;
	price: number;
	status: "active" | "disabled";
	category_id: number;
	category: string;
	brand_id: number;
	brand: string;
	description: string;
	slug: string;
	created_at: string;
	modified_at: string;
	tags: string[];
	sizes: string[];
	image: string;
	images: string[];
	recommendations: Product[];
}

export interface GetProductsQuery {
	page: number | string;
	brandFilter: number;
	q: string;
	sortBy: string;
	priceFilter: [number, number];
}

export type ProductsSortValues = "id" | "popularity" | "rating" | "low-to-high" | "high-to-low";
