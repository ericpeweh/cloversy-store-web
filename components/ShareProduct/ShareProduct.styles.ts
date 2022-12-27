// Dependencies
import { styled } from "@mui/system";

export const MainText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	color: theme.palette.grey[800],
	margin: "2rem 0",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem",
		margin: "1.7rem 0"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		margin: "1.4rem 0"
	}
}));
