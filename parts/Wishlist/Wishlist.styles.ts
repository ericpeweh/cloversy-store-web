// Dependencies
import { styled } from "@mui/system";

export const WishlistTableContainer = styled("div")(({ theme }) => ({
	width: "145rem",
	[theme.breakpoints.down("xl")]: {
		width: "95vw"
	}
}));

export const WishlistContainer = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	[theme.breakpoints.down("md")]: {
		marginTop: "9rem"
	}
}));
