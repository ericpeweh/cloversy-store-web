// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../components/MainWrapper/MainWrapper";
import OrderDetails from "../../../parts/OrderDetails/OrderDetails";
import AccountWrapper from "../../../parts/AccountWrapper/AccountWrapper";

const OrderDetailsPage: NextPage = () => {
	return (
		<>
			<Head>
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
