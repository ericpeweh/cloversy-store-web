// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../components/PageWrapper/MainWrapper";
import OrderDetails from "../../../parts/OrderDetails/OrderDetails";
import AccountWrapper from "../../../parts/AccountWrapper/AccountWrapper";

const OrderDetailsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Detail Pesanan | PROD/21072022/00001</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<OrderDetails />
			</MainWrapper>
		</>
	);
};

export default OrderDetailsPage;
