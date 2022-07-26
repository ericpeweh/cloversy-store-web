// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import Checkout from "../parts/Checkout/Checkout";

const CheckoutPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Checkout - Detail</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<Checkout />
			</MainWrapper>
		</>
	);
};

export default CheckoutPage;
