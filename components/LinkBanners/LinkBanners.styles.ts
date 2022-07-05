// Dependencies
import { styled } from "@mui/system";

// Components
import { CardMedia, Grid } from "@mui/material";

export const LinkBannersContainer = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "145rem"
}) as typeof Grid;

export const Banner = styled(Grid)({
	height: "100%",
	borderRadius: "0.5rem",
	cursor: "pointer",
	position: "relative",
	"&::after": {
		content: "''",
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(255 255 255 / 0%)",
		transition: "0.2s ease-in"
	},
	"&:hover::after": {
		backgroundColor: "rgba(255 255 255 / 10%)"
	}
}) as typeof Grid;

export const BannerImage = styled(CardMedia)({
	height: "18rem"
}) as typeof CardMedia;
