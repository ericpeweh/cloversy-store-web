// Dependencies
import { styled } from "@mui/system";

// Components
import { Breadcrumbs } from "@mui/material";

export const BreadcrumbsOuterContainer = styled("div")({
	marginTop: "4rem",
	width: "100%",
	display: "flex",
	justifyContent: "center"
});

export const BreadcrumbsContainer = styled(Breadcrumbs)(({ theme }) => ({
	width: "145rem",
	backgroundColor: theme.palette.grey[100],
	padding: "1.5rem 3rem",
	borderRadius: "0.5rem",
	fontSize: "1.6rem"
})) as typeof Breadcrumbs;
