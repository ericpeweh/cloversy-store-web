// Dependencies
import React, { useState } from "react";
import { shallowEqual } from "react-redux";

// Styles
import {
	ContentContainer,
	ImageCarousel,
	ProductDesription,
	ProductDetails,
	ProductPrice,
	ProductTitle,
	ProductViewContainer,
	RatingText,
	MainText
} from "./ProductViewModal.styles";

// Hooks
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useRouter } from "next/router";

// Actions
import { closeProductView } from "../../store/slices/globalSlice";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";

// Utils
import formatToRupiah from "../../utils/formatToRupiah";

// Components
import { Chip, Divider, Grid, Link, Rating, Stack } from "@mui/material";
import CarouselWithThumb from "../CarouselWithThumb/CarouselWithThumb";
import CloseButton from "../CloseButton/CloseButton";
import SizeRadio from "../SizeRadio/SizeRadio";
import QuantityInput from "../QuantityInput/QuantityInput";
import Button from "../Button/Button";

const ProductViewModal = () => {
	const [shoesSize, setShoesSize] = useState(36);
	const [quantity, setQuantity] = useState(1);

	const router = useRouter();
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);
	const { showProductView, productViewData } = useSelector(state => state.global, shallowEqual);

	const closeProductViewHandler = () => {
		dispatch(closeProductView());
	};

	let productDescription = "No description provided.";
	if (productViewData?.description) productDescription = productViewData?.description;
	if (productViewData?.description.length! > 500) {
		productDescription = productViewData?.description.slice(0, 500) + "...";
	}

	return (
		<ProductViewContainer open={showProductView} onClose={closeProductViewHandler}>
			<CloseButton
				onClick={closeProductViewHandler}
				sx={{ top: "1rem", right: "1rem", width: "3rem", height: "3rem" }}
			/>
			<ContentContainer container spacing={3}>
				<Grid item xs={6}>
					<ImageCarousel>
						<CarouselWithThumb
							images={
								productViewData?.images?.length !== 0
									? productViewData?.images!
									: ["/images/no-image.png"]
							}
						/>
					</ImageCarousel>
				</Grid>
				<Grid item xs={6}>
					<ProductDetails>
						<ProductTitle>{productViewData?.title}</ProductTitle>
						<Stack direction="row" alignItems="center" gap="1rem">
							<Rating value={4.5} readOnly precision={0.5} />
							<RatingText>4.8 | 24 Reviews</RatingText>
						</Stack>
						<ProductPrice>{formatToRupiah(productViewData?.price || 0)}</ProductPrice>
						<ProductDesription>{productDescription}</ProductDesription>
						<Link
							onClick={() => router.push(`/products/${productViewData?.slug}`)}
							href={`/products/${productViewData?.slug}`}
							component="button"
							sx={{ width: "max-content", fontSize: "1.6rem", mb: 2, marginLeft: "auto" }}
						>
							More detail{"   "}&rarr;
						</Link>
						<Divider />
						<MainText>Ukuran: EU</MainText>
						<SizeRadio
							value={shoesSize}
							onChange={setShoesSize}
							sizeOptions={productViewData?.sizes ?? []}
						/>
						<Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={5}>
							<MainText>Jumlah: </MainText>
							<QuantityInput value={quantity} size="medium" onChangeQuantity={setQuantity} />
						</Stack>
						<Button sx={{ mb: 1 }}>Tambahkan ke keranjang</Button>
						{isAuth && (
							<Button
								variant="outlined"
								color="primary"
								endIcon={<FavoriteIcon sx={{ color: "primary.light" }} />}
							>
								Tambahkan ke wishlist
							</Button>
						)}
					</ProductDetails>
				</Grid>
			</ContentContainer>
		</ProductViewContainer>
	);
};

export default ProductViewModal;
