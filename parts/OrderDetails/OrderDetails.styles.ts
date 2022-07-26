// Dependencies
import { styled } from "@mui/system";

export const OrderDetailsContainer = styled("div")({
	width: "145rem",
	margin: "0 auto 10rem"
});

export const DetailsContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column"
});

export const Details = styled("div")({
	padding: "2rem"
});

export const Section = styled("div")({
	marginBottom: "6rem"
});

export const SectionTitle = styled("h2")({
	fontSize: "1.9rem",
	fontWeight: 500,
	marginBottom: "1rem"
});

export const InfoContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "1rem"
});

export const InfoTitle = styled("h3")(({ theme }) => ({
	fontSize: "1.7rem",
	color: theme.palette.grey[500],
	fontWeight: 400
}));

export const InfoDescription = styled("p")(({ theme }) => ({
	fontSize: "1.7rem",
	"& > span": {
		color: theme.palette.primary.main,
		fontFamily: "var(--font-secondary)",
		fontWeight: 600
	}
}));

export const OrderCardContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	"& > div": {
		paddingLeft: "0",
		paddingRight: "0"
	}
});

export const AddressContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	marginBottom: "1rem"
});

export const AddressName = styled("h4")(({ theme }) => ({
	fontSize: "1.7rem",
	color: theme.palette.grey[700],
	fontWeight: 500,
	marginTop: "2rem"
}));

export const AddressNumber = styled("p")({
	fontSize: "1.6rem",
	fontWeight: 400,
	marginBottom: "1rem"
});

export const Address = styled("p")({
	fontSize: "1.6rem",
	fontWeight: 400,
	marginBottom: "0.5rem"
});

export const TotalPriceText = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	color: theme.palette.primary.main,
	alignSelf: "center",
	fontWeight: 500
}));
