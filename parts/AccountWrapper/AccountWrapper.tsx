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

// Components
import { Avatar } from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";

interface AccountWrapperProps {
	children: React.ReactElement | React.ReactElement[];
	title: string;
}

const AccountWrapper = ({ children, title }: AccountWrapperProps) => {
	const router = useRouter();
	const currentPath = router.asPath;

	return (
		<MyAccountContainer>
			<PageTitle>{title}</PageTitle>
			<OuterContainer>
				<GridContainer container spacing={4}>
					<AccountMenu item xs={3}>
						<Avatar alt="profile icon" src="/images/1.jpg" sx={{ width: 60, height: 60 }} />
						<AccountName>Hello, Mikici Cimol</AccountName>
						<MenuContainer>
							<MenuList>
								<Link href="/account">
									<MenuItem active={currentPath === "/account"}>
										<DashboardOutlinedIcon />
										<MenuLabel>Dashboard</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/orders">
									<MenuItem active={currentPath === "/account/orders"}>
										<ShoppingBasketOutlinedIcon />
										<MenuLabel>Pesanan saya</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/wishlist">
									<MenuItem active={currentPath === "/account/wishlist"}>
										<FavoriteBorderOutlinedIcon />
										<MenuLabel>Wishlist</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/voucher">
									<MenuItem active={currentPath === "/account/voucher"}>
										<ConfirmationNumberOutlinedIcon />
										<MenuLabel>Voucher</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/address">
									<MenuItem active={currentPath === "/account/address"}>
										<RoomOutlinedIcon />
										<MenuLabel>Alamat pengiriman</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/chat">
									<MenuItem active={currentPath === "/account/chat"}>
										<ChatOutlinedIcon />
										<MenuLabel>Pesan</MenuLabel>
									</MenuItem>
								</Link>
								<Link href="/account/details">
									<MenuItem active={currentPath === "/account/details"}>
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
					<ContentContainer item xs={9}>
						{children}
					</ContentContainer>
				</GridContainer>
			</OuterContainer>
		</MyAccountContainer>
	);
};

export default AccountWrapper;
