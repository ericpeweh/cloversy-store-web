// Dependencies
import React from "react";
import { Pagination, Navigation, EffectFade, SwiperOptions } from "swiper";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button/Button";

// Styles
import {
	BigCarouselContainer,
	CarouselContent,
	CarouselDescription,
	CarouselImage,
	CarouselTag,
	CarouselTitle
} from "./BigCarousel.styles";

const carouselOptions: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: { clickable: true },
	navigation: true,
	modules: [Pagination, Navigation, EffectFade],
	loop: true,
	effect: "fade",
	autoplay: {
		delay: 5000
	},
	grabCursor: true
};

const BigCarousel = () => {
	return (
		<BigCarouselContainer>
			<Swiper {...carouselOptions}>
				<SwiperSlide>
					<CarouselImage imageurl="/images/1.jpg">
						<CarouselContent right>
							<CarouselTag>Special Edition</CarouselTag>
							<CarouselTitle>Nike AF1 Homesick</CarouselTitle>
							<CarouselDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eaque.
							</CarouselDescription>
							<Button size="large" sx={{ marginTop: "3rem" }}>
								Shop Now
							</Button>
						</CarouselContent>
					</CarouselImage>
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/2.jpg">
						<CarouselContent>
							<CarouselTag>Local Brands</CarouselTag>
							<CarouselTitle>Ventela Lost Angel</CarouselTitle>
							<CarouselDescription>Lorem ipsum dolor sit amet.</CarouselDescription>
							<Button size="large" sx={{ marginTop: "3rem" }}>
								Shop Now
							</Button>
						</CarouselContent>
					</CarouselImage>
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/3.jpg">
						<CarouselContent>
							<CarouselTag>Cartoon & Games Series</CarouselTag>
							<CarouselTitle>Mario Bros Series</CarouselTitle>
							<CarouselDescription>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							</CarouselDescription>
							<Button size="large" sx={{ marginTop: "3rem" }}>
								Shop Now
							</Button>
						</CarouselContent>
					</CarouselImage>
				</SwiperSlide>
			</Swiper>
		</BigCarouselContainer>
	);
};

export default BigCarousel;
