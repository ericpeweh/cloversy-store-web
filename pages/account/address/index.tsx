// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../components/MainWrapper/MainWrapper";
import MyAddress from "../../../parts/MyAddress/MyAddress";
import AccountWrapper from "../../../parts/AccountWrapper/AccountWrapper";

const MyAddressPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Alamat Pengiriman</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Alamat Pengiriman">
					<MyAddress />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default MyAddressPage;
