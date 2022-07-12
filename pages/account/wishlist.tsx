// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/PageWrapper/MainWrapper";
import Wishlist from "../../components/Wishlist/Wishlist";

const WishlistPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Account | Wishlist</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<Wishlist />
			</MainWrapper>
		</>
	);
};

export default WishlistPage;
