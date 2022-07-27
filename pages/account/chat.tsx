// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Chatting from "../../parts/Chatting/Chatting";
import AccountWrapper from "../../parts/AccountWrapper/AccountWrapper";

const ChattingPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Chatting</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Pesan">
					<Chatting />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default ChattingPage;
