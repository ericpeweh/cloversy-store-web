// Dependencies
import React from "react";

// Styles
import { CodeText, Message, ServerProblemContainer } from "./ServerProblem.styles";

// Icons
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import RefreshIcon from "@mui/icons-material/Refresh";

// Components
import Button from "../../components/Button/Button";

const ServerProblem = () => {
	const refreshHandler = () => {
		location.reload();
	};

	return (
		<ServerProblemContainer>
			<CodeText>500</CodeText>
			<Message>
				Terjadi Kesalahan Server <SentimentVeryDissatisfiedIcon />
			</Message>
			<Button variant="outlined" size="small" startIcon={<RefreshIcon />} onClick={refreshHandler}>
				Coba Lagi
			</Button>
		</ServerProblemContainer>
	);
};

export default ServerProblem;
