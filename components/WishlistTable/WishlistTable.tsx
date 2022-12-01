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

// Types
import { Product } from "../../interfaces";

// Actions
import { openProductView } from "../../store/slices/globalSlice";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import useDispatch from "../../hooks/useDispatch";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";

// Components
import { Stack } from "@mui/material";
import IconButton from "../IconButton/IconButton";
import Tooltip from "../Tooltip/Tooltip";
import Table from "../Table/Table";
import useWishlist from "../../hooks/useWishlist";

interface WishlistTableProps {
	wishlistData: Product[];
}

const WishlistTable = ({ wishlistData }: WishlistTableProps) => {
	const [productIdToDelete, setProductIdToDelete] = useState(-1);

	const { deleteFromWishlistHandler, isDeleteFromWishlistLoading } = useWishlist();
	const dispatch = useDispatch();
	const [tableHeadData, setTableHeadData] = useState(["Produk", "Harga", "Brand", "Tindakan"]);
	const { wWidth } = useWindowSize();

	useEffect(() => {
		if (wWidth <= 600) {
			setTableHeadData(["Produk", "Harga"]);
		} else {
			setTableHeadData(["Produk", "Harga", "Brand", "Tindakan"]);
		}
	}, [wWidth]);

	const openProductViewHandler = (productData: Product) => {
		dispatch(openProductView(productData));
	};

	const deleteProductFromWishlistHandler = (productId: number) => {
		setProductIdToDelete(productId);
		deleteFromWishlistHandler(productId);
	};

	return (
		<Table headData={tableHeadData}>
			{wishlistData.map(data => (
				<TableRow key={data.id}>
					<TableCell component="th" scope="row">
						<Stack direction="row" alignItems="center" gap={{ xs: 1.5, sm: 2, lg: 3 }}>
							<Link href={`/products/${data.slug}`}>
								<WishlistItemImageContainer sx={{ alignSelf: "flex-start" }}>
									<WishlistItemImage src={(data?.images || [])[0] || "/images/no-image.png"} />
								</WishlistItemImageContainer>
							</Link>
							<Link href={`/products/${data.slug}`}>
								<Stack direction="column" justifyContent="center" gap="0.5rem" sx={{ flex: 1 }}>
									<WishlistItemTitle>{data.title}</WishlistItemTitle>
									{wWidth <= 600 && <WishlistItemDesc>{data.brand}</WishlistItemDesc>}
								</Stack>
							</Link>
						</Stack>
					</TableCell>
					<TableCell align="center">
						<Stack direction="column" justifyContent="center">
							{formatToRupiah(data.price)}
							{wWidth <= 600 && (
								<Stack
									gap={1}
									sx={{ mb: -1, mt: 0.5 }}
									direction="row"
									alignItems="center"
									justifyContent="center"
								>
									<Tooltip title="Quickview produk">
										<IconButton
											color="primary"
											size="small"
											onClick={() => openProductViewHandler(data)}
										>
											<VisibilityIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title="Hapus dari wishlist">
										<IconButton
											color="error"
											size="small"
											onClick={() => deleteProductFromWishlistHandler(data.id)}
											loading={productIdToDelete === data.id && isDeleteFromWishlistLoading}
										>
											<ClearIcon />
										</IconButton>
									</Tooltip>
								</Stack>
							)}
						</Stack>
					</TableCell>
					{wWidth > 600 && <TableCell align="center">{data.brand}</TableCell>}
					{wWidth > 600 && (
						<TableCell align="center">
							<Stack gap={2} direction="row" justifyContent="center">
								<Tooltip title="Quickview produk">
									<IconButton color="primary" onClick={() => openProductViewHandler(data)}>
										<VisibilityIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="Hapus dari wishlist">
									<IconButton
										color="error"
										onClick={() => deleteProductFromWishlistHandler(data.id)}
										loading={productIdToDelete === data.id && isDeleteFromWishlistLoading}
									>
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
