// Dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Hooks
import useDispatch from "../../hooks/useDispatch";

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

// Components
import { Button, IconButton } from "@mui/material";
import MobileMenuDrawer from "../../components/MobileMenuDrawer/MobileMenuDrawer";

// Hooks
import useModal from "../../hooks/useModal";

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

	const {
		isOpen: isMobileMenuOpen,
		openHandler: openMobileMenuHandler,
		closeHandler: closeMobileMenuHandler
	} = useModal();

	const openSearchDrawerHandler = () => {
		dispatch(openSearchDrawer());
	};

	const openCartDrawerHandler = () => {
		dispatch(openCartDrawer());
	};

	return (
		<HeaderContainer id="navbar">
			<MobileMenuDrawer open={isMobileMenuOpen} onClose={closeMobileMenuHandler} />
			<IconButton
				aria-label="mobile-menu"
				onClick={openMobileMenuHandler}
				sx={{
					display: {
						xs: "flex",
						sm: "none"
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
						<NavListItem key={nav.path}>
							<Link href={nav.path}>
								<NavLink active={currentPath === nav.path}>{nav.label}</NavLink>
							</Link>
						</NavListItem>
					))}
				</NavLists>
			</NavLinks>
			<HeaderActions>
				<Button variant="text" size="large" disableFocusRipple color="secondary">
					Login
				</Button>
				<IconButton aria-label="search" onClick={openSearchDrawerHandler}>
					<Search sx={{ fontSize: 30 }} color="secondary" />
				</IconButton>
				<IconButton aria-label="shopping-cart" onClick={openCartDrawerHandler}>
					<ShoppingBagOutlined sx={{ fontSize: 30 }} color="secondary" />
				</IconButton>
			</HeaderActions>
		</HeaderContainer>
	);
};

export default Navbar;
