// Dependencies
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const Navbar = () => {
	return (
		<HeaderContainer>
			<Link href="/">
				<HeaderLogo>
					<Image src="/images/logo.png" alt="logo" layout="responsive" width={200} height={80} />
				</HeaderLogo>
			</Link>
			<NavLinks>
				<NavLists>
					<NavListItem>
						<Link href="/">
							<NavLink>Homepage</NavLink>
						</Link>
					</NavListItem>
					<NavListItem>
						<Link href="/products">
							<NavLink>Products</NavLink>
						</Link>
					</NavListItem>
					<NavListItem>
						<Link href="/about">
							<NavLink>About us</NavLink>
						</Link>
					</NavListItem>
					<NavListItem>
						<Link href="/contact">
							<NavLink>Contact us</NavLink>
						</Link>
					</NavListItem>
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
