// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const ReviewItemContainer = styled(Grid)({}) as typeof Grid;

export const ReviewerName = styled("h5")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 500,
	textTransform: "capitalize",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ReviewDate = styled("span")(({ theme }) => ({
	fontSize: "1.5rem",
	color: theme.palette.grey[500],
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const ReviewDescription = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	margin: "2rem 0",
	minHeight: "6ch",
	[theme.breakpoints.down("md")]: {
		margin: "1.5rem 0",
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		margin: "1rem 0 ",
		fontSize: "1.4rem"
	}
}));
