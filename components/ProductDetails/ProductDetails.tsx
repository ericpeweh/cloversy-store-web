// Dependencies
import React, { useState } from "react";

// Styles
import {
	ProductDetailsContainer,
	ImageCarouselContainer,
	ProductInfoContainer,
	GridContainer,
	ProductTitle,
	RatingText,
	ProductPrice,
	ProductDesription,
	MainText,
	ReviewsPagination,
	ProductsRecommendation
} from "./ProductDetails.styles";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

// Components
import { Button, Divider, Rating, Stack, Grid, IconButton } from "@mui/material";
import CarouselWithThumb from "../CarouselWithThumb/CarouselWithThumb";
import SizeRadio from "../SizeRadio/SizeRadio";
import QuantityInput from "../QuantityInput/QuantityInput";
import TabsNavigation from "../TabsNavigation/TabsNavigation";
import TabsPanel from "../TabsPanel/TabsPanel";
import ReviewItem from "../ReviewItem/ReviewItem";
import PageBreadcrumbs from "../PageBreadcrumbs/PageBreadcrumbs";
import ProductCard from "../ProductCard/ProductCard";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const links = [
	{ label: "Products", url: "#" },
	{ label: "Nike AF1", url: "#" },
	{ label: "Nike Air Force 1 Homesick", url: "current" }
];

const ProductDetails = () => {
	const [shoesSize, setShoesSize] = useState(36);

	return (
		<ProductDetailsContainer>
			<ProductViewModal />
			<PageBreadcrumbs links={links} />
			<GridContainer container spacing={5}>
				<ImageCarouselContainer item xs={6}>
					<CarouselWithThumb size="medium" />
				</ImageCarouselContainer>
				<ProductInfoContainer item xs={6}>
					<ProductTitle>Nike AF1 Homesick</ProductTitle>
					<Stack direction="row" alignItems="center" gap="1rem">
						<Rating value={4.5} readOnly precision={0.5} />
						<RatingText>4.8 | 24 Reviews</RatingText>
					</Stack>
					<ProductPrice>Rp3.899.000</ProductPrice>
					<ProductDesription>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur officia odio
						molestiae consectetur nemo maiores commodi, eveniet mollitia? Obcaecati delectus libero
						ratione dolorem dignissimos, ab officiis officia similique omnis harum animi in,
						praesentium, quo nisi culpa odit molestias dolor suscipit alias illum ut sed iusto
						quidem est. Officiis eligendi illo doloremque quibusdam praesentium incidunt
					</ProductDesription>
					<Divider />
					<MainText>Ukuran: EU</MainText>
					<SizeRadio value={shoesSize} onChange={setShoesSize} columns={6} />
					<Divider sx={{ mt: 2 }} />
					<Stack direction="row" alignItems="center" mt={3} mb={5} gap={2}>
						<MainText>Jumlah barang: </MainText>
						<QuantityInput value={5} size="medium" />
					</Stack>
					<Button variant="contained" fullWidth size="large">
						Tambahkan ke keranjang
					</Button>
					<Button
						variant="outlined"
						sx={{ mt: 2 }}
						fullWidth
						color="primary"
						endIcon={<FavoriteIcon sx={{ color: "primary.light" }} />}
						size="large"
					>
						Tambahkan ke wishlist
					</Button>
					<Stack direction="row" alignItems="center" mt={2} gap={2}>
						<MainText>Share: </MainText>
						<Stack direction="row">
							<IconButton>
								<FacebookIcon />
							</IconButton>
							<IconButton>
								<TwitterIcon />
							</IconButton>
							<IconButton>
								<WhatsAppIcon />
							</IconButton>
							<IconButton>
								<InstagramIcon />
							</IconButton>
							<IconButton>
								<TelegramIcon />
							</IconButton>
						</Stack>
					</Stack>
				</ProductInfoContainer>
			</GridContainer>
			<GridContainer container spacing={5} rowSpacing={1} pt={5}>
				<Grid item xs={12}>
					<TabsNavigation>
						<TabsPanel label="Deskripsi">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis, itaque nobis
								accusamus perspiciatis exercitationem, soluta quisquam eum sed hic neque excepturi,
								nam iusto tenetur quibusdam necessitatibus quia. Nesciunt dolore voluptate eligendi
								sed blanditiis corrupti? Ratione autem et nihil eveniet explicabo ad culpa
								perferendis architecto. Ipsam ducimus amet optio culpa!
							</p>
							<br />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eveniet libero
								labore corporis tempora consequatur iure amet dignissimos accusamus provident ad ut
								possimus nihil sapiente perspiciatis quis commodi vitae qui. Ipsa quia quisquam
								beatae excepturi. Fuga earum nihil voluptatibus modi perspiciatis omnis temporibus,
								doloremque aliquid hic illo laboriosam, possimus quibusdam unde blanditiis
								repellendus vel dolor ducimus molestiae amet ex optio ad fugiat obcaecati.
								Accusantium porro itaque hic! Harum voluptas hic doloremque neque aspernatur fugit,
								atque modi aut sit soluta saepe tempora assumenda eius recusandae corporis?
								Molestiae perferendis nobis debitis dolore cupiditate! Ducimus aspernatur quidem
								fuga cum porro! Expedita, ad veritatis!
							</p>
						</TabsPanel>
						<TabsPanel label="Ulasan (5)">
							<Grid container spacing={4}>
								<ReviewItem />
								<ReviewItem />
								<ReviewItem />
							</Grid>
							<ReviewsPagination count={5} shape="rounded" color="primary" />
						</TabsPanel>
					</TabsNavigation>
				</Grid>
			</GridContainer>
			<ProductsRecommendation>
				<MainText>Produk lainnya</MainText>
				<ProductsContainer spacing={2} columns={4}>
					<ProductCard size="small" />
					<ProductCard size="small" />
					<ProductCard size="small" />
					<ProductCard size="small" />
				</ProductsContainer>
			</ProductsRecommendation>
		</ProductDetailsContainer>
	);
};

export default ProductDetails;
