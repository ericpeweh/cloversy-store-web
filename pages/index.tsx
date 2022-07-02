// Dependencies
import type { NextPage } from "next";
import Head from "next/head";

// MUI
import { Button } from "@mui/material";

// Components
import BigCarousel from "../components/BigCarousel/BigCarousel";
import BrandCardList from "../components/BrandCardList/BrandCardList";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Cloversy Store</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<BigCarousel />
				<BrandCardList />
			</main>
		</div>
	);
};

export default Home;
