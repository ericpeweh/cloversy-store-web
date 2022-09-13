// Dependencies
import { styled } from "@mui/system";

export const ContentContainerOuter = styled("div")(({ theme }) => ({
	width: "120rem",
	margin: "3rem 0 0.5rem",
	"& > p": {
		marginBottom: "2rem",
		[theme.breakpoints.down("md")]: {
			marginBottom: "1.5rem"
		}
	},
	[theme.breakpoints.down("lg")]: {
		width: "90vw",
		margin: "2.5rem 0 0"
	},
	[theme.breakpoints.down("sm")]: {
		width: "100vw",
		padding: "0 2rem",
		margin: "2rem 0 0"
	}
}));
