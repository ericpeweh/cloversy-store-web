// Dependencies
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

// Styles
import {
	AboutUsContainer,
	AboutUsHero,
	Content,
	ContentContainer,
	ContentDescription,
	ContentImage,
	ContentItem,
	ContentTag,
	ContentTitle,
	HeroDescription,
	HeroTitle,
	SignatureContainer
} from "./AboutUs.styles";

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<AboutUsHero>
				<HeroTitle>Be Special!</HeroTitle>
				<HeroDescription>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente dolores maxime
					nihil assumenda nesciunt et iure corrupti nostrum repellat aut sunt mollitia aperiam, rem
					odio. Voluptates perspiciatis quo eos.
				</HeroDescription>
			</AboutUsHero>
			<ContentContainer container spacing={6}>
				<ContentItem item xs={6}>
					<ContentImage>
						<Image
							src="/images/2.jpg"
							alt="content image"
							layout="responsive"
							width={2560}
							height={1440}
						/>
					</ContentImage>
				</ContentItem>
				<ContentItem item xs={6}>
					<Content textLeft>
						<ContentTag>Informasi</ContentTag>
						<ContentTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit</ContentTitle>
						<ContentDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, perspiciatis
							veritatis! Culpa tempora provident voluptatem iste necessitatibus quisquam odio ad
							quis itaque deleniti nesciunt iure explicabo labore libero similique, doloribus sint
							magnam qui! Ipsum, blanditiis assumenda quasi reiciendis quo saepe.
						</ContentDescription>
					</Content>
				</ContentItem>
			</ContentContainer>
			<ContentContainer container spacing={6}>
				<ContentItem item xs={6}>
					<Content textLeft>
						<ContentTag>Hello world</ContentTag>
						<ContentTitle>Dolor sit amet consectetur adipisicing elit</ContentTitle>
						<ContentDescription>
							Sit, amet consectetur adipisicing elit. Voluptate, perspiciatis veritatis! Culpa
							tempora provident voluptatem iste necessitatibus quisquam odio ad quis itaque deleniti
							nesciunt iure explicabo labore libero similique, doloribus sint magnam qui! Ipsum,
							blanditiis assumenda quasi reiciendis quo saepe. Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Fuga, perspiciatis.
						</ContentDescription>
					</Content>
				</ContentItem>
				<ContentItem item xs={6}>
					<ContentImage>
						<Image
							src="/images/3.jpg"
							alt="content image"
							layout="responsive"
							width={2560}
							height={1440}
						/>
					</ContentImage>
				</ContentItem>
			</ContentContainer>
			<ContentContainer>
				<Divider flexItem>
					<ContentTitle>Cerita Kami</ContentTitle>
				</Divider>
				<ContentItem item xs={12} sx={{ mt: 7, mb: 4 }}>
					<ContentDescription align="center">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore aliquid quod nemo
						iure earum blanditiis obcaecati ab alias, laudantium aliquam officia id? Cumque
						repudiandae repellat sunt corrupti aperiam labore, nemo expedita! Reiciendis voluptas
						culpa totam odio veritatis. Vitae, sint!
					</ContentDescription>
				</ContentItem>
			</ContentContainer>
			<SignatureContainer>
				<Image
					src="/images/signature.png"
					alt="cloversy team signature"
					layout="responsive"
					width={500}
					height={150}
				/>
			</SignatureContainer>
		</AboutUsContainer>
	);
};

export default AboutUs;
