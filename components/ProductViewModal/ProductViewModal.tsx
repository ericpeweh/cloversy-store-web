// Dependencies
import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import NextLink from "next/link";

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

// Actions
import { closeProductView } from "../../store/slices/homeSlice";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";

// Components
import { Chip, Divider, Grid, Link, Rating, Stack } from "@mui/material";
import CarouselWithThumb from "../CarouselWithThumb/CarouselWithThumb";
import CloseButton from "../CloseButton/CloseButton";
import SizeRadio from "../SizeRadio/SizeRadio";
import QuantityInput from "../QuantityInput/QuantityInput";
import Button from "../Button/Button";

const ProductViewModal = () => {
	const [shoesSize, setShoesSize] = useState(36);

	const dispatch = useDispatch();
	const { showProductView } = useSelector(state => state.home, shallowEqual);

	const closeProductViewHandler = () => {
		dispatch(closeProductView());
	};

	return (
		<ProductViewContainer open={showProductView} onClose={closeProductViewHandler}>
			<CloseButton
				onClick={closeProductViewHandler}
				sx={{ top: "1rem", right: "1rem", width: "3rem", height: "3rem" }}
			/>
			<ContentContainer container spacing={3}>
				<Grid item xs={6}>
					<ImageCarousel>
						<CarouselWithThumb />
					</ImageCarousel>
				</Grid>
				<Grid item xs={6}>
					<ProductDetails>
						<ProductTitle>Nike AF1 Homesick Special E</ProductTitle>
						<Stack direction="row" alignItems="center" gap="1rem">
							<Rating value={4.5} readOnly precision={0.5} />
							<RatingText>4.8 | 24 Reviews</RatingText>
						</Stack>
						<ProductPrice>Rp3.899.000</ProductPrice>
						<ProductDesription>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur officia odio
							molestiae consectetur nemo maiores commodi, eveniet mollitia? Obcaecati delectus
							libero ratione dolorem dignissimos, ab officiis officia similique omnis harum animi
							in, praesentium, quo nisi culpa odit molestias dolor suscipit alias illum ut sed iusto
							quidem est. Officiis eligendi illo doloremque quibusdam praesentium incidunt
						</ProductDesription>
						<Link
							href="#"
							component="button"
							sx={{ width: "max-content", fontSize: "1.6rem", mb: 2, marginLeft: "auto" }}
						>
							More detail{"   "}&rarr;
						</Link>
						<Divider />
						<MainText>Ukuran: EU</MainText>
						<SizeRadio value={shoesSize} onChange={setShoesSize} />
						<Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={5}>
							<MainText>Jumlah: </MainText>
							<QuantityInput value={5} size="medium" />
						</Stack>
						<Button
							variant="outlined"
							sx={{ mb: 1 }}
							color="primary"
							endIcon={<FavoriteIcon sx={{ color: "primary.light" }} />}
						>
							Tambahkan ke wishlist
						</Button>
						<Button>Tambahkan ke keranjang</Button>
					</ProductDetails>
				</Grid>
			</ContentContainer>
		</ProductViewContainer>
	);
};

export default ProductViewModal;
