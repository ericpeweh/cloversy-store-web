// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../components/PageWrapper/MainWrapper";
import Cart from "../components/Cart/Cart";

const CartPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cloversy | Keranjang Belanja</title>
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