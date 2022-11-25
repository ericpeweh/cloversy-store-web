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
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

// Components
import { Divider, Typography, Stack, InputAdornment, ButtonBase } from "@mui/material";
import Button from "../Button/Button";
import CloseButton from "../CloseButton/CloseButton";

interface MobileMenuDrawerProps {
	open: boolean;
	onClose: () => void;
}

const navigations = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "About us", path: "/about-us" },
	{ label: "Contact us", path: "/contact-us" }
];

const MobileMenuDrawer = ({ open, onClose }: MobileMenuDrawerProps) => {
	const router = useRouter();
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const searchInputRef = useRef<HTMLInputElement>(null);

	const mobileMenuActions = [
		{
			title: "My Profile",
			icon: <PermIdentityOutlinedIcon />,
			action: () => router.push("/account")
		},
		{ title: "Cart", icon: <ShoppingBagOutlinedIcon />, action: () => router.push("/cart") },
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
					<Button endIcon={<LoginIcon />} onClick={loginWithRedirect}>
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
