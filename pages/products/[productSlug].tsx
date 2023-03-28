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

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
	const productSlug = params?.productSlug;

	try {
		const response = await axios.get(`${BASE_URL}/products/${productSlug}`, {
			withCredentials: true,
			headers: {
				cookie: req.headers.cookie ?? ""
			}
		});
		const result: ResponseBody<{ product: Product }> = response.data;

		if (response.headers["set-cookie"]) {
			res.setHeader("Set-Cookie", response.headers["set-cookie"]);
		}

		return {
			props: {
				productData: result.data.product
			}
		};
	} catch (error) {
		return {
			props: {
				productData: null
			}
		};
	}
};

export default ProductDetailsPage;
