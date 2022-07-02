// Dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

// Icons
import { Search, ShoppingBagOutlined } from "@mui/icons-material";

// Components
import { Button, IconButton } from "@mui/material";

const navigations = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "About us", path: "/about" },
	{ label: "Contact us", path: "/contact" }
];

const Navbar = () => {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<HeaderContainer>
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
				<IconButton aria-label="search">
					<Search sx={{ fontSize: 30 }} color="secondary" />
				</IconButton>
				<IconButton aria-label="shopping-cart">
					<ShoppingBagOutlined sx={{ fontSize: 30 }} color="secondary" />
				</IconButton>
			</HeaderActions>
		</HeaderContainer>
	);
};

export default Navbar;
