// Dependencies
import React from "react";
import { Pagination, Navigation, Autoplay, EffectFade, SwiperOptions } from "swiper";

// Hooks
import { useRouter } from "next/router";

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
	modules: [Pagination, Navigation, Autoplay, EffectFade],
	loop: true,
	effect: "fade",
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	grabCursor: true
};

const BigCarousel = () => {
	const router = useRouter();

	return (
		<BigCarouselContainer>
			<Swiper {...carouselOptions}>
				<SwiperSlide>
					<CarouselImage imageurl="/images/carousel-1.webp">
						<CarouselContent alignRight>
							<CarouselTag>Special Edition</CarouselTag>
							<CarouselTitle>Nike AF1 Homesick</CarouselTitle>
							<CarouselDescription alignRight>
								&apos;Homesick&apos;: Rindu, kangen terhadap kampung halaman / rumah.
							</CarouselDescription>
							<Button
								size="large"
								sx={{ marginTop: "3rem" }}
								onClick={() => router.push(`/products/nike-af1-low-homesick-special-edition`)}
							>
								Shop Now
							</Button>
						</CarouselContent>
					</CarouselImage>
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/carousel-2.webp">
						<CarouselContent>
							<CarouselTag>Cartoon & Games Series</CarouselTag>
							<CarouselTitle>Super Mario Series</CarouselTitle>
							<CarouselDescription>
								5 jenis pilihan design bertema Mario Bros. Menggunakan sepatu lokal Ventela
							</CarouselDescription>
							<Button
								size="large"
								sx={{ marginTop: "3rem" }}
								onClick={() => router.push(`/products/ventela-basic-super-mario-bros-series`)}
							>
								Shop Now
							</Button>
						</CarouselContent>
					</CarouselImage>
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImage imageurl="/images/carousel-3.webp">
						<CarouselContent>
							<CarouselTag>Nature & Nusantara</CarouselTag>
							<CarouselTitle>Lukisan Alam</CarouselTitle>
							<CarouselDescription>
								Lukisan alam, tentang Indonesia. Dengan berbagai makna tersirat. Bangga menjadi
								Indonesia!
							</CarouselDescription>
							<Button
								size="large"
								sx={{ marginTop: "3rem" }}
								onClick={() => router.push(`/products/ventela-basic-lukisan-alam`)}
							>
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
