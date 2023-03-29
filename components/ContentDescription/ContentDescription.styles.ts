// Dependencies
import { styled } from "@mui/system";

export const ContentDescriptionContainer = styled("div")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	lineHeight: "3rem",
	marginBottom: "1.5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		textAlign: "justify"
	}
}));
