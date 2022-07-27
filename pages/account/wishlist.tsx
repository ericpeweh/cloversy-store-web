// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Wishlist from "../../parts/Wishlist/Wishlist";

const WishlistPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Wishlist Anda</title>
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
