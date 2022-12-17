// Dependencies
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ConfirmationContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
});

export const SuccessMessage = styled(Typography)(({ theme }) => ({
	fontSize: "2.8rem",
	fontWeight: 500,
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.3rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2.1rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.8rem"
	}
})) as typeof Typography;

export const DetailContainer = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	border: `1px solid ${theme.palette.grey[300]}`,
	padding: "2rem",
	borderRadius: "0.5rem"
})) as typeof Box;

export const DetailContainerTitle = styled(Typography)(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 500,
	marginBottom: "0.5rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.9rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.8rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.7rem"
	}
})) as typeof Typography;

export const DetailContainerSubtitle = styled(Typography)(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 500,
	margin: "1rem 0",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
})) as typeof Typography;

export const DetailContainerText = styled(Typography)(({ theme }) => ({
	fontSize: "1.6rem",
	fontWeight: 400,
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
})) as typeof Typography;

export const ImageContainer = styled("div")(({ theme }) => ({
	width: "10rem",
	[theme.breakpoints.down("md")]: {
		width: "7rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "5rem"
	}
}));

export const PriceContainer = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "1rem",
	alignItems: "center"
});

export const PriceTitle = styled("h3")(({ theme }) => ({
	fontSize: "1.7rem",
	fontWeight: 500,
	color: theme.palette.grey[600],
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const PriceText = styled("p")(({ theme }) => ({
	fontSize: "1.8rem",
	fontWeight: 500,
	marginRight: "1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.6rem"
	}
}));

export const TotalText = styled("p")(({ theme }) => ({
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
