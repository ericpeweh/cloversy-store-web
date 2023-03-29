// Dependencies
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CheckoutContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	marginBottom: "10rem",
	[theme.breakpoints.down("xl")]: {
		marginBottom: "8rem"
	},
	[theme.breakpoints.down("lg")]: {
		marginBottom: "6rem"
	},
	[theme.breakpoints.down("md")]: {
		marginBottom: "4rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "2rem"
	}
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: "600",
	marginBottom: "1rem",
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
		marginLeft: "1rem"
	}
})) as typeof Typography;

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
	alignItems: "center",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));

export const TransactionTitle = styled("h4")(({ theme }) => ({
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
	fontSize: "1.9rem",
	color: theme.palette.primary.main,
	alignSelf: "center",
	fontWeight: 500,
	marginLeft: "1rem",
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

export const InputContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
	padding: "1rem 2rem 2rem 0",
	gap: "1rem",
	[theme.breakpoints.down("xl")]: {
		padding: "1rem 1rem 2rem 0rem"
	},
	[theme.breakpoints.down("lg")]: {
		padding: "1rem 0rem 2rem 0rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "1rem 1rem 2rem 1rem"
	}
}));

type AddressContainerType = { selected: boolean };

export const OptionContainer = styled("div")<AddressContainerType>(({ theme, selected }) => ({
	borderRadius: "0.5rem",
	userSelect: "none",
	border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.grey[400]}`
}));

export const OrderCardsContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "1rem"
});

export const SummaryTitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.7rem",
	textAlign: "right",
	fontWeight: "bold",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
})) as typeof Typography;

export const SummaryDesc = styled(Typography)(({ theme }) => ({
	fontSize: "1.8rem",
	textAlign: "right",
	minWidth: "14rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem",
		minWidth: "13rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
		minWidth: "12rem"
	}
})) as typeof Typography;

export const TotalAmount = styled(Typography)(({ theme }) => ({
	fontSize: "2rem",
	textAlign: "right",
	fontWeight: "bold",
	minWidth: "14rem",
	color: theme.palette.primary.main,
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.9rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.8rem",
		minWidth: "13rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.7rem",
		minWidth: "12rem"
	}
})) as typeof Typography;
