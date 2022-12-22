// Dependencies
import React from "react";
import { shallowEqual } from "react-redux";

// Actions
import {
	closeCartSnackbar,
	closeProductView,
	resetCartSnackbarData
} from "../../store/slices/globalSlice";

// Styles
import {
	CardComponent,
	CardWrapper,
	CardImage,
	CustomSnackbar,
	CardImageContainer,
	Title,
	ProductText
} from "./AddToCartSnackbar.styles";

// Icons
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import { useRouter } from "next/router";

// Components
import CloseButton from "../CloseButton/CloseButton";
import { Link, Stack } from "@mui/material";

const AddToCartSnackbar = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { cartSnackbarData, showCartSnackbar } = useSelector(state => state.global, shallowEqual);

	const closeSnackbarHandler = (_?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") return;

		dispatch(closeCartSnackbar());
		setTimeout(() => {
			dispatch(resetCartSnackbarData());
		}, 500);
	};

	const closeProductViewModalHandler = () => {
		dispatch(closeProductView());
	};

	return (
		<CustomSnackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			autoHideDuration={3000}
			open={showCartSnackbar}
			onClose={closeSnackbarHandler}
			key={"add_product_to_cart"}
			sx={{ zIndex: 2000 }}
		>
			<CardComponent>
				<CloseButton
					onClick={closeSnackbarHandler}
					sx={{
						top: { xs: "1rem", sm: "1.5rem" },
						right: { xs: "1rem", sm: "1.5rem" },
						width: "3rem",
						height: "3rem",
						zIndex: 1
					}}
				/>
				<CardWrapper>
					<Title>
						<LocalMallOutlinedIcon />
						Produk dimasukkan ke keranjang!
					</Title>
					<Stack direction="row" gap={2}>
						<CardImageContainer>
							<CardImage
								component="img"
								image={(cartSnackbarData?.images || [])[0] || "/images/2.jpg"}
							/>
						</CardImageContainer>
						<ProductText>
							Berhasil menambahkan{" "}
							<Link
								underline="hover"
								color="primary"
								onClick={() => {
									closeProductViewModalHandler();
									router.push(`/products/${cartSnackbarData?.slug}`);
									closeSnackbarHandler();
								}}
								sx={{ cursor: "pointer", fontWeight: 500 }}
							>
								{cartSnackbarData?.title}
							</Link>
							{` ukuran EU ${cartSnackbarData?.size} sebanyak ${cartSnackbarData?.quantity} pasang ke `}
							<Link
								underline="hover"
								color="primary"
								onClick={() => {
									closeProductViewModalHandler();
									router.push(`/cart`);
									closeSnackbarHandler();
								}}
								sx={{ cursor: "pointer", fontWeight: 500 }}
							>
								Keranjang Belanja anda!
							</Link>
						</ProductText>
					</Stack>
				</CardWrapper>
			</CardComponent>
		</CustomSnackbar>
	);
};

export default AddToCartSnackbar;
