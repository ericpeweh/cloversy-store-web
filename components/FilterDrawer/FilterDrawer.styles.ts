// Dependencies
import { styled } from "@mui/system";

// Components
import { Drawer } from "@mui/material";

export const FilterDrawerContainer = styled(Drawer)({
	position: "relative",
	"& .MuiDrawer-paper": {
		width: "40rem",
		display: "flex",
		flexDirection: "column",
		padding: "2rem 3rem 3rem"
	}
}) as typeof Drawer;

export const FilterTitle = styled("h3")({
	fontSize: "1.6rem",
	fontWeight: 400,
	marginBottom: "2rem",
	fontFamily: "var(--font-secondary)",
	textTransform: "uppercase"
});

export const FilterContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	marginBottom: "6rem"
});

export const AmountFilterText = styled("p")({
	fontWeight: 400,
	fontSize: "1.5rem"
});
