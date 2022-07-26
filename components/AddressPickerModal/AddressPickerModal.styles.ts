// Dependencies
import { styled } from "@mui/system";

// Components
import { Dialog, Grid } from "@mui/material";

export const AddressPickerModalContainer = styled(Dialog)({
	"& .MuiDialog-paper": {
		minHeight: "60vh",
		minWidth: "42vw"
	}
}) as typeof Dialog;

export const ModalTitle = styled("h2")({
	fontSize: "2.2rem",
	marginBottom: "1rem",
	padding: "3rem",
	paddingBottom: "0rem"
});

export const AddressOptions = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxHeight: "50rem",
	overflow: "auto",
	padding: "2rem 3rem 4rem"
});

export const AddressContainer = styled("div")(({ theme }) => ({
	padding: "2rem",
	borderRadius: "0.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "2rem",
	border: `1px solid ${theme.palette.grey[300]}`
}));

export const AddressContent = styled("div")({
	display: "flex",
	flexDirection: "column"
});

export const AddressInfo = styled("div")({});

export const AddressLabel = styled("h2")({
	fontSize: "1.8rem",
	fontFamily: "var(--font-secondary)",
	fontWeight: 500,
	display: "flex",
	gap: "1rem",
	marginBottom: "1rem"
});

export const RecipientName = styled("h3")({
	fontSize: "1.7rem"
});

export const AddressText = styled("p")({
	fontSize: "1.6rem"
});
