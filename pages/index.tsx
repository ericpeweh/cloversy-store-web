// Dependencies
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// MUI
import { Divider } from "@mui/material";

// Hooks
import useModal from "../hooks/useModal";

// Components
import BigCarousel from "../components/BigCarousel/BigCarousel";
import BrandCardList from "../components/BrandCardList/BrandCardList";
import Recommendations from "../components/Recommendations/Recommendations";
import LinkBanners from "../components/LinkBanners/LinkBanners";
import Footer from "../components/Footer/Footer";
import ProductViewModal from "../components/ProductViewModal/ProductViewModal";

const Home: NextPage = () => {
	const { isOpen, openHandler, closeHandler } = useModal();

	return (
		<div>
			<Head>
				<title>Cloversy Store</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ProductViewModal isOpen={isOpen} />
				<BigCarousel />
				<BrandCardList />
				<Recommendations />
				<Divider />
				<LinkBanners />
				<Footer />
			</main>
		</div>
	);
};

export default Home;
