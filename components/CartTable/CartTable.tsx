// Dependencies
import React from "react";
import Link from "next/link";
import Zoom from "@mui/material/Zoom";

// Components
import { IconButton, Stack, Tooltip } from "@mui/material";
import Table from "../Table/Table";
import QuantityInput from "../QuantityInput/QuantityInput";

// Styles
import { TableCell, TableRow } from "../Table/Table.styles";
import { CartItemImage, CartItemImageContainer, CartItemTitle } from "./CartTable.styles";

// Icons
import ClearIcon from "@mui/icons-material/Clear";

const tableHeadData = ["Produk", "Ukuran", "Kuantitas", "Harga", "Jumlah", "Tindakan"];

const cartData = [
	{
		title: "Nike AF1 Homesick",
		size: "EU 40",
		image: "/images/product.jpg",
		harga: "Rp3.499.000",
		jumlah: "Rp6.899.000"
	},
	{
		title: "Ventela Lost Angels",
		size: "EU 39",
		image: "/images/1.jpg",
		harga: "Rp2.499.000",
		jumlah: "Rp4.899.000"
	},
	{
		title: "Patrobas Ivan (Creation of Adam)",
		size: "EU 37",
		image: "/images/2.jpg",
		harga: "Rp799.000",
		jumlah: "Rp1.899.000"
	}
];

const CartTable = () => {
	return (
		<Table headData={tableHeadData}>
			{cartData.map(data => (
				<TableRow key={data.harga}>
					<TableCell component="th" scope="row">
						<Stack direction="row" alignItems="center" gap={3}>
							<Link href="#">
								<CartItemImageContainer>
									<CartItemImage src={data.image} />
								</CartItemImageContainer>
							</Link>
							<Link href="#">
								<CartItemTitle>{data.title}</CartItemTitle>
							</Link>
						</Stack>
					</TableCell>
					<TableCell align="center">{data.size}</TableCell>
					<TableCell align="center">
						<QuantityInput value={1} />
					</TableCell>
					<TableCell align="center">{data.harga}</TableCell>
					<TableCell align="center">{data.jumlah}</TableCell>
					<TableCell align="center">
						<Tooltip
							title="Hapus dari Cart"
							arrow
							sx={{ fontSize: "1.6rem" }}
							TransitionComponent={Zoom}
						>
							<IconButton color="error">
								<ClearIcon />
							</IconButton>
						</Tooltip>
					</TableCell>
				</TableRow>
			))}
		</Table>
	);
};

export default CartTable;
