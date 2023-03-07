// Dependencies
import React from "react";

// Hooks
import { useGetWishlistQuery } from "../../api/wishlist.api";
import useSelector from "../../hooks/useSelector";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";

// Styles
import { WishlistContainer, WishlistTableContainer } from "./Wishlist.styles";

// Components
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import WishlistTable from "../../components/WishlistTable/WishlistTable";
import { CircularProgress, Stack, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import FallbackContainer from "../../components/FallbackContainer/FallbackContainer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import BoxButton from "../../components/BoxButton/BoxButton";
import ProductViewModal from "../../components/ProductViewModal/ProductViewModal";
import useWishlist from "../../hooks/useWishlist";

const links = [
	{ label: "Beranda", url: "/" },
	{ label: "Akun", url: "/account" },
	{ label: "Wishlist Anda", url: "current" }
];

const Wishlist = () => {
	const isAuth = useSelector(state => state.auth.isAuth);

	const { emptyWishlistHandler, isEmptyWishlistLoading } = useWishlist();

	const {
		data: wishlistData,
		isLoading: isGetWishlistLoading,
		isSuccess: isGetWishlistSuccess,
		error: getWishlistErrorData,
		refetch: refetchWishlist
	} = useGetWishlistQuery(isAuth, {
		skip: !isAuth
	});
	const getWishlistError: any = getWishlistErrorData;
	const noDataFound = wishlistData?.data.wishlist.length === 0;

	return (
		<WishlistContainer>
			<ProductViewModal />
			<PageBreadcrumbs links={links} />
			<PageTitle>Wishlist anda</PageTitle>
			<WishlistTableContainer>
				{isGetWishlistLoading && (
					<FallbackContainer>
						<CircularProgress />
					</FallbackContainer>
				)}
				{!isGetWishlistLoading && !isGetWishlistSuccess && getWishlistError && (
					<FallbackContainer>
						<ErrorMessage>
							{getWishlistError?.data?.message || "Error occured while fetching wishlist data."}
						</ErrorMessage>
						<BoxButton onClick={refetchWishlist}>Try again</BoxButton>
					</FallbackContainer>
				)}
				{wishlistData && isGetWishlistSuccess && !noDataFound && !isGetWishlistLoading && (
					<WishlistTable wishlistData={wishlistData?.data.wishlist} />
				)}
				{!isGetWishlistLoading && isGetWishlistSuccess && noDataFound && (
					<FallbackContainer>
						<Typography>You have no items in your wishlist.</Typography>
					</FallbackContainer>
				)}
				<Stack
					mt={{ xs: 4, sm: 5, lg: 6 }}
					direction="row"
					justifyContent="flex-end"
					alignSelf="stretch"
				>
					<Stack
						spacing={{ xs: 1, sm: 2 }}
						direction={{ xs: "column", sm: "row" }}
						flex={1}
						justifyContent={{ xs: "stretch", sm: "flex-end" }}
					>
						{!noDataFound && (
							<Button
								endIcon={<DeleteIcon />}
								onClick={emptyWishlistHandler}
								loading={isEmptyWishlistLoading}
							>
								Kosongkan wishlist
							</Button>
						)}
					</Stack>
				</Stack>
			</WishlistTableContainer>
		</WishlistContainer>
	);
};

export default Wishlist;
