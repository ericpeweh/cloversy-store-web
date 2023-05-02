// Dependencies
import { styled } from "@mui/system";

export const BigCarouselContainer = styled("section")(({ theme }) => ({
	width: "100%",
	backgroundColor: "#fff",
	height: "calc(100vh - 9rem)",
	[theme.breakpoints.down("md")]: {
		height: "calc(100vh - 8rem)"
	},
	[theme.breakpoints.down("sm")]: {
		height: "calc(100vh - 7rem)"
	}
}));

type CarouselImageType = { imageurl: string };

export const CarouselImage = styled("div", {
	shouldForwardProp: prop => prop !== "imageurl"
})<CarouselImageType>(({ imageurl, theme }) => ({
	height: "calc(100vh - 9rem)",
	backgroundImage: `
    linear-gradient(
      90deg, 
    rgba(13,13,13,0.10) 0%, 
    rgba(0,0,0,0.10) 65%
    ), 
    url(${imageurl})`,
	display: "flex",
	justifyContent: "center",
	alignItems: "flex-start",
	backgroundSize: "cover",
	backgroundPosition: "center",
	flexDirection: "column",
	[theme.breakpoints.down("md")]: {
		height: "calc(100vh - 8rem)"
	},
	[theme.breakpoints.down("sm")]: {
		height: "calc(100vh - 7rem)"
	}
}));

type CarouselContentType = {
	alignRight?: Boolean;
};

export const CarouselContent = styled("div", {
	shouldForwardProp: prop => prop !== "alignRight"
})<CarouselContentType>(props => ({
	marginLeft: props.alignRight ? "auto" : "10vw",
	marginRight: props.alignRight ? "10vw" : "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: props.alignRight ? "flex-end" : "flex-start"
}));

export const CarouselTitle = styled("h2")(({ theme }) => ({
	fontSize: "6rem",
	color: "#fff",
	letterSpacing: "2px",
	fontWeight: "normal",
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("lg")]: {
		fontSize: "5rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "3.2rem"
	}
}));

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

type CarouselDescriptionType = {
	alignRight?: Boolean;
};

export const CarouselDescription = styled("p", {
	shouldForwardProp: prop => prop !== "alignRight"
})<CarouselDescriptionType>(({ alignRight, theme }) => ({
	color: "#fff",
	fontSize: "1.5rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		width: "80%",
		textAlign: alignRight ? "right" : "left"
	}
}));
