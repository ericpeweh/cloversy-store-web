// Dependencies
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Zoom from "@mui/material/Zoom";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";

// Styles
import { TableCell, TableRow } from "../Table/Table.styles";
import {
	CartItemDesc,
	CartItemImage,
	CartItemImageContainer,
	CartItemTitle
} from "./CartTable.styles";

// Icons
import ClearIcon from "@mui/icons-material/Clear";

// Components
import { IconButton, Stack, Tooltip } from "@mui/material";
import Table from "../Table/Table";
import QuantityInput from "../QuantityInput/QuantityInput";

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

interface CartTableProps {
	readOnly?: boolean;
}

const CartTable = ({ readOnly = false }: CartTableProps) => {
	const [tableHeadData, setTableHeadData] = useState([
		"Produk",
		"Ukuran",
		"Kuantitas",
		"Harga",
		"Jumlah",
		"Tindakan"
	]);
	const { wWidth } = useWindowSize();

	useEffect(() => {
		if (wWidth <= 700) {
			setTableHeadData(["Produk", "Jumlah"]);
		} else if (wWidth <= 1050) {
			setTableHeadData(["Produk", "Tindakan", "Jumlah"]);
		} else if (wWidth <= 1350) {
			setTableHeadData(["Produk", "Ukuran", "Kuantitas", "Jumlah", "Tindakan"]);
		} else {
			setTableHeadData(["Produk", "Ukuran", "Kuantitas", "Jumlah", "Harga", "Tindakan"]);
		}
	}, [wWidth]);

	return (
		<Table headData={readOnly ? tableHeadData.slice(0, -1) : tableHeadData}>
			{cartData.map(data => (
				<TableRow key={data.harga}>
					<TableCell component="th" scope="row">
						<Stack direction="row" alignItems="center" gap={{ xs: 1.5, sm: 2, lg: 3 }}>
							<Link href="#">
								<CartItemImageContainer sx={{ alignSelf: "flex-start" }}>
									<CartItemImage src={data.image} />
								</CartItemImageContainer>
							</Link>
							<Link href="#">
								<Stack direction="column" justifyContent="center" gap="0.5rem" sx={{ flex: 1 }}>
									<CartItemTitle>{data.title}</CartItemTitle>
									{wWidth <= 1050 && <CartItemDesc>{data.size}</CartItemDesc>}
									{wWidth <= 700 && (
										<Stack direction="row" gap={1} alignItems="center">
											<QuantityInput value={1} />
											{!readOnly && wWidth <= 1050 && (
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
											)}
										</Stack>
									)}
								</Stack>
							</Link>
						</Stack>
					</TableCell>
					{wWidth > 1050 && <TableCell align="center">{data.size}</TableCell>}
					{wWidth > 700 && (
						<TableCell align="center">
							{readOnly ? (
								"x 1"
							) : (
								<Stack direction="row" gap={2} justifyContent="center" alignItems="center">
									<QuantityInput value={1} />
									{!readOnly && wWidth <= 1050 && (
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
									)}
								</Stack>
							)}
						</TableCell>
					)}
					{wWidth > 1350 && <TableCell align="center">{data.harga}</TableCell>}
					<TableCell align="center">{data.jumlah}</TableCell>
					{wWidth > 1050 && !readOnly && (
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
					)}
				</TableRow>
			))}
		</Table>
	);
};

export default CartTable;
