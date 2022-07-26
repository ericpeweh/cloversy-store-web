// Dependencies
import React from "react";

// Components
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import WishlistTable from "../../components/WishlistTable/WishlistTable";
import { Stack } from "@mui/material";
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// Styles
import { WishlistContainer, WishlistTableContainer } from "./Wishlist.styles";

const links = [
	{ label: "Beranda", url: "#" },
	{ label: "Akun", url: "#" },
	{ label: "Wishlist Anda", url: "current" }
];

const Wishlist = () => {
	return (
		<WishlistContainer>
			<PageBreadcrumbs links={links} />
			<PageTitle>Wishlist anda</PageTitle>
			<WishlistTableContainer>
				<WishlistTable />
				<Stack mt={6} direction="row" justifyContent="flex-end" alignSelf="stretch">
					<Stack direction="row" spacing={2}>
						<Button endIcon={<DeleteIcon />}>Kosongkan wishlist</Button>
						<Button color="primary" endIcon={<LocalMallOutlinedIcon />}>
							Pindahkan semua ke keranjang
						</Button>
					</Stack>
				</Stack>
			</WishlistTableContainer>
		</WishlistContainer>
	);
};

export default Wishlist;
