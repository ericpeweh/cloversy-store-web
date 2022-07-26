// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/PageWrapper/MainWrapper";
import MyAccount from "../../parts/MyAccount/MyAccount";
import AccountWrapper from "../../parts/AccountWrapper/AccountWrapper";

const MyAccountPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Akun Saya</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Akun Saya">
					<MyAccount />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default MyAccountPage;
