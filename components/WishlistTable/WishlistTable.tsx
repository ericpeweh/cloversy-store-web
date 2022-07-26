// Dependencies
import React from "react";
import Link from "next/link";
import Zoom from "@mui/material/Zoom";

// Components
import { IconButton, Stack } from "@mui/material";
import Tooltip from "../Tooltip/Tooltip";
import Table from "../Table/Table";

// Styles
import { TableCell, TableRow } from "../Table/Table.styles";
import {
	WishlistItemImage,
	WishlistItemImageContainer,
	WishlistItemTitle
} from "./WishlistTable.styles";

// Icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const tableHeadData = ["Produk", "Harga", "Ukuran", "Tindakan"];

const wishlistData = [
	{
		title: "Nike AF1 Homesick",
		image: "/images/product.jpg",
		harga: "Rp3.499.000",
		size: "EU 40"
	},
	{
		title: "Ventela Lost Angels",
		image: "/images/1.jpg",
		harga: "Rp2.499.000",
		size: "EU 39"
	},
	{
		title: "Patrobas Ivan (Creation of Adam)",
		image: "/images/2.jpg",
		harga: "Rp799.000",
		size: "EU 37"
	}
];

const WishlistTable = () => {
	return (
		<Table headData={tableHeadData}>
			{wishlistData.map(data => (
				<TableRow key={data.harga}>
					<TableCell component="th" scope="row">
						<Stack direction="row" alignItems="center" gap={3}>
							<Link href="#">
								<WishlistItemImageContainer>
									<WishlistItemImage src={data.image} />
								</WishlistItemImageContainer>
							</Link>
							<Link href="#">
								<WishlistItemTitle>{data.title}</WishlistItemTitle>
							</Link>
						</Stack>
					</TableCell>
					<TableCell align="center">{data.harga}</TableCell>
					<TableCell align="center">{data.size}</TableCell>
					<TableCell align="center">
						<Stack gap={2} direction="row" justifyContent="center">
							<Tooltip title="Tambahkan ke keranjang">
								<IconButton color="primary">
									<ShoppingBagOutlinedIcon />
								</IconButton>
							</Tooltip>
							<Tooltip title="Hapus dari wishlist">
								<IconButton color="error">
									<ClearIcon />
								</IconButton>
							</Tooltip>
						</Stack>
					</TableCell>
				</TableRow>
			))}
		</Table>
	);
};

export default WishlistTable;
