// Dependencies
import React from "react";
import Head from "next/head";
import { shallowEqual } from "react-redux";
import { NextPage } from "next";

// Hooks
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";

// Actions
import { closeFilterDrawer } from "../../store/slices/productsSlice";

// Components
import MainWrapper from "../../components/PageWrapper/MainWrapper";
import Products from "../../components/Products/Products";
import ProductViewModal from "../../components/ProductViewModal/ProductViewModal";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";

const ProductsList: NextPage = () => {
	const { showFilterDrawer } = useSelector(state => state.products, shallowEqual);
	const dispatch = useDispatch();

	const closeFilterDrawerHandler = () => {
		dispatch(closeFilterDrawer());
	};

	return (
		<>
			<Head>
				<title>Cloversy | Produk</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<FilterDrawer isOpen={showFilterDrawer} onClose={closeFilterDrawerHandler} />
				<ProductViewModal />
				<Products />
			</MainWrapper>
		</>
	);
};

export default ProductsList;
