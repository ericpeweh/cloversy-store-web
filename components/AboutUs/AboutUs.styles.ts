// Dependencies
import { styled } from "@mui/system";

// Components
import { Grid } from "@mui/material";

const TitleTextBase = {
	fontWeight: 500,
	fontFamily: "var(--font-secondary)"
};

export const AboutUsContainer = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center"
});

// Hero
export const AboutUsHero = styled("div")({
	height: "calc(100vh - 9rem)",
	width: "100%",
	backgroundImage:
		"linear-gradient(to right, rgba(0 0 0 / 20%), rgba(0 0 0 / 30%)), url(/images/1.jpg)",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "2rem"
});

export const HeroTitle = styled("h1")(({ theme }) => ({
	...TitleTextBase,
	fontSize: "4.5rem",
	color: theme.palette.grey[50]
}));

export const HeroDescription = styled("p")(({ theme }) => ({
	fontSize: "1.8rem",
	color: theme.palette.grey[50],
	width: "50%",
	textAlign: "center"
}));

// Content
export const ContentContainer = styled(Grid)({
	padding: "8rem 8rem 2rem",
	width: "180rem",
	justifyContent: "center"
}) as typeof Grid;

export const ContentItem = styled(Grid)({
	display: "grid",
	justifyItems: "center"
}) as typeof Grid;

interface ContentProps {
	textLeft?: boolean;
	textRight?: boolean;
}

export const Content = styled("div")<ContentProps>(({ textLeft, textRight }) => ({
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
	marginBottom: "-1rem"
}));

export const ContentTitle = styled("h1")(({ theme }) => ({
	...TitleTextBase,
	fontSize: "3rem",
	color: theme.palette.grey[800],
	fontWeight: 600
}));

interface ContentDescriptionProps {
	align?: "left" | "center" | "right";
}

export const ContentDescription = styled("p")<ContentDescriptionProps>(
	({ theme, align = "left" }) => ({
		fontSize: "1.8rem",
		textAlign: align,
		color: theme.palette.grey[800]
	})
);

export const SignatureContainer = styled("div")({
	width: "35rem",
	height: "100%",
	justifySelf: "flex-end",
	marginBottom: "4rem"
});
