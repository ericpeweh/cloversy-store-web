// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

// Account Content
export const MenuContent = styled(Grid)({
	alignContent: "start",
	borderRadius: "0.5rem",
	marginBottom: "2.5rem"
}) as typeof Grid;

interface ContentCardProps {
	clickable?: boolean;
}

export const ContentCard = styled("div", {
	shouldForwardProp: props => props !== "clickable"
})<ContentCardProps>(({ theme, clickable = true }) => ({
	borderRadius: "0.5rem",
	padding: "1.5rem 2rem",
	border: `1px solid ${theme.palette.grey[400]}`,
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	cursor: clickable ? "pointer" : "default",
	gap: "1.5rem",
	"& svg": {
		fontSize: "3rem"
	}
}));

export const MenuTitleContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	fontSize: "1.7rem",
	fontWeight: 500
});

export const MenuTitle = styled("h2")({
	fontSize: "1.7rem",
	fontWeight: 500
});

export const ContentTitle = styled("h3")({
	fontSize: "1.6rem",
	fontWeight: 400,
	display: "flex",
	alignItems: "center",
	gap: "1rem"
});

export const InformationText = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	color: theme.palette.grey[600]
}));

export const ContentBadge = styled("span")(({ theme }) => ({
	borderRadius: "0.5rem",
	backgroundColor: theme.palette.primary.main,
	fontSize: "1.5rem",
	width: "max-content",
	color: "#fff",
	padding: "0.2rem 1rem"
}));
