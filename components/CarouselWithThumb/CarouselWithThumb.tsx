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

const images = ["/images/product.jpg", "/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

interface CarouselWithThumbProps {
	size?: "small" | "medium" | "large";
}

const CarouselWithThumb = ({ size = "small" }: CarouselWithThumbProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

	return (
		<CarouselContainer>
			<MainCarousel
				{...carouselOptions}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
			>
				{images.map(image => (
					<SwiperSlide key={image}>
						<CarouselImage imageurl={image} size={size} />
					</SwiperSlide>
				))}
			</MainCarousel>
			<ThumbsCarousel {...thumbsOptions} onSwiper={setThumbsSwiper}>
				{images.map(image => (
					<SwiperSlide key={image}>
						<ThumbImage imageurl={image} size={size} />
					</SwiperSlide>
				))}
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
