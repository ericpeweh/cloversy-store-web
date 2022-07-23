// Dependencies
import { styled } from "@mui/system";

export const StatusBadgeContainer = styled("p", { shouldForwardProp: props => props !== "color" })(
	({ theme, color }) => ({
		padding: "0.2rem 1rem",
		borderRadius: "0.5rem",
		fontSize: "1.4rem",
		backgroundColor:
			color === "primary" ? theme.palette.primary.main : theme.palette.secondary.main,
		color: "#fff",
		alignSelf: "flex-start",
		textTransform: "uppercase"
	})
);
