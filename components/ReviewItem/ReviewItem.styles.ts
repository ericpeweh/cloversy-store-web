// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const ReviewItemContainer = styled(Grid)({}) as typeof Grid;

export const ReviewerName = styled("h5")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	textTransform: "capitalize",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const ReviewDate = styled("p")(({ theme }) => ({
	fontSize: "1.4rem",
	color: theme.palette.grey[500],
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
}));

export const ReviewDescription = styled("p")(({ theme }) => ({
	margin: "2rem 0",
	minHeight: "6ch",
	[theme.breakpoints.down("md")]: {
		margin: "1.5rem 0 "
	},
	[theme.breakpoints.down("sm")]: {
		margin: "1rem 0 "
	}
}));
