// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../../components/MainWrapper/MainWrapper";
import OrderPayment from "../../../../parts/OrderPayment/OrderPayment";

const OrderPaymentPage: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<OrderPayment />
			</MainWrapper>
		</>
	);
};

export default OrderPaymentPage;
