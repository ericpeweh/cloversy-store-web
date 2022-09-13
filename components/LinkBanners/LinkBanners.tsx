// Dependencies
import React from "react";

// Styles
import { Banner, BannerImage, LinkBannersContainer } from "./LinkBanners.styles";

// Components
import Section from "../Section/Section";
import { Card } from "@mui/material";

const banners = [
	{ name: "Shopee", image: "/images/2.jpg" },
	{ name: "Tokopedia", image: "/images/1.jpg" },
	{ name: "Instagram", image: "/images/3.jpg" }
];

const LinkBanners = () => {
	return (
		<Section>
			<LinkBannersContainer
				container
				rowSpacing={{ xs: 1, sm: 2, xl: 4 }}
				spacing={{ xs: 2, xl: 4 }}
			>
				{banners.map(data => (
					<Banner item xs={12} lg={4} key={data.name}>
						<Card>
							<BannerImage component="img" image={data.image} alt={data.name} />
						</Card>
					</Banner>
				))}
			</LinkBannersContainer>
		</Section>
	);
};

export default LinkBanners;
