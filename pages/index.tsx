// Dependencies
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";

// Config
import { BASE_URL } from "../api";

// Types
import { Product, ResponseWithPagination } from "../interfaces";

// Components
import { Divider } from "@mui/material";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import BigCarousel from "../components/BigCarousel/BigCarousel";
import BrandCardList from "../components/BrandCardList/BrandCardList";
import Recommendations from "../components/Recommendations/Recommendations";
import LinkBanners from "../components/LinkBanners/LinkBanners";
import ProductViewModal from "../components/ProductViewModal/ProductViewModal";

interface HomePageProps {
	recommendedProducts: Product[];
}

const Home: NextPage<HomePageProps> = ({ recommendedProducts }) => {
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
				<Recommendations products={recommendedProducts} />
				<Divider />
				<LinkBanners />
			</MainWrapper>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const response = await axios.get(`${BASE_URL}/products?count=6&page=1`, {
		withCredentials: true,
		headers: {
			cookie: req.headers.cookie ?? ""
		}
	}); // should add &sortBy=popularity later

	const result: ResponseWithPagination<{ products: Product[] }> = response.data;

	if (response.headers["set-cookie"]) {
		res.setHeader("Set-Cookie", response.headers["set-cookie"]);
	}

	return {
		props: {
			recommendedProducts: result.data.products
		}
	};
};

export default Home;
