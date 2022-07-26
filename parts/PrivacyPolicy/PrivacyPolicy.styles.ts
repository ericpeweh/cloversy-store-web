// Dependencies
import { styled } from "@mui/system";

export const PrivacyPolicyContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "10rem"
});

export const ContentContainer = styled("div")({
	width: "120rem",
	margin: "3rem 0 10rem",
	"& > p": {
		marginBottom: "3rem"
	}
});
