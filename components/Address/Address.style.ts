// Dependencies
import { styled } from "@mui/system";

export const AddressContainer = styled("div")(({ theme }) => ({
	padding: "1rem",
	borderRadius: "0.5rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		padding: "1rem 0"
	}
}));

export const AddressContent = styled("div")({
	display: "flex",
	flexDirection: "column"
});

export const AddressInfo = styled("div")({});

export const AddressLabel = styled("h2")(({ theme }) => ({
	fontSize: "1.8rem",
	fontFamily: "var(--font-secondary)",
	fontWeight: 500,
	textTransform: "capitalize",
	display: "flex",
	gap: "1rem",
	marginBottom: "1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.6rem",
		marginBottom: "0.7rem"
	}
}));

export const RecipientName = styled("h3")(({ theme }) => ({
	fontSize: "1.7rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const AddressText = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const AddressActions = styled("div")({
	display: "flex",
	gap: "1rem",
	marginTop: "1rem"
});
