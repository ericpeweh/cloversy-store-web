// Dependencies
import { styled } from "@mui/system";

export const ReturnPolicyContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
});

export const ContentContainer = styled("div")({
	width: "120rem",
	margin: "3rem 0 10rem",
	"& > p": {
		marginBottom: "3rem"
	}
});
