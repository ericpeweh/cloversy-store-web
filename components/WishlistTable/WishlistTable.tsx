// Dependencies
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Styles
import { TableCell, TableRow } from "../Table/Table.styles";
import {
	WishlistItemImage,
	WishlistItemImageContainer,
	WishlistItemTitle,
	WishlistItemDesc
} from "./WishlistTable.styles";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";

// Icons
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ClearIcon from "@mui/icons-material/Clear";

// Components
import { IconButton, Stack } from "@mui/material";
import Tooltip from "../Tooltip/Tooltip";
import Table from "../Table/Table";

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
	const [tableHeadData, setTableHeadData] = useState(["Produk", "Harga", "Ukuran", "Tindakan"]);
	const { wWidth } = useWindowSize();

	useEffect(() => {
		if (wWidth <= 600) {
			setTableHeadData(["Produk", "Harga"]);
		} else {
			setTableHeadData(["Produk", "Harga", "Ukuran", "Tindakan"]);
		}
	}, [wWidth]);

	return (
		<Table headData={tableHeadData}>
			{wishlistData.map(data => (
				<TableRow key={data.harga}>
					<TableCell component="th" scope="row">
						<Stack direction="row" alignItems="center" gap={{ xs: 1.5, sm: 2, lg: 3 }}>
							<Link href="#">
								<WishlistItemImageContainer sx={{ alignSelf: "flex-start" }}>
									<WishlistItemImage src={data.image} />
								</WishlistItemImageContainer>
							</Link>
							<Link href="#">
								<Stack direction="column" justifyContent="center" gap="0.5rem" sx={{ flex: 1 }}>
									<WishlistItemTitle>{data.title}</WishlistItemTitle>
									{wWidth <= 600 && <WishlistItemDesc>{data.size}</WishlistItemDesc>}
								</Stack>
							</Link>
						</Stack>
					</TableCell>
					<TableCell align="center">
						<Stack direction="column" justifyContent="center">
							{data.harga}
							{wWidth <= 600 && (
								<Stack
									gap={1}
									sx={{ mb: -1, mt: 0.5 }}
									direction="row"
									alignItems="center"
									justifyContent="center"
								>
									<Tooltip title="Tambahkan ke keranjang">
										<IconButton color="primary" size="small">
											<ShoppingBagOutlinedIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title="Hapus dari wishlist">
										<IconButton color="error" size="small">
											<ClearIcon />
										</IconButton>
									</Tooltip>
								</Stack>
							)}
						</Stack>
					</TableCell>
					{wWidth > 600 && <TableCell align="center">{data.size}</TableCell>}
					{wWidth > 600 && (
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
					)}
				</TableRow>
			))}
		</Table>
	);
};

export default WishlistTable;
