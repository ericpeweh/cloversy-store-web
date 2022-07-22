// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../components/PageWrapper/MainWrapper";
import MyOrders from "../../../parts/MyOrders/MyOrders";
import AccountWrapper from "../../../parts/AccountWrapper/AccountWrapper";

const MyOrdersPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pesanan Saya</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Pesanan Saya">
					<MyOrders />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default MyOrdersPage;
