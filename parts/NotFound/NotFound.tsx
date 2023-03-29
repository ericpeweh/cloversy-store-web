// Dependencies
import React from "react";

// Styles
import { CodeText, Message, NotFoundContainer } from "./NotFound.styles";

// Hooks
import { useRouter } from "next/router";

// Icons
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Components
import Button from "../../components/Button/Button";

const NotFound = () => {
	const router = useRouter();

	return (
		<NotFoundContainer>
			<CodeText>404</CodeText>
			<Message>
				Halaman Tidak Ditemukan <SentimentVeryDissatisfiedIcon />
			</Message>
			<Button
				variant="outlined"
				size="small"
				startIcon={<ArrowBackIcon />}
				onClick={() => router.replace("/")}
			>
				Kembali ke Beranda
			</Button>
		</NotFoundContainer>
	);
};

export default NotFound;
