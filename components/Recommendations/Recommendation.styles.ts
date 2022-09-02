// Dependencies
import { styled } from "@mui/system";

export const RecommendationContainer = styled("section")({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "5rem 0"
});

export const SectionContent = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "5rem",
	[theme.breakpoints.up("xl")]: {
		width: "142rem"
	},
	[theme.breakpoints.down("xl")]: {
		width: "132rem"
	},
	"@media screen and (max-width: 1250px)": {
		width: "123rem"
	},
	[theme.breakpoints.down("lg")]: {
		width: "118rem",
		padding: "0 2rem"
	},
	"@media screen and (max-width: 1150px)": {
		width: "100%",
		marginTop: "3rem"
	}
}));
