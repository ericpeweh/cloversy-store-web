// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import MyAccountDetails from "../../parts/MyAccountDetails/MyAccountDetails";
import AccountWrapper from "../../parts/AccountWrapper/AccountWrapper";

const MyAccountDetailsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Detail Akun - Edit</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Detail Akun">
					<MyAccountDetails />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default MyAccountDetailsPage;
