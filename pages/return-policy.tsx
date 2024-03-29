// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/MainWrapper/MainWrapper";
import ReturnPolicy from "../parts/ReturnPolicy/ReturnPolicy";

const ReturnPolicyPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Aturan Pengembalian</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ReturnPolicy />
			</MainWrapper>
		</>
	);
};

export default ReturnPolicyPage;
