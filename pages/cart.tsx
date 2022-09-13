// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Cart from "../parts/Cart/Cart";

const CartPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Keranjang Belanja</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<Cart />
			</MainWrapper>
		</>
	);
};

export default CartPage;
