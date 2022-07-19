// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Kebijakan Privasi</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<PrivacyPolicy />
			</MainWrapper>
		</>
	);
};

export default PrivacyPolicyPage;
