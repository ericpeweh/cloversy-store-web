// Dependencies
import { styled } from "@mui/system";

// Components
import { Dialog } from "@mui/material";

export const VoucherPickerModalContainer = styled(Dialog)(({ theme }) => ({
	"& .MuiDialog-paper": {
		minHeight: "50vh",
		minWidth: "45vw",
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
			minHeight: "80vh"
		}
	}
})) as typeof Dialog;

export const ModalTitle = styled("h2")(({ theme }) => ({
	fontSize: "2.2rem",
	marginBottom: "1rem",
	padding: "3rem",
	paddingBottom: "0rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.8rem",
		padding: "2rem",
		paddingBottom: "0rem"
	}
}));

export const VoucherOptions = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxHeight: "50rem",
	overflow: "auto",
	padding: "2rem 3rem 4rem",
	[theme.breakpoints.down("sm")]: {
		padding: " 2rem 2rem 2rem"
	}
}));

export const VoucherContainer = styled("div")(({ theme }) => ({
	paddingRight: "2rem",
	borderRadius: "0.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "2rem",
	border: `1px solid ${theme.palette.grey[300]}`
}));
