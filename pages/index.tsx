// Dependencies
import type { NextPage } from "next";
import Head from "next/head";
import { shallowEqual } from "react-redux";

// MUI
import { Divider } from "@mui/material";

// Hooks
import useSelector from "../hooks/useSelector";
import useDispatch from "../hooks/useDispatch";

// Action
import { closeSearchDrawer, closeCartDrawer } from "../store/slices/homeSlice";

// Components
import BigCarousel from "../components/BigCarousel/BigCarousel";
import BrandCardList from "../components/BrandCardList/BrandCardList";
import Recommendations from "../components/Recommendations/Recommendations";
import LinkBanners from "../components/LinkBanners/LinkBanners";
import Footer from "../components/Footer/Footer";
import SearchDrawer from "../components/SearchDrawer/SearchDrawer";
import CartDrawer from "../components/CartDrawer/CartDrawer";

const Home: NextPage = () => {
	const { showSearchModal, showCartModal } = useSelector(state => state.home, shallowEqual);
	const dispatch = useDispatch();

	return (
		<div>
			<Head>
				<title>Cloversy Store</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<SearchDrawer open={showSearchModal} onClose={() => dispatch(closeSearchDrawer())} />
				<CartDrawer open={showCartModal} onClose={() => dispatch(closeCartDrawer())} />
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
