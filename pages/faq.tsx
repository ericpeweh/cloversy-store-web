// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import Faq from "../components/Faq/Faq";

const FaqPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pertanyaan Umum</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<Faq />
			</MainWrapper>
		</>
	);
};

export default FaqPage;
