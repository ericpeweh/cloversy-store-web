// Dependencies
import React, { useState, useEffect } from "react";

// Styles
import {
	FallbackImageContainer,
	FallbackImageText,
	ProductsContainer,
	ProductsContent,
	ProductsHeader
} from "./Products.styles";

// Icons
import TuneIcon from "@mui/icons-material/Tune";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

// Actions
import {
	openFilterDrawer,
	resetFilter,
	setPriceFilter,
	setPriceRange
} from "../../store/slices/productsSlice";

// Types
import { Product, ProductsSortValues } from "../../interfaces";

// Hooks
import { useGetProductsQuery } from "../../api/product.api";
import { shallowEqual } from "react-redux";
import { useRouter } from "next/router";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";

// Components
import {
	Badge,
	CircularProgress,
	Divider,
	Link,
	SelectChangeEvent,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../components/Button/Button";
import SelectInput from "../../components/SelectInput/SelectInput";
import ProductsContainerComponent from "../../components/ProductsContainer/ProductsContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";
import InfiniteScroller from "react-infinite-scroll-component";
import Image from "next/image";

const links = [
	{ label: "Beranda", url: "/" },
	{ label: "Produk", url: "current" }
];

type DisplayModeType = "list" | "card";

const Products = () => {
	const { query, push } = useRouter();
	const { q: searchQuery = "" } = query;

	const dispatch = useDispatch();
	const { brandFilter, priceFilter, isInitialized, priceRange } = useSelector(
		state => state.products,
		shallowEqual
	);
	const [products, setProducts] = useState<Product[]>([]);
	const [sortBy, setSortBy] = useState<ProductsSortValues>("id");
	const [currentPage, setCurrentPage] = useState(0);
	const [page, setPage] = useState(1);
	const [displayMode, setDisplayMode] = useState<DisplayModeType>("card");
	const isDisplayModeCard = displayMode === "card";

	const {
		data: productsData,
		isFetching: isGetProductsFetching,
		isLoading: isGetProductsLoading,
		isSuccess: isGetProductsSuccess,
		error: getProductsError,
		refetch: refetchProducts
	} = useGetProductsQuery({ q: searchQuery as string, page, brandFilter, sortBy, priceFilter });
	const productsError: any = getProductsError;
	const noDataFound = productsData?.data.products.length === 0;

	let filterCount = 0;
	if (brandFilter !== -1) filterCount += 1;
	if (priceFilter[0] !== priceRange[0] || priceFilter[1] !== priceRange[1]) filterCount += 1;

	useEffect(() => {
		if (isGetProductsSuccess) {
			if (!isInitialized) {
				dispatch(setPriceFilter(productsData.data.priceRange));
				dispatch(setPriceRange(productsData.data.priceRange));
			}
		}
	}, [productsData, isGetProductsSuccess, dispatch, isInitialized]);

	useEffect(() => {
		setProducts([]);
		setCurrentPage(0);
		setPage(1);
	}, [brandFilter, sortBy, priceFilter, searchQuery]);

	useEffect(() => {
		if (productsData && isGetProductsSuccess && !isGetProductsFetching) {
			if (currentPage < productsData.page) {
				setProducts(prev => [...prev, ...productsData.data.products]);
				setCurrentPage(productsData.page);
			}
		}
	}, [productsData, currentPage, isGetProductsSuccess, isGetProductsFetching]);

	const loadMoreHandler = () => {
		setPage(prev => prev + 1);
	};

	const displayModeChangeHandler = (_: React.SyntheticEvent, newDisplayMode: DisplayModeType) => {
		if (newDisplayMode !== null) {
			setDisplayMode(newDisplayMode);
		}
	};

	const showFilterDrawerHandler = () => {
		dispatch(openFilterDrawer());
	};

	const sortByChangeHandler = (e: SelectChangeEvent<unknown>) => {
		setSortBy(e.target.value as ProductsSortValues);
	};

	return (
		<ProductsContainer>
			<PageTitle>Daftar Produk</PageTitle>
			<ProductsHeader>
				<Breadcrumbs links={links} />
				<Stack
					direction="row"
					gap={2}
					sx={{
						alignItems: "center",
						justifyContent: { xs: "space-between", sm: "flex-end" },
						width: { xs: "100%", sm: "auto" },
						ml: { xs: 1, sm: 0 }
					}}
				>
					<Button
						sx={{ pr: "5rem !important", pl: 5 }}
						variant="text"
						startIcon={<TuneIcon />}
						endIcon={<Badge badgeContent={filterCount + ""} color="primary" sx={{ ml: 1 }}></Badge>}
						onClick={showFilterDrawerHandler}
					>
						Filters
					</Button>
					<Divider orientation="vertical" variant="middle" flexItem />
					<SelectInput
						options={[
							{ label: "Default sorting", value: "id" },
							{ label: "Sort by popularity", value: "popularity" },
							{ label: "Sort by rating", value: "rating" },
							{ label: "Sort by price: low to high", value: "low-to-high" },
							{ label: "Sort by price: high to low", value: "high-to-low" }
						]}
						value={sortBy}
						onChange={sortByChangeHandler}
						variant="standard"
						sx={{
							"&::before": {
								display: "none"
							},
							"&::after": {
								display: "none"
							}
						}}
					/>
					<Divider orientation="vertical" variant="middle" flexItem />
					<ToggleButtonGroup
						value={displayMode}
						exclusive
						onChange={displayModeChangeHandler}
						aria-label="products display mode"
						sx={{ border: "none" }}
					>
						<ToggleButton value="card" size="small" sx={{ border: "none" }}>
							<GridViewIcon />
						</ToggleButton>
						<ToggleButton value="list" size="small" sx={{ border: "none" }}>
							<TableRowsIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
			</ProductsHeader>
			{searchQuery && (
				<ProductsHeader sx={{ mt: 1 }}>
					<Stack direction="row" gap={2} alignItems="center">
						<Typography>
							Hasil pencarian untuk: <strong>{searchQuery}</strong>
							{",  "}
							<Link
								underline="always"
								color="primary"
								component="span"
								onClick={() => push("/products")}
								sx={{ cursor: "pointer", fontWeight: 500 }}
							>
								reset
							</Link>
						</Typography>
					</Stack>
				</ProductsHeader>
			)}
			{(brandFilter !== -1 ||
				(priceFilter[0] !== priceRange[0] && priceFilter[0] !== -1) ||
				(priceFilter[1] !== priceRange[1] && priceFilter[1] !== -1)) && (
				<ProductsHeader sx={{ mt: 1 }}>
					<Stack direction="row" gap={2} alignItems="center">
						<Typography>
							Hasil pencarian menggunakan <strong>{filterCount} filter</strong>
							{",  "}
							<Link
								underline="always"
								color="primary"
								component="span"
								onClick={() => dispatch(resetFilter())}
								sx={{ cursor: "pointer", fontWeight: 500 }}
							>
								reset
							</Link>
						</Typography>
					</Stack>
				</ProductsHeader>
			)}
			{isGetProductsFetching && (
				<FallbackContainer sx={{ minHeight: "50vh" }}>
					<CircularProgress />
				</FallbackContainer>
			)}
			{!isGetProductsLoading && !isGetProductsFetching && getProductsError && (
				<FallbackContainer>
					<ErrorMessage>{productsError.data?.message}</ErrorMessage>
					<BoxButton onClick={refetchProducts}>Try again</BoxButton>
				</FallbackContainer>
			)}
			{!isGetProductsLoading && isGetProductsSuccess && noDataFound && !isGetProductsFetching && (
				<FallbackImageContainer>
					<Image
						src="/images/no-product.png"
						alt="produk tidak ditemukan"
						height={512}
						width={512}
						layout="responsive"
					/>
					<FallbackImageText>Produk tidak ditemukan!</FallbackImageText>
				</FallbackImageContainer>
			)}
			<InfiniteScroller
				dataLength={products.length}
				style={{ height: "100%", width: "100%" }}
				next={loadMoreHandler}
				hasMore={page < (productsData?.totalPages || 0)}
				loader={
					currentPage !== 0 && (
						<FallbackContainer size="small">
							<CircularProgress />
						</FallbackContainer>
					)
				}
				scrollableTarget="scroller"
			>
				<ProductsContent>
					{isDisplayModeCard ? (
						<ProductsContainerComponent
							spacing={{ xs: 1, sm: 4, md: 2, xl: 4 }}
							rowSpacing={{ xs: 1, sm: 2, md: 4, xl: 6 }}
							size={{ xs: 6, lg: 4, xl: 3 }}
						>
							{products.map(productData => (
								<ProductCard productData={productData} key={productData.id} />
							))}
						</ProductsContainerComponent>
					) : (
						<ProductsContainerComponent
							spacing={{ xs: 1, md: 3, xl: 4 }}
							rowSpacing={{ xs: 1, md: 1, xl: 6 }}
							size={{ xs: 12, lg: 6 }}
						>
							{products.map(productData => (
								<ProductListItem productData={productData} key={productData.id} />
							))}
						</ProductsContainerComponent>
					)}
				</ProductsContent>
			</InfiniteScroller>
		</ProductsContainer>
	);
};

export default Products;
