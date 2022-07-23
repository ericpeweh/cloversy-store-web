// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

export const MyVoucherContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem"
});

export const VoucherContainer = styled(Grid)(({ theme }) => ({
	padding: "1rem"
})) as typeof Grid;

export const Voucher = styled("div")(({ theme }) => ({
	display: "flex",
	border: `1px solid ${theme.palette.grey[400]}`,
	borderRadius: "0.5rem"
}));

export const VoucherInfo = styled("div")({
	display: "flex",
	flexDirection: "column",
	flex: 1
});

export const VoucherContent = styled("div")({
	padding: "1rem 2rem"
});

export const VoucherTitle = styled("h2")({
	fontSize: "1.8rem",
	fontFamily: "var(--font-secondary)",
	fontWeight: 600,
	display: "flex",
	gap: "1rem",
	marginBottom: "0.5rem"
});

export const VoucherExpiry = styled("p")(({ theme }) => ({
	fontSize: "1.5rem",
	color: theme.palette.grey[500]
}));

export const VoucherCode = styled("p")(({ theme }) => ({
	fontSize: "1.6rem",
	color: theme.palette.grey[800],
	padding: "0.2rem 0",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	letterSpacing: "3px",
	borderTop: `2px dashed ${theme.palette.primary.light}`
}));

export const VoucherImage = styled("div")(({ theme }) => ({
	width: "11rem",
	alignSelf: "stretch",
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	borderRadius: "0.5rem 0 0 0.5rem",
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

// Information Modal
export const InfoTitle = styled("h4")(({ theme }) => ({
	fontSize: "1.7rem",
	marginBottom: "1rem",
	color: theme.palette.grey[700]
}));

export const InfoText = styled("p")({
	fontSize: "1.6rem",
	color: "#333"
});

export const UsageList = styled("ol")({
	marginLeft: "2rem",
	"& > li": {
		marginBottom: "0.5rem"
	}
});
