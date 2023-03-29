import { styled } from "@mui/system";
import { Stack, Grid } from "@mui/material";

export const VoucherInputContainer = styled("div")(({ theme }) => ({
	marginTop: "3rem",
	borderRadius: "0.5rem",
	overflow: "hidden",
	border: `1px solid ${theme.palette.grey[300]}`,
	minHeight: "33rem",
	[theme.breakpoints.down("md")]: {
		marginTop: "4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "3rem"
	}
}));

export const ContentTitle = styled("h2")(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	padding: "2rem",
	background: theme.palette.grey[200],
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const InputContainer = styled(Stack)(({ theme }) => ({
	padding: "2rem",
	[theme.breakpoints.down("sm")]: {
		padding: "1.5rem"
	}
})) as typeof Stack;

export const ResultInfo = styled(Grid)(({ theme }) => ({
	padding: "2rem",
	"& p": {
		fontSize: "1.6rem",
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.5rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem"
		}
	},
	[theme.breakpoints.down("sm")]: {
		padding: "1.5rem"
	}
})) as typeof Grid;
