// Dependencies
import { styled } from "@mui/system";

export const OrderCardsContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	paddingLeft: "1rem"
});

export const Transaction = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	border: `1px solid ${theme.palette.grey[200]}`,
	borderRadius: "0.5rem",
	marginBottom: "2.5rem"
}));

export const TransactionDetails = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "1rem",
	alignItems: "center",
	marginBottom: "1rem",
	backgroundColor: theme.palette.grey[100],
	borderRadius: "0.5rem 0.5rem 0 0",
	padding: "1rem"
}));

export const TransactionSummary = styled("div")(({ theme }) => ({
	display: "flex",
	backgroundColor: theme.palette.grey[100],
	justifyContent: "flex-end",
	padding: "1rem",
	fontSize: "1.7rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const TransactionActions = styled("div")(({ theme }) => ({
	display: "flex",
	backgroundColor: theme.palette.grey[200],
	justifyContent: "flex-end",
	padding: "1rem",
	fontSize: "1.6rem",
	gap: "1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		flexDirection: "column"
	}
}));

export const TransactionDate = styled("p")(({ theme }) => ({
	fontSize: "1.7rem",
	marginLeft: "auto",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const TransactionCode = styled("h4")(({ theme }) => ({
	fontSize: "1.6rem",
	textTransform: "uppercase",
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const TransactionTotal = styled("p")(({ theme }) => ({
	fontSize: "2rem",
	color: theme.palette.primary.main,
	alignSelf: "center",
	fontWeight: 500,
	marginLeft: "1rem",
	[theme.breakpoints.down("xl")]: {
		fontSize: "1.9rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.6rem"
	}
}));
