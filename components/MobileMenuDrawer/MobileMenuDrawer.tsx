// Dependencies
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

// Styles
import {
	FallbackImageContainer,
	FallbackImageText,
	MobileMenuActionButtons,
	MobileMenuDrawerContainer,
	MobileMenuItem,
	MobileMenuLists,
	SearchInput,
	SearchResult
} from "./MobileMenuDrawer.styles";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Hooks
import { useSearchProductsQuery } from "../../api/product.api";
import useDebounce from "../../hooks/useDebounce";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

// Components
import {
	Divider,
	Typography,
	Stack,
	InputAdornment,
	ButtonBase,
	CircularProgress
} from "@mui/material";
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";
import FallbackContainer from "../FallbackContainer/FallbackContainer";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BoxButton from "../BoxButton/BoxButton";
import Image from "next/image";

interface MobileMenuDrawerProps {
	open: boolean;
	onClose: () => void;
}

const navigations = [
	{ label: "Beranda", path: "/" },
	{ label: "Produk", path: "/products" },
	{ label: "Tentang kami", path: "/about-us" },
	{ label: "Hubungi", path: "/contact-us" }
];

const MobileMenuDrawer = ({ open, onClose }: MobileMenuDrawerProps) => {
	const router = useRouter();
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchInput, setSearchInput] = useState("");
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

	const mobileMenuActions = [
		{
			title: "Akun saya",
			icon: <PermIdentityOutlinedIcon />,
			action: () => router.push("/account")
		},
		{ title: "Keranjang", icon: <ShoppingBagOutlinedIcon />, action: () => router.push("/cart") },
		{
			title: "Wishlist",
			icon: <FavoriteBorderOutlinedIcon />,
			action: () => router.push("/account/wishlist")
		}
	];

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
		<MobileMenuDrawerContainer open={open} onClose={onClose} anchor="left">
			<CloseButton onClick={onClose} sx={{ top: "2rem", left: "2rem" }} />
			<MobileMenuLists>
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
					autoComplete="off"
				/>
				{searchInputDebounced !== "" && (
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
										spacing={{ xs: 1, sm: 2 }}
										rowSpacing={{ xs: 1, sm: 2 }}
										size={{ xs: 6, sm: 6 }}
									>
										{searchProductsData?.data.products.map(product => (
											<ProductCard
												size="small"
												key={product.id}
												productData={product}
												openDetailsCallback={onClose}
											/>
										))}
									</ProductsContainer>
									<Button onClick={showAllClickHandler}>Show all</Button>
								</>
							)}
					</SearchResult>
				)}
				{navigations.map(item => (
					<Link href={item.path} key={item.label}>
						<MobileMenuItem onClick={onClose}>{item.label}</MobileMenuItem>
					</Link>
				))}
			</MobileMenuLists>
			<MobileMenuActionButtons>
				<Divider sx={{ mb: "2rem" }} />
				{mobileMenuActions.map(item => {
					if (!isAuthenticated && item.title !== "Cart") return null;

					return (
						<ButtonBase
							key={item.title}
							disableTouchRipple={true}
							onClick={() => {
								onClose();
								item.action();
							}}
						>
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								sx={{ p: { xs: "1.5rem 0", sm: "2rem 0" }, width: "100%" }}
							>
								<Typography>{item.title}</Typography>
								{item.icon}
							</Stack>
						</ButtonBase>
					);
				})}
				<Divider sx={{ mb: "2rem" }} />
				{!isAuthenticated && (
					<Typography sx={{ mt: 1, mb: 2, textAlign: "center" }}>
						Please login to access wishlist & more menu
					</Typography>
				)}
				{!isAuthenticated && (
					<Button
						endIcon={<LoginIcon />}
						onClick={() =>
							loginWithRedirect({
								appState: {
									returnTo: router.asPath
								}
							})
						}
					>
						Login
					</Button>
				)}
				{isAuthenticated && (
					<Button endIcon={<LogoutIcon />} onClick={() => logout()}>
						Logout
					</Button>
				)}
			</MobileMenuActionButtons>
		</MobileMenuDrawerContainer>
	);
};

export default MobileMenuDrawer;
