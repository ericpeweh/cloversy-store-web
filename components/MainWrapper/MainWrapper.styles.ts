// Dependencies
import { styled } from "@mui/system";

export const OuterContainer = styled("main")(({ theme }) => ({
	marginTop: "9rem",
	[theme.breakpoints.down("md")]: {
		marginTop: "8rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "7rem"
	}
}));
