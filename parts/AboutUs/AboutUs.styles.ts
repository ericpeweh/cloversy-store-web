// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

const TitleTextBase = {
	fontWeight: 500,
	fontFamily: "var(--font-secondary)"
};

export const AboutUsContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
});

// Hero
export const AboutUsHero = styled("div")(({ theme }) => ({
	height: "calc(100vh - 9rem)",
	width: "100%",
	backgroundImage:
		"linear-gradient(to right, rgba(0 0 0 / 20%), rgba(0 0 0 / 30%)), url(/images/about-us-1.webp)",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "2rem",
	[theme.breakpoints.down("md")]: {
		height: "calc(100vh - 8rem)"
	},
	[theme.breakpoints.down("sm")]: {
		height: "calc(100vh - 7rem)"
	}
}));

export const HeroTitle = styled("h1")(({ theme }) => ({
	...TitleTextBase,
	fontSize: "4.5rem",
	color: theme.palette.grey[50],
	[theme.breakpoints.down("xl")]: {
		fontSize: "4.3rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "4rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "3.7rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "3.4rem"
	}
}));

export const HeroDescription = styled("p")(({ theme }) => ({
	fontSize: "1.8rem",
	color: theme.palette.grey[50],
	width: "50%",
	textAlign: "center",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.7rem",
		width: "65%"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem",
		width: "75%"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem",
		width: "85%"
	}
}));

// Content
export const ContentContainer = styled(Grid)(({ theme }) => ({
	padding: "8rem 8rem 2rem",
	width: "95vw",
	justifyContent: "center",
	[theme.breakpoints.down("xl")]: {
		padding: "8rem 4rem 2rem"
	},
	[theme.breakpoints.down("lg")]: {
		padding: "6rem 3rem 2rem"
	},
	[theme.breakpoints.down("md")]: {
		padding: "4rem 2rem 2rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "3rem 1.5rem 2rem"
	}
})) as typeof Grid;

export const ContentItem = styled(Grid)({
	display: "grid",
	justifyItems: "center"
}) as typeof Grid;

interface ContentProps {
	textLeft?: boolean;
	textRight?: boolean;
}

export const Content = styled("div", {
	shouldForwardProp: props => props !== "textLeft"
})<ContentProps>(({ textLeft, textRight }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "2rem",
	"& h1, p": {
		textAlign: textLeft ? "left" : textRight ? "right" : "center"
	}
}));

export const ContentImage = styled("div")({
	width: "100%",
	height: "100%",
	borderRadius: "0.5rem",
	overflow: "hidden"
});

export const ContentTag = styled("h2")(({ theme }) => ({
	...TitleTextBase,
	fontSize: "1.8rem",
	letterSpacing: "1px",
	color: theme.palette.primary.main,
	fontWeight: 300,
	textTransform: "uppercase",
	marginBottom: "-1rem",
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.7rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	}
}));

export const ContentTitle = styled("h1")(({ theme }) => ({
	...TitleTextBase,
	fontSize: "3rem",
	color: theme.palette.grey[800],
	fontWeight: 600,
	[theme.breakpoints.down("xl")]: {
		fontSize: "2.8rem"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "2.6rem"
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "2.4rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "2.2rem"
	}
}));

interface ContentDescriptionProps {
	align?: "left" | "center" | "right";
}

export const ContentDescription = styled("p")<ContentDescriptionProps>(
	({ theme, align = "left" }) => ({
		fontSize: "1.8rem",
		textAlign: align,
		color: theme.palette.grey[800],
		[theme.breakpoints.down("lg")]: {
			fontSize: "1.7rem"
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1.6rem"
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem"
		}
	})
);

export const SignatureContainer = styled("div")(({ theme }) => ({
	width: "35rem",
	height: "100%",
	justifySelf: "flex-end",
	marginBottom: "4rem",
	[theme.breakpoints.down("xl")]: {
		width: "32rem"
	},
	[theme.breakpoints.down("lg")]: {
		width: "29rem"
	},
	[theme.breakpoints.down("md")]: {
		width: "27rem"
	},
	[theme.breakpoints.down("sm")]: {
		width: "25rem"
	}
}));
