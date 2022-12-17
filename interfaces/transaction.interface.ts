// Types
import { Address } from "./account.interface";

export type PaymentStatus =
	| "authorize"
	| "capture"
	| "settlement"
	| "deny"
	| "pending"
	| "cancel"
	| "refund"
	| "partial_refund"
	| "chargeback"
	| "partial_chargeback"
	| "expire"
	| "failure";

export type PaymentMethod = "gopay" | "bni" | "mandiri" | "permata" | "bri";

export type TransactionStatus = "pending" | "process" | "sent" | "success" | "cancel";

export type GopayActionsObject = [
	{
		name: "generate-qr-code";
		method: "GET";
		url: string;
	},
	{
		name: "deeplink-redirect";
		method: "GET";
		url: string;
	},
	{
		name: "get-status";
		method: "GET";
		url: string;
	},
	{
		name: "cancel";
		method: "POST";
		url: string;
		fields: string[];
	}
];

export interface TransactionTimelineItem {
	timeline_date: string;
	description: string;
}

export interface Transaction {
	id: string;
	user_id: string;
	order_status: TransactionStatus;
	order_status_modified: string;
	order_note: string;
	gift_note: string;
	voucher_code: string;
	discount_total: string;
	subtotal: string;
	total: string;
	created_at: string;
}

export interface TransactionItem {
	product_id: number;
	quantity: number;
	price: string;
	product_size: number;
	title: string;
	slug: string;
	images: string[];
}

export interface TransactionShipping {
	transaction_id: string;
	shipping_cost: string;
	shipping_courier: string;
	shipping_service: string;
	shipping_tracking_code: string;
	shipping_etd: string;
}

export interface ClientPaymentDetailsItem {
	payment_method: PaymentMethod;
	payment_status: PaymentStatus;
	expire_time: string;
	bill_key?: string;
	biller_code?: string;
	va_number?: string;
	actions?: GopayActionsObject;
}

export interface ClientTransactionDetails extends Transaction {
	shipping_details: Address & TransactionShipping;
	item_details: TransactionItem[];
	payment_details: ClientPaymentDetailsItem;
	timeline: TransactionTimelineItem[];
}

export interface CheckoutBody {
	address_id: string;
	voucher_code: string;
	order_note?: string;
	gift_note?: string;
	shipping_courier: string;
	payment_method: string;
}
