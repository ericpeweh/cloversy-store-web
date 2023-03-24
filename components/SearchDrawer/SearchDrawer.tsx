// Dependencies
import { CircularProgress, InputAdornment, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";

// Components
import CloseButton from "../CloseButton/CloseButton";

// Actions
import { closeSearchDrawer } from "../../store/slices/globalSlice";

// Hooks
import useDebounce from "../../hooks/useDebounce";
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useRouter } from "next/router";

// Styles
import {
	FallbackImageContainer,
	FallbackImageText,
	SearchBarContainer,
	SearchDrawerContainer,
	SearchInput,
	SearchResult
} from "./SearchDrawer.styles";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import { useSearchProductsQuery } from "../../api/product.api";
import FallbackContainer from "../FallbackContainer/FallbackContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BoxButton from "../BoxButton/BoxButton";
import Image from "next/image";

const SearchDrawer = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const showSearchModal = useSelector(state => state.global.showSearchModal);
	const [searchInput, setSearchInput] = useState("");
	const searchInputRef = useRef<HTMLInputElement>(null);

	const searchInputDebounced = useDebounce(searchInput, 500);

	const {
		data: searchProductsData,
		isFetching: isSearchProductsFetching,
		isLoading: isSearchProductsLoading,
		isSuccess: isSearchProductsSuccess,
		error: searchProductsErrorData,
		refetch: refetchSearchProducts
	} = useSearchProductsQuery({ q: searchInputDebounced }, { skip: !open });
	const searchProductsError: any = searchProductsErrorData;
	const noDataFound = searchProductsData?.data.products.length === 0;

	useEffect(() => {
		if (showSearchModal) {
			searchInputRef.current?.focus();
		}
	}, [showSearchModal]);

	const closeSearchDrawerHandler = () => dispatch(closeSearchDrawer());

	const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchInput(e.target.value);

	const showAllClickHandler = () => {
		router.push(`/products?q=${searchInputDebounced}`);
		closeSearchDrawerHandler();
	};

	return (
		<SearchDrawerContainer
			open={showSearchModal}
			anchor="top"
			onClose={closeSearchDrawerHandler}
			keepMounted
		>
			<SearchBarContainer>
				<SearchInput
					fullWidth
					id="searchbar"
					placeholder="Type to search..."
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						)
					}}
					inputProps={{
						"data-testid": "search-input"
					}}
					variant="standard"
					inputRef={searchInputRef}
					value={searchInput}
					onChange={searchInputChangeHandler}
					autoComplete="off"
				/>
				<CloseButton onClick={closeSearchDrawerHandler} sx={{ top: "3rem", right: "20vw" }} />
			</SearchBarContainer>
			<SearchResult>
				{isSearchProductsFetching && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isSearchProductsLoading && !isSearchProductsFetching && searchProductsError && (
					<FallbackContainer>
						<ErrorMessage>
							{searchProductsError?.data?.message || "Error occured while fetching search results."}
						</ErrorMessage>
						<BoxButton onClick={refetchSearchProducts}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{!isSearchProductsFetching && isSearchProductsSuccess && noDataFound && (
					<>
						<FallbackImageContainer>
							<Image
								src="/images/no-product.png"
								alt="produk tidak ditemukan"
								height={512}
								width={512}
								layout="responsive"
							/>
						</FallbackImageContainer>
						<FallbackImageText>Produk tidak ditemukan!</FallbackImageText>
					</>
				)}
				{isSearchProductsSuccess &&
					!isSearchProductsFetching &&
					searchProductsData &&
					!noDataFound && (
						<>
							<ProductsContainer
								spacing={{ xs: 1, sm: 2, xl: 4 }}
								rowSpacing={{ xs: 1, sm: 2, md: 4, xl: 6 }}
								size={{ xs: 6, sm: 6, lg: 3 }}
							>
								{searchProductsData?.data.products.map(product => (
									<ProductCard size="small" key={product.id} productData={product} />
								))}
							</ProductsContainer>
							<Button onClick={showAllClickHandler}>Show all</Button>
						</>
					)}
			</SearchResult>
		</SearchDrawerContainer>
	);
};

export default SearchDrawer;
