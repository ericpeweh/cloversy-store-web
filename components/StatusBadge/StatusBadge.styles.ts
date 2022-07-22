// Dependencies
import { styled } from "@mui/system";

export const StatusBadgeContainer = styled("p")(({ theme }) => ({
	padding: "0.2rem 1rem",
	borderRadius: "0.5rem",
	fontSize: "1.4rem",
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	alignSelf: "flex-start",
	textTransform: "uppercase"
}));
