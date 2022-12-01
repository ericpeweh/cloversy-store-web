// Dependencies
import React from "react";

// Styles
import {
	ContentCard,
	MenuContent,
	ContentTitle,
	MenuTitle,
	ContentBadge,
	MenuTitleContainer,
	InformationText
} from "./MyAccount.styles";

// Icons

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";

// Components
import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";

const MyAccount = () => {
	return (
		<>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Pesanan saya</MenuTitle>
				</Grid>
				<Grid item xs={6} md={3}>
					<ContentCard>
						<AccountBalanceWalletOutlinedIcon />
						<ContentTitle>
							Belum Bayar <ContentBadge>3</ContentBadge>
						</ContentTitle>
					</ContentCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ContentCard>
						<Inventory2OutlinedIcon />
						<ContentTitle>Dikemas</ContentTitle>
					</ContentCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ContentCard>
						<LocalShippingOutlinedIcon />
						<ContentTitle>
							Dikirim<ContentBadge>1</ContentBadge>
						</ContentTitle>
					</ContentCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ContentCard>
						<StarsOutlinedIcon />
						<ContentTitle>
							Beri Penilaian<ContentBadge>1</ContentBadge>
						</ContentTitle>
					</ContentCard>
				</Grid>
			</MenuContent>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Informasi akun</MenuTitle>
				</Grid>
				<Grid item xs={6}>
					<ContentCard clickable={false}>
						<MenuTitleContainer>
							<LoyaltyOutlinedIcon />
							Cloversy Credits
						</MenuTitleContainer>
						<ContentTitle>
							Poin anda: <ContentBadge>0</ContentBadge>
						</ContentTitle>
					</ContentCard>
				</Grid>
				<Grid item xs={12}>
					<InformationText>
						*Info: saat ini Cloversy credits belum dapat digunakan, kedepannya credits dapat
						ditukarkan dengan penawaran menarik
					</InformationText>
				</Grid>
			</MenuContent>
			<MenuContent container spacing={2}>
				<Grid item xs={12}>
					<MenuTitle>Terakhir dilihat</MenuTitle>
				</Grid>
				{/* <Grid item xs={6} sm={3}>
					<ProductCard size="small" disableActionButtons />
				</Grid>
				<Grid item xs={6} sm={3}>
					<ProductCard size="small" disableActionButtons />
				</Grid>
				<Grid item xs={6} sm={3} sx={{ mt: { xs: -2, sm: 0 } }}>
					<ProductCard size="small" disableActionButtons />
				</Grid>
				<Grid item xs={6} sm={3} sx={{ mt: { xs: -2, sm: 0 } }}>
					<ProductCard size="small" disableActionButtons />
				</Grid> */}
			</MenuContent>
		</>
	);
};

export default MyAccount;
