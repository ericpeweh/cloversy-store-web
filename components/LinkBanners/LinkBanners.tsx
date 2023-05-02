// Dependencies
import React from "react";

// Styles
import { Banner, BannerImage, LinkBannersContainer } from "./LinkBanners.styles";

// Components
import Section from "../Section/Section";
import { Card, Grid, Link as MUILink } from "@mui/material";
import Link from "next/link";

const banners = [
	{ name: "Shopee", image: "/images/banner-shopee.webp", link: "https://shopee.co.id/cloversy.id" },
	{
		name: "WhatsApp",
		image: "/images/banner-wa.webp",
		link: "https://api.whatsapp.com/send?phone=6287818001061&text=Halo,%20Saya%20mau%20Konsultasi%20/%20Design%20|%20CLOVERSY"
	},
	{ name: "Instagram", image: "/images/banner-ig.webp", link: "https://instagram.com/cloversy.id" }
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
					<Grid item xs={12} lg={4} key={data.name} sx={{ pointerEvents: "none" }}>
						<Link href={data.link} passHref>
							<MUILink target="_blank" sx={{ pointerEvents: "auto" }}>
								<Banner>
									<Card>
										<BannerImage component="img" image={data.image} alt={data.name} />
									</Card>
								</Banner>
							</MUILink>
						</Link>
					</Grid>
				))}
			</LinkBannersContainer>
		</Section>
	);
};

export default LinkBanners;
