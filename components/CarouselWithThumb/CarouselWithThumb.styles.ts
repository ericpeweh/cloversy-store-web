// Dependencies
import { styled } from "@mui/system";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled("div")({
	height: "100%",
	width: "100%"
});

type ImageType = { imageurl: string };

export const MainCarousel = styled(Swiper)({
	marginBottom: "2rem",
	borderRadius: "0.5rem",
	overflow: "hidden"
}) as typeof Swiper;

export const ThumbsCarousel = styled(Swiper)({
	position: "relative"
}) as typeof Swiper;

const ImageBase = styled("div")({
	backgroundSize: "cover",
	backgroundPosition: "center"
});

export const CarouselImage = styled(ImageBase, {
	shouldForwardProp: prop => prop !== "imageurl"
})<ImageType>(props => ({
	height: "35rem",
	backgroundImage: `url(${props.imageurl})`
}));

export const ThumbImage = styled(ImageBase, {
	shouldForwardProp: prop => prop !== "imageurl"
})<ImageType>(props => ({
	height: "8rem",
	backgroundImage: `url(${props.imageurl})`,
	cursor: "pointer",
	borderRadius: "0.5rem"
}));
