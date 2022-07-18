// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactUsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hubungi Kami</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ContactUs />
			</MainWrapper>
		</>
	);
};

export default ContactUsPage;
