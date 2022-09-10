// Dependencies
import { IconButton, Stack } from "@mui/material";
import React from "react";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";

// Actions
import { openProductView } from "../../store/slices/globalSlice";

// Styles
import {
	ProductListItemContainer,
	ProductImage,
	ProductPrice,
	ProductTitle,
	ProductContent,
	ProductDesription,
	ProductActionsContainer,
	ProductImageContainer
} from "./ProductListItem.styles";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Components
import Button from "../Button/Button";
import { QuickViewButton } from "../ProductCard/ProductCard.styles";
import Tooltip from "../Tooltip/Tooltip";

const ProductListItem = () => {
	const showProductView = useSelector(state => state.global.showProductView);
	const dispatch = useDispatch();

	const openProductViewHandler = () => {
		dispatch(openProductView());
	};

	return (
		<ProductListItemContainer>
			<ProductImageContainer>
				{!showProductView && (
					<QuickViewButton onClick={openProductViewHandler}>Quick view</QuickViewButton>
				)}
				<ProductImage imageUrl="/images/product.jpg" />
			</ProductImageContainer>
			<ProductContent>
				<Stack direction="row" justifyContent="space-between">
					<ProductTitle>Nike AF1 Homesick - Special Edition</ProductTitle>
					<Tooltip title="Tambahkan ke wishlist">
						<IconButton>
							<FavoriteBorderOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Stack>
				<ProductPrice>Rp3.990.000</ProductPrice>
				<ProductDesription>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorum veritatis dolore
					rem odit nemo ea, ut fugiat porro nostrum corrupti maxime repellendus rerum...
				</ProductDesription>
				<ProductActionsContainer>
					<Button color="primary" endIcon={<ChevronRightIcon />} size="small">
						Lihat detail produk
					</Button>
				</ProductActionsContainer>
			</ProductContent>
		</ProductListItemContainer>
	);
};

export default ProductListItem;
