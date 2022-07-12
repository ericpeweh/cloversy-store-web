// Dependencies
import { styled } from "@mui/system";

export const WishlistItemImageContainer = styled("div")({
	borderRadius: "0.5rem",
	overflow: "hidden",
	height: "9rem",
	width: "16rem",
	cursor: "pointer"
});

export const WishlistItemImage = styled("img")({
	objectFit: "cover",
	height: "100%",
	width: "100%"
});

export const WishlistItemTitle = styled("h2")({
	fontSize: "1.6rem",
	fontWeight: 500,
	width: "100%",
	cursor: "pointer"
});
