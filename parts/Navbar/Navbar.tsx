// Dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Hooks
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import useModal from "../../hooks/useModal";
import useMenu from "../../hooks/useMenu";
import useWindowSize from "../../hooks/useWindowSize";

// Styles
import {
	HeaderActions,
	HeaderContainer,
	HeaderLogo,
	NavLink,
	NavLinks,
	NavListItem,
	NavLists
} from "./Navbar.styles";

// Actions
import { openCartDrawer, openSearchDrawer } from "../../store/slices/globalSlice";

// Icons
import { Search, ShoppingBagOutlined, Menu as MenuIcon } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Components
import { Avatar, Badge, Button, ButtonBase, IconButton } from "@mui/material";
import MobileMenuDrawer from "../../components/MobileMenuDrawer/MobileMenuDrawer";
import Menu from "../../components/Menu/Menu";

const navigations = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "About us", path: "/about-us" },
	{ label: "Contact us", path: "/contact-us" }
];

const Navbar = () => {
	const router = useRouter();
	const currentPath = router.pathname;
	const dispatch = useDispatch();
	const { wWidth } = useWindowSize();

	const profilePicture = useSelector(state => state.auth.profile_picture);
	const cartItems = useSelector(state => state.global.userCart);
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const cartQuantityCount = cartItems.reduce((totalQty, item) => (totalQty += item.quantity), 0);

	const {
		isOpen: isMobileMenuOpen,
		openHandler: openMobileMenuHandler,
		closeHandler: closeMobileMenuHandler
	} = useModal();

	const {
		isMenuOpen: isAccountMenuOpen,
		openHandler: openAccountMenuHandler,
		closeHandler: closeAccountMenuHandler,
		anchorEl: accountMenuAnchorEl
	} = useMenu();

	const openSearchDrawerHandler = () => {
		dispatch(openSearchDrawer());
	};

	const openCartDrawerHandler = () => {
		dispatch(openCartDrawer());
	};

	return (
		<HeaderContainer id="navbar">
			{wWidth >= 900 && isAuthenticated && (
				<Menu
					id="account-menu"
					isOpen={isAccountMenuOpen}
					items={[
						{ label: "Dashboard", action: () => router.push("/account"), id: "dashboard" },
						{ label: "Pesanan saya", action: () => router.push("/account/orders"), id: "orders" },
						{ label: "Wishlist", action: () => router.push("/account/wishlist"), id: "wishlist" },
						{ label: "Detail akun", action: () => router.push("/account/details"), id: "account" },
						{
							label: "Logout",
							action: () => logout({ returnTo: "http://localhost:3000/" }),
							id: "logout"
						}
					]}
					anchorEl={accountMenuAnchorEl}
					onClose={closeAccountMenuHandler}
				/>
			)}
			{wWidth < 900 && (
				<MobileMenuDrawer open={isMobileMenuOpen} onClose={closeMobileMenuHandler} />
			)}
			<IconButton
				aria-label="mobile-menu"
				onClick={openMobileMenuHandler}
				sx={{
					display: {
						sm: "flex",
						md: "none"
					}
				}}
			>
				<MenuIcon
					sx={{
						fontSize: 30
					}}
					color="secondary"
				/>
			</IconButton>
			<Link href="/">
				<HeaderLogo>
					<Image src="/images/logo.png" alt="logo" layout="responsive" width={200} height={80} />
				</HeaderLogo>
			</Link>
			<NavLinks>
				<NavLists>
					{navigations.map(nav => (
						<NavListItem key={nav.path} onClick={() => router.push(nav.path)}>
							<NavLink active={currentPath === nav.path}>{nav.label}</NavLink>
						</NavListItem>
					))}
				</NavLists>
			</NavLinks>
			<HeaderActions>
				{!isAuthenticated && (
					<Button
						variant="text"
						size="large"
						disableFocusRipple
						color="secondary"
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

				<IconButton aria-label="search" onClick={openSearchDrawerHandler}>
					<Search sx={{ fontSize: 30 }} color="secondary" />
				</IconButton>
				<IconButton aria-label="shopping-cart" onClick={openCartDrawerHandler}>
					<Badge badgeContent={cartQuantityCount} color="primary">
						<ShoppingBagOutlined sx={{ fontSize: 30 }} color="secondary" />
					</Badge>
				</IconButton>
				{wWidth >= 900 && isAuthenticated && (
					<ButtonBase sx={{ borderRadius: "0.5rem", p: "0.5rem" }} onClick={openAccountMenuHandler}>
						<Avatar
							src={profilePicture}
							alt="user profile"
							sx={{
								width: { xs: "3rem", sm: "4rem", md: "5rem" },
								height: { xs: "3rem", sm: "4rem", md: "5rem" },
								border: "1px solid #999"
							}}
							imgProps={{ referrerPolicy: "no-referrer" }}
						/>
						<ArrowDropDownIcon />
					</ButtonBase>
				)}
			</HeaderActions>
		</HeaderContainer>
	);
};

export default Navbar;
