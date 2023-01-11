// Dependencies
import { useRouter } from "next/router";
import Link from "next/link";
import { shallowEqual } from "react-redux";

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

// Styles
import {
	AccountMenu,
	AccountName,
	GridContainer,
	MenuContainer,
	MenuItem,
	MenuLabel,
	MenuList,
	MyAccountContainer,
	OuterContainer,
	ContentContainer
} from "./AccountWrapper.styles";

// Hooks
import useSelector from "../../hooks/useSelector";
import { useAuth0 } from "@auth0/auth0-react";

// Config
import { unsubscribeFromPush } from "../../config/firebaseInit";

// Components
import { Avatar, Divider, Grid, Skeleton } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

interface AccountWrapperProps {
	children: React.ReactElement | React.ReactElement[];
	title: string;
}

const AccountWrapper = ({ children, title }: AccountWrapperProps) => {
	const { logout } = useAuth0();
	const {
		full_name,
		profile_picture,
		status,
		token: authToken
	} = useSelector(state => state.auth, shallowEqual);
	const router = useRouter();
	const currentPath = router.asPath;

	const logoutHandler = async () => {
		await unsubscribeFromPush(authToken);
		logout({ returnTo: "http://localhost:3000/" });
	};

	return (
		<MyAccountContainer>
			<PageTitle>{title}</PageTitle>
			<OuterContainer>
				<GridContainer container spacing={{ xs: 2, md: 3, lg: 4 }}>
					<AccountMenu item xs={12} lg={3}>
						{status === "loading" ? (
							<Skeleton variant="circular" width={60} height={60} animation="wave" />
						) : (
							<Avatar
								alt="profile icon"
								src={profile_picture}
								sx={{ width: 60, height: 60, border: "1px solid #999" }}
							/>
						)}
						<AccountName>{status === "loading" ? "Loading..." : `Hello, ${full_name}`}</AccountName>
						<MenuContainer>
							<MenuList>
								<Link href="/account">
									<MenuItem isActive={currentPath === "/account"}>
										<DashboardOutlinedIcon />
										<MenuLabel>Dashboard</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/orders">
									<MenuItem isActive={currentPath === "/account/orders"}>
										<ShoppingBasketOutlinedIcon />
										<MenuLabel>Pesanan saya</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/wishlist">
									<MenuItem isActive={currentPath === "/account/wishlist"}>
										<FavoriteBorderOutlinedIcon />
										<MenuLabel>Wishlist</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/voucher">
									<MenuItem isActive={currentPath === "/account/voucher"}>
										<ConfirmationNumberOutlinedIcon />
										<MenuLabel>Voucher</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/address">
									<MenuItem isActive={currentPath === "/account/address"}>
										<RoomOutlinedIcon />
										<MenuLabel>Alamat pengiriman</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/chat">
									<MenuItem isActive={currentPath === "/account/chat"}>
										<ChatOutlinedIcon />
										<MenuLabel>Pesan</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/details">
									<MenuItem isActive={currentPath === "/account/details"}>
										<PermIdentityOutlinedIcon />
										<MenuLabel>Detail akun</MenuLabel>
									</MenuItem>
								</Link>
								<MenuItem onClick={logoutHandler}>
									<LogoutOutlinedIcon />
									<MenuLabel>Logout</MenuLabel>
								</MenuItem>
							</MenuList>
						</MenuContainer>
					</AccountMenu>
					<Grid
						item
						xs={12}
						sx={{
							"@media screen and (min-width: 1200px)": {
								display: "none"
							}
						}}
					>
						<Divider />
					</Grid>
					<ContentContainer item xs={12} lg={9}>
						{children}
					</ContentContainer>
				</GridContainer>
			</OuterContainer>
		</MyAccountContainer>
	);
};

export default AccountWrapper;
