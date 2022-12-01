// Dependencies
import { CircularProgress, InputAdornment, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";

// Components
import CloseButton from "../CloseButton/CloseButton";

// Hooks
import useDebounce from "../../hooks/useDebounce";
import { useRouter } from "next/router";

// Styles
import {
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

interface SearchDrawerProps {
	open: boolean;
	onClose: () => void;
}

const SearchDrawer = ({ open, onClose }: SearchDrawerProps) => {
	const router = useRouter();
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
		if (open) {
			searchInputRef.current?.focus();
		}
	}, [open]);

	const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchInput(e.target.value);

	const showAllClickHandler = () => {
		router.push(`/products?q=${searchInputDebounced}`);
		onClose();
	};

	return (
		<SearchDrawerContainer open={open} anchor="top" onClose={onClose} keepMounted>
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
					variant="standard"
					inputRef={searchInputRef}
					value={searchInput}
					onChange={searchInputChangeHandler}
				/>
				<CloseButton onClick={onClose} sx={{ top: "3rem", right: "20vw" }} />
			</SearchBarContainer>
			<SearchResult>
				{isSearchProductsFetching && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isSearchProductsLoading && !isSearchProductsFetching && searchProductsError && (
					<FallbackContainer>
						<ErrorMessage>{searchProductsError.data?.message}</ErrorMessage>
						<BoxButton onClick={refetchSearchProducts}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{!isSearchProductsFetching && isSearchProductsSuccess && noDataFound && (
					<FallbackContainer>
						<Typography>No product found!</Typography>
					</FallbackContainer>
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
