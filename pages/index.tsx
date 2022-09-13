// Dependencies
import type { NextPage } from "next";
import Head from "next/head";

// MUI
import { Divider } from "@mui/material";

// Components
import MainWrapper from "../components/MainWrapper/MainWrapper";
import BigCarousel from "../components/BigCarousel/BigCarousel";
import BrandCardList from "../components/BrandCardList/BrandCardList";
import Recommendations from "../components/Recommendations/Recommendations";
import LinkBanners from "../components/LinkBanners/LinkBanners";
import ProductViewModal from "../components/ProductViewModal/ProductViewModal";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cloversy Web Store - Be Special!</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<ProductViewModal />
				<BigCarousel />
				<BrandCardList />
				<Recommendations />
				<Divider />
				<LinkBanners />
			</MainWrapper>
		</>
	);
};

export default Home;
