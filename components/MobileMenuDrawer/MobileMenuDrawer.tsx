// Dependencies
import React, { useEffect, useRef } from "react";
import Link from "next/link";

// Styles
import {
	MobileMenuActionButtons,
	MobileMenuDrawerContainer,
	MobileMenuItem,
	MobileMenuLists,
	SearchInput
} from "./MobileMenuDrawer.styles";

// Icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Components
import { ListItemAvatar, Divider, Typography, Stack, InputAdornment } from "@mui/material";
import Button from "../Button/Button";
import QuantityInput from "../QuantityInput/QuantityInput";
import CloseButton from "../CloseButton/CloseButton";

interface MobileMenuDrawerProps {
	open: boolean;
	onClose: () => void;
}

const mobileMenuActions = [
	{ title: "My Profile", icon: <PermIdentityOutlinedIcon />, action: () => {} },
	{ title: "Cart", icon: <ShoppingBagOutlinedIcon />, action: () => {} },
	{ title: "Wishlist", icon: <FavoriteBorderOutlinedIcon />, action: () => {} }
];

const navigations = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "About us", path: "/about-us" },
	{ label: "Contact us", path: "/contact-us" }
];

const MobileMenuDrawer = ({ open, onClose }: MobileMenuDrawerProps) => {
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (open) {
			searchInputRef.current?.focus();
		}
	}, [open]);

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
				/>
				{navigations.map(item => (
					<Link href={item.path} key={item.label}>
						<MobileMenuItem>{item.label}</MobileMenuItem>
					</Link>
				))}
			</MobileMenuLists>
			<MobileMenuActionButtons>
				<Divider sx={{ mb: "2rem" }} />
				{mobileMenuActions.map(item => (
					<Stack
						key={item.title}
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ cursor: "pointer", p: "2rem 0" }}
					>
						<Typography fontSize="1.8rem">{item.title}</Typography>
						{item.icon}
					</Stack>
				))}
				<Divider sx={{ mb: "2rem" }} />
				<Typography fontSize="1.7rem" mb="1rem" sx={{ mt: 2 }}>
					Please login to access wishlist & cart
				</Typography>
				<Button endIcon={<LoginIcon />}>Login</Button>
				{false && <Button endIcon={<LogoutIcon />}>Logout</Button>}
			</MobileMenuActionButtons>
		</MobileMenuDrawerContainer>
	);
};

export default MobileMenuDrawer;
