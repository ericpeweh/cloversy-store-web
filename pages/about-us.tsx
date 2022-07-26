// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import AboutUs from "../parts/AboutUs/AboutUs";

const AboutUsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Tentang Kami</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AboutUs />
			</MainWrapper>
		</>
	);
};

export default AboutUsPage;
