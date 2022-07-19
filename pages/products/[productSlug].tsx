// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/PageWrapper/MainWrapper";
import ProductDetails from "../../parts/ProductDetails/ProductDetails";

const ProductDetailsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Product Details</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ProductDetails />
			</MainWrapper>
		</>
	);
};

export default ProductDetailsPage;
