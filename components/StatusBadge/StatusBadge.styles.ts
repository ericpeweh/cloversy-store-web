// Dependencies
import { styled } from "@mui/system";

export const StatusBadgeContainer = styled("p", { shouldForwardProp: props => props !== "color" })(
	({ theme, color }) => ({
		padding: "0.2rem 1rem",
		borderRadius: "0.5rem",
		fontSize: "1.4rem",
		backgroundColor:
			color === "primary" ? theme.palette.primary.main : theme.palette[color || "secondary"].light,
		color: "#fff",
		alignSelf: "flex-start",
		textTransform: "uppercase",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.3rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem"
		}
	})
);
