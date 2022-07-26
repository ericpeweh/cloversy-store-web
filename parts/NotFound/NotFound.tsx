// Dependencies
import React from "react";

// Styles
import { CodeText, Message, NotFoundContainer } from "./NotFound.styles";

// Icons
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import Button from "../../components/Button/Button";

const NotFound = () => {
	return (
		<NotFoundContainer>
			<CodeText>404</CodeText>
			<Message>
				Halaman Tidak Ditemukan <SentimentVeryDissatisfiedIcon />
			</Message>
			<Button variant="outlined" size="small" startIcon={<ArrowBackIcon />}>
				Kembali ke Beranda
			</Button>
		</NotFoundContainer>
	);
};

export default NotFound;
