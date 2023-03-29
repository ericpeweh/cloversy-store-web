// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../../../components/MainWrapper/MainWrapper";
import OrderReview from "../../../../parts/OrderReview/OrderReview";

const OrderReviewPage: NextPage = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<OrderReview />
			</MainWrapper>
		</>
	);
};

export default OrderReviewPage;
