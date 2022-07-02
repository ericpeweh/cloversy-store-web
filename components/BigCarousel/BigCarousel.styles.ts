// Dependencies
import { styled } from "@mui/system";

export const BigCarouselContainer = styled("div")({
	width: "100%",
	backgroundColor: "#fff",
	marginTop: "9rem",
	height: "calc(100vh - 9rem)"
});

type CarouselImageType = { imageurl: string };

export const CarouselImage = styled("div")<CarouselImageType>(props => ({
	height: "calc(100vh - 9rem)",
	backgroundImage: `url(${props.imageurl})`,
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",
	backgroundSize: "cover",
	backgroundPosition: "center",
	flexDirection: "column"
}));

type CarouselContentType = {
	right?: Boolean;
};

export const CarouselContent = styled("div")<CarouselContentType>(props => ({
	marginLeft: props.right ? "auto" : "10vw",
	marginRight: props.right ? "10vw" : "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: props.right ? "flex-end" : "flex-start"
}));

export const CarouselTitle = styled("h2")({
	fontSize: "6rem",
	color: "#fff",
	letterSpacing: "2px",
	fontWeight: "normal",
	fontFamily: "var(--font-secondary)"
});

export const CarouselTag = styled("h3")(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	color: "#fff",
	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",
	textTransform: "uppercase",
	fontSize: "1.3rem",
	fontWeight: 600,
	letterSpacing: "1px",
	width: "fit-content",
	marginBottom: "2rem",
	fontFamily: "var(--font-secondary)"
}));

export const CarouselDescription = styled("p")({
	color: "#fff",
	fontSize: "1.5rem"
});
