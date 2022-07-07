// Dependencies
import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { FreeMode, Navigation, SwiperOptions, Thumbs } from "swiper";

// Styles
import {
	CarouselContainer,
	CarouselImage,
	MainCarousel,
	ThumbImage,
	ThumbsCarousel
} from "./CarouselWithThumb.styles";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselNextButton, CarouselPrevButton } from "../CarouselButton/CarouselButton";

const carouselOptions: SwiperOptions = {
	modules: [Navigation, FreeMode, Thumbs],
	spaceBetween: 0,
	navigation: false
};

const thumbsOptions: SwiperOptions = {
	modules: [Navigation, FreeMode, Thumbs],
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	navigation: {
		prevEl: ".custom_prev",
		nextEl: ".custom_next"
	}
};

const CarouselWithThumb = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

	return (
		<CarouselContainer>
			<MainCarousel
				{...carouselOptions}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
			>
				<SwiperSlide>
					<CarouselImage imageurl="/images/product.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/2.jpg" />
				</SwiperSlide>
			</MainCarousel>
			<ThumbsCarousel {...thumbsOptions} onSwiper={setThumbsSwiper}>
				<SwiperSlide>
					<ThumbImage imageurl="/images/product.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<ThumbImage imageurl="/images/1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<ThumbImage imageurl="/images/2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<ThumbImage imageurl="/images/3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<ThumbImage imageurl="/images/2.jpg" />
				</SwiperSlide>
				<CarouselPrevButton
					className="custom_prev"
					sx={{
						left: "1rem"
					}}
				/>
				<CarouselNextButton
					className="custom_next"
					sx={{
						right: "1rem"
					}}
				/>
			</ThumbsCarousel>
		</CarouselContainer>
	);
};

export default CarouselWithThumb;
