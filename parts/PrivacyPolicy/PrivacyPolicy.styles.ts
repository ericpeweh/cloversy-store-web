// Dependencies
import { styled } from "@mui/system";

export const PrivacyPolicyContainer = styled("section")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem",
	[theme.breakpoints.down("lg")]: {
		paddingBottom: "8rem"
	},
	[theme.breakpoints.down("sm")]: {
		paddingBottom: "6rem"
	}
}));
