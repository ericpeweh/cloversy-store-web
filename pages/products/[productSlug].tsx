// Dependencies
import React from "react";
import Head from "next/head";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

// Config
import { BASE_URL } from "../../api";

// Types
import { Product, ResponseBody } from "../../interfaces";

// Components
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import ProductDetails from "../../parts/ProductDetails/ProductDetails";

interface ProductDetailsPageProps {
	productData: Product;
}

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ productData }) => {
	return (
		<>
			<Head>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ProductDetails productData={productData} />
			</MainWrapper>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async context => {
	const productSlug = context.params?.productSlug;

	const response = await axios.get(`${BASE_URL}/products/${productSlug}`);
	const result: ResponseBody<{ product: Product }> = response.data;

	return {
		props: {
			productData: result.data.product
		}
	};
};

export default ProductDetailsPage;
