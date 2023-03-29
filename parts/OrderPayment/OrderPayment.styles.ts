// Dependencies
import { styled } from "@mui/system";

export const OrderDetailsContainer = styled("div")(({ theme }) => ({
	width: "145rem",
	margin: "0 auto 10rem",
	[theme.breakpoints.down("xl")]: {
		width: "95vw",
		marginBottom: "7rem"
	},
	[theme.breakpoints.down("lg")]: {
		marginBottom: "4.5rem"
	},
	[theme.breakpoints.down("md")]: {
		marginBottom: "2rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "0rem"
	}
}));

export const DetailsContainer = styled("div")({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	flexDirection: "column"
});

export const Details = styled("div")(({ theme }) => ({
	padding: "2rem",
	[theme.breakpoints.down("sm")]: {
		padding: "1rem"
	}
}));

export const Section = styled("div")(({ theme }) => ({
	marginBottom: "5rem",
	[theme.breakpoints.down("md")]: {
		marginBottom: "4rem"
	},
	[theme.breakpoints.down("sm")]: {
		marginBottom: "3rem"
	}
}));

export const SectionTitle = styled("h2")(({ theme }) => ({
	fontSize: "1.9rem",
	fontWeight: 500,
	marginBottom: "1rem",
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

export const InfoContainer = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "1rem"
});

export const InfoTitle = styled("h3")(({ theme }) => ({
	fontSize: "1.7rem",
	color: theme.palette.grey[500],
	fontWeight: 400,
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

export const InfoDescription = styled("div")(({ theme }) => ({
	fontSize: "1.7rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	},
	"& > span": {
		color: theme.palette.primary.main,
		fontFamily: "var(--font-secondary)",
		fontWeight: 600
	}
}));

export const ImageContainer = styled("div")(({ theme }) => ({
	width: "10rem",
	[theme.breakpoints.down("md")]: {
		width: "9rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "8rem"
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

export const BigText = styled("p")(({ theme }) => ({
	fontSize: "2.4rem",
	fontWeight: 600,
	marginRight: "1rem",
	marginTop: "0.5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem"
	}
}));

export const VirtualAccountNumber = styled("h2")(({ theme }) => ({
	fontSize: "2.4rem",
	color: theme.palette.primary.main,
	fontFamily: "var(--font-secondary)",
	letterSpacing: "2px",
	fontWeight: 600,
	[theme.breakpoints.down("md")]: {
		fontSize: "2.2rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem"
	}
}));

export const StepsContainer = styled("div")({
	padding: "0 2rem"
});

export const QRImageContainer = styled("div")({
	display: "grid",
	placeItems: "center"
});

export const QRImage = styled("img")(({ theme }) => ({
	objectFit: "contain",
	width: "35rem",
	[theme.breakpoints.down("lg")]: {
		width: "30rem"
	},
	[theme.breakpoints.down("md")]: {
		width: "30rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2rem"
	}
}));

export const CountdownTime = styled("span")(({ theme }) => ({
	color: theme.palette.primary.main,
	fontWeight: 600
}));
