// Dependencies
import { styled } from "@mui/system";

// Components
import { Button, ButtonProps, Grid } from "@mui/material";

export const SizeRadioContainer = styled(Grid)({}) as typeof Grid;

export const SizeRadioItem = styled(Grid)({}) as typeof Grid;

interface SizeRadioButtonProps extends ButtonProps {
	selected: boolean;
	onClick: () => void;
}

export const SizeRadioButton = styled(Button, {
	shouldForwardProp: props => props !== "selected"
})<SizeRadioButtonProps>(({ theme, selected }) => ({
	fontSize: "1.6rem",
	backgroundColor: selected ? theme.palette.primary.main : "#fff",
	color: selected ? "#fff" : theme.palette.primary.dark,
	"&:hover": {
		color: selected ? "#fff" : theme.palette.primary.dark,
		backgroundColor: selected ? theme.palette.primary.main : "#fff"
	},
	[theme.breakpoints.down("lg")]: {
		fontSize: "1.5rem"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "1.4rem"
	}
}));
