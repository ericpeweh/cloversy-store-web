// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const ReviewItemContainer = styled(Grid)({}) as typeof Grid;

export const ReviewerName = styled("h5")({
	fontSize: "1.6rem",
	fontWeight: 500
});

export const ReviewDate = styled("p")(({ theme }) => ({
	fontSize: "1.4rem",
	color: theme.palette.grey[500]
}));

export const ReviewDescription = styled("p")({
	margin: "2rem 0"
});
