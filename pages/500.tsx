// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import ServerProblem from "../parts/ServerProblem/ServerProblem";

const ServerProblemPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>500 - Terjadi Kesalahan Server</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ServerProblem />
			</MainWrapper>
		</>
	);
};

export default ServerProblemPage;
