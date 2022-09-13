// Dependencies
import { styled } from "@mui/system";

// Components
import { Dialog, Grid } from "@mui/material";

export const AddAddressModalContainer = styled(Dialog)(({ theme }) => ({
	"& .MuiDialog-paper": {
		minHeight: "60vh",
		maxHeight: "60vh",
		minWidth: "42vw",
		padding: "3rem 0 0 3rem",
		[theme.breakpoints.down("xl")]: {
			minWidth: "60vw"
		},
		[theme.breakpoints.down("lg")]: {
			minWidth: "70vw"
		},
		[theme.breakpoints.down("md")]: {
			minWidth: "80vw"
		},
		[theme.breakpoints.down("sm")]: {
			minWidth: "100vw",
			minHeight: "80vh",
			padding: "2rem 0 0 2rem"
		}
	}
})) as typeof Dialog;

export const ModalTitle = styled("h2")(({ theme }) => ({
	fontSize: "2.2rem",
	marginBottom: "1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.8rem"
	}
}));

export const FormContainer = styled("form")({
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
	padding: "2rem 2rem 2rem 0"
});

export const InputContainer = styled(Grid)({}) as typeof Grid;

export const InputLimitText = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	color: theme.palette.grey[400]
}));
