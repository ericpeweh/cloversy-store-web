// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import TermsConditions from "../components/TermsConditions/TermsConditions";

const TermsConditionsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Syarat & Ketentuan</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<TermsConditions />
			</MainWrapper>
		</>
	);
};

export default TermsConditionsPage;
