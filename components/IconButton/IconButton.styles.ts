// Dependencies
import { styled, keyframes } from "@mui/system";

// Components
import { IconButton } from "@mui/material";

export const CustomIconButton = styled(IconButton)({
	position: "relative"
}) as typeof IconButton;

export const DotLoader = styled("span")(({ theme }) => ({
	width: "2.5rem",
	height: "2.5rem",
	display: "block",
	position: "absolute",
	top: "-1rem",
	right: "-1rem",
	"&::after, &::before": {
		content: '""',
		boxSizing: "border-box",
		width: "2.5rem",
		height: "2.5rem",
		borderRadius: "50%",
		background: theme.palette.grey[400],
		position: "absolute",
		right: 0,
		top: 0,
		animation: "loader 1s linear infinite"
	},
	"&::after": {
		animationDelay: "-0.5s"
	},
	"@keyframes loader": {
		"0%": {
			transform: "scale(0)",
			opacity: 1
		},
		"100%": {
			transform: "scale(1)",
			opacity: 0
		}
	}
}));
