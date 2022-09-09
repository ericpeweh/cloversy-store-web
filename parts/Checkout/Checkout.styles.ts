// Dependencies
import { styled } from "@mui/system";

export const CheckoutContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem"
});

export const StepperContainer = styled("div")({
	marginTop: "-2rem"
});

export const ContentContainer = styled("div")(({ theme }) => ({
	width: "160rem",
	margin: "5rem auto 2rem",
	"@media screen and (max-width: 1700px)": {
		width: "95vw"
	}
}));

export const TransactionDetails = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "1rem",
	alignItems: "center",
	marginBottom: "1rem",
	backgroundColor: theme.palette.grey[100],
	borderRadius: "0.5rem 0.5rem 0 0",
	padding: "0.5rem 1rem"
}));

export const TransactionSummary = styled("div")(({ theme }) => ({
	display: "flex",
	backgroundColor: theme.palette.grey[100],
	justifyContent: "flex-end",
	padding: "1rem",
	fontSize: "1.6rem",
	alignItems: "center"
}));

export const TransactionTitle = styled("h4")({
	fontSize: "1.6rem",
	textTransform: "uppercase",
	fontFamily: "var(--font-secondary)"
});

export const TransactionTotal = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	color: theme.palette.primary.main,
	alignSelf: "center",
	fontWeight: 500,
	marginLeft: "1rem"
}));

export const FormContainer = styled("form")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
	padding: "2rem 2rem 2rem 0",
	[theme.breakpoints.down("sm")]: {
		padding: "1rem 1rem 2rem 1rem"
	}
}));

export const OrderCardsContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem"
});

export const ConfirmationContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
});

export const ConfirmationTitle = styled("h3")({
	fontSize: "3rem",
	fontWeight: 400,
	fontFamily: "var(--font-secondary)",
	marginBottom: "2rem"
});

export const ConfirmationDesc = styled("p")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 400,
	color: theme.palette.grey[500],
	marginBottom: "1rem"
}));
