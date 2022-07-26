// Dependencies
import { InputAdornment } from "@mui/material";
import React, { useEffect, useRef } from "react";

// Icons
import SearchIcon from "@mui/icons-material/Search";

// Components
import CloseButton from "../CloseButton/CloseButton";

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

interface SearchDrawerProps {
	open: boolean;
	onClose: () => void;
}

const SearchDrawer = ({ open, onClose }: SearchDrawerProps) => {
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (open) {
			searchInputRef.current?.focus();
		}
	}, [open]);

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
				/>
				<CloseButton onClick={onClose} sx={{ top: "3rem", right: "20vw" }} />
			</SearchBarContainer>
			<SearchResult>
				<ProductsContainer columns={4}>
					<ProductCard size="small" />
					<ProductCard size="small" />
					<ProductCard size="small" />
					<ProductCard size="small" />
				</ProductsContainer>
				<Button>Show all</Button>
			</SearchResult>
		</SearchDrawerContainer>
	);
};

export default SearchDrawer;
