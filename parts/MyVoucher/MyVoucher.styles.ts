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
