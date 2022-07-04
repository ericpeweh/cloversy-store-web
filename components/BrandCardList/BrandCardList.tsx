// Dependencies
import React from "react";

// Components
import Button from "../Button/Button";
import Section from "../Section/Section";

// Styles
import { BrandCard, BrandCards, CardContent, CardImage, CardTitle } from "./BrandCardList.styles";

const brandCardData = [
	{ label: "Custom Nike", image: "/images/1.jpg" },
	{ label: "Custom Vans", image: "/images/2.jpg" },
	{ label: "Custom Local Brands", image: "/images/3.jpg" }
];

const BrandCardList = () => {
	return (
		<Section>
			<BrandCards container spacing={4}>
				{brandCardData.map(data => (
					<BrandCard item xs={4} key={data.label}>
						<CardContent>
							<CardTitle>{data.label}</CardTitle>
							<CardImage src={data.image} layout="fill" alt={data.label} />
							<Button sx={{ marginTop: "2rem" }}>Shop now</Button>
						</CardContent>
					</BrandCard>
				))}
			</BrandCards>
		</Section>
	);
};

export default BrandCardList;
