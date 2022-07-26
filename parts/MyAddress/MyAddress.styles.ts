// Dependencies
import { styled } from "@mui/system";

export const MyAddressContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem"
});

export const AddressContainer = styled("div")(({ theme }) => ({
	padding: "1rem",
	borderRadius: "0.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
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

export const AddressActions = styled("div")({
	display: "flex",
	gap: "1rem",
	marginTop: "1rem"
});
