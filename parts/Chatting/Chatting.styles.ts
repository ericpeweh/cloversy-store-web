// Dependencies
import { styled } from "@mui/system";

export const ChattingContainer = styled("section")({
	display: "flex",
	flexDirection: "column",
	height: "100%"
});

export const ChattingHeader = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "2rem",
	alignItems: "center",
	backgroundColor: theme.palette.grey[100],
	borderRadius: "0.5rem 0.5rem 0 0",
	padding: "1rem",
	[theme.breakpoints.down("sm")]: {
		gap: "1.5rem"
	}
}));

export const NameContainer = styled("div")({});

export const Name = styled("h3")(({ theme }) => ({
	fontSize: "1.8rem",
	fontWeight: 500,
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

export const Position = styled("p")(({ theme }) => ({
	fontSize: "1.4rem",
	fontWeight: 400,
	[theme.breakpoints.down("md")]: {
		fontSize: "1.3rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.2rem"
	}
}));

export const ConversationContainer = styled("div")(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[300]}`,
	flex: 1,
	padding: "2rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxHeight: "50rem",
	overflowY: "auto",
	[theme.breakpoints.down("md")]: {
		padding: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		padding: "1rem"
	}
}));

export const GroupTimestamp = styled("div")(({ theme }) => ({
	borderRadius: "0.5rem",
	backgroundColor: theme.palette.grey[200],
	color: theme.palette.grey[600],
	fontSize: "1.4rem",
	textAlign: "center",
	padding: "0.5rem 1rem",
	alignSelf: "center",
	fontFamily: "var(--font-secondary)",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
}));

export const BubbleGroup = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	marginBottom: "2rem",
	[theme.breakpoints.down("sm")]: {
		marginBottom: "1.5rem"
	}
}));

interface ChatBubbleProps {
	align?: "left" | "right";
}

export const ChatBubble = styled("div", {
	shouldForwardProp: props => props !== "align"
})<ChatBubbleProps>(({ theme, align = "left" }) => ({
	backgroundColor: align === "left" ? theme.palette.grey[200] : theme.palette.primary.main,
	borderRadius: "0.5rem",
	alignSelf: align === "left" ? "flex-start" : "flex-end",
	color: align === "left" ? theme.palette.grey[800] : "#fff",
	position: "relative",
	maxWidth: "65%",
	padding: "1rem 1.5rem",
	paddingRight: "6rem",
	fontSize: "1.6rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
		maxWidth: "75%"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem",
		maxWidth: "80%"
	}
}));

export const BubbleTimestamp = styled("p")(({ theme }) => ({
	position: "absolute",
	bottom: "0.5rem",
	right: "1rem",
	fontSize: "1.4rem",
	fontFamily: "var(--font-secondary)",
	color: "inherit",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.3rem"
	}
}));

export const ChattingActions = styled("form")(({ theme }) => ({
	display: "flex",
	flexWrap: "wrap",
	position: "relative",
	gap: "1rem",
	alignItems: "center",
	backgroundColor: theme.palette.grey[100],
	borderRadius: "0 0 0.5rem 0.5rem",
	padding: "1rem"
}));

export const ChatInput = styled("input")(({ theme }) => ({
	fontSize: "1.6rem",
	flex: 1,
	padding: "1.2rem 1.5rem",
	border: "none",
	borderRadius: "0.5rem",
	outline: "none",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.5rem"
	},
	"&:active, &:focus": {
		outline: `1px solid ${theme.palette.primary.main}`
	}
}));
