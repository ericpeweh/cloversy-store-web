// Dependencies
import { useRouter } from "next/router";
import Link from "next/link";

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
import useWindowSize from "../../hooks/useWindowSize";

// Components
import { Avatar, Divider, Grid } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

interface AccountWrapperProps {
	children: React.ReactElement | React.ReactElement[];
	title: string;
}

const AccountWrapper = ({ children, title }: AccountWrapperProps) => {
	const router = useRouter();
	const currentPath = router.asPath;
	const { wWidth } = useWindowSize();

	return (
		<MyAccountContainer>
			<PageTitle>{title}</PageTitle>
			<OuterContainer>
				<GridContainer container spacing={{ xs: 2, md: 3, lg: 4 }}>
					<AccountMenu item xs={12} lg={3}>
						<Avatar alt="profile icon" src="/images/1.jpg" sx={{ width: 60, height: 60 }} />
						<AccountName>Hello, Mikici Cimol</AccountName>
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
								<MenuItem>
									<LogoutOutlinedIcon />
									<MenuLabel>Logout</MenuLabel>
								</MenuItem>
							</MenuList>
						</MenuContainer>
					</AccountMenu>
					{wWidth <= 1200 && (
						<Grid item xs={12}>
							<Divider />
						</Grid>
					)}
					<ContentContainer item xs={12} lg={9}>
						{children}
					</ContentContainer>
				</GridContainer>
			</OuterContainer>
		</MyAccountContainer>
	);
};

export default AccountWrapper;
