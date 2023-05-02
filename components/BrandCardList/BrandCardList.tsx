// Dependencies
import React from "react";

// Components
import Button from "../Button/Button";
import Section from "../Section/Section";

// Actions
import { changeBrandFilter } from "../../store/slices/productsSlice";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import { useRouter } from "next/router";

// Styles
import { BrandCard, BrandCards, CardContent, CardImage, CardTitle } from "./BrandCardList.styles";

const brandCardData = [
	{ label: "Custom Nike", image: "/images/nikeaf1.webp", brandId: 1 },
	{ label: "Custom Jordan", image: "/images/jordan.webp", brandId: 2 },
	{ label: "Custom Vans", image: "/images/vans.webp", brandId: 6 }
];

const BrandCardList = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const onBrandButtonClickHandler = (brandId: number) => {
		dispatch(changeBrandFilter(brandId));
		router.push(`/products`);
	};

	return (
		<Section>
			<BrandCards container spacing={{ xl: 4, lg: 3, xs: 2 }}>
				{brandCardData.map(data => (
					<BrandCard item xs={12} md={4} key={data.label}>
						<CardContent>
							<CardTitle>{data.label}</CardTitle>
							<CardImage src={data.image} layout="fill" alt={data.label} />
							<Button
								sx={{ marginTop: "2rem" }}
								onClick={() => onBrandButtonClickHandler(data.brandId)}
							>
								Lihat produk
							</Button>
						</CardContent>
					</BrandCard>
				))}
			</BrandCards>
		</Section>
	);
};

export default BrandCardList;
