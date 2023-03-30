// Styles
import { styled } from "@mui/system";

// Components
import { ButtonBase } from "@mui/material";

export const BoxButtonContainer = styled(ButtonBase)(({ theme }) => ({
	borderRadius: "0.5rem",
	border: `1px solid ${theme.palette.grey[400]}`,
	padding: "1rem 2rem",
	fontSize: "1.7rem",
	transition: "0.3s ease-in",
	backgroundColor: "#fff",
	"&:hover": {
		border: `1px solid ${theme.palette.grey[600]}`
	},
	"&:disabled": {
		cursor: "not-allowed",
		backgroundColor: `${theme.palette.grey[200]}`
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		padding: "0.7rem 1.8rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		padding: "0.5rem 1.5rem"
	}
})) as typeof ButtonBase;
