// Dependencies
import React from "react";

// Styles
import {
	CopyrightText,
	EmailInput,
	FooterBottom,
	FooterContainer,
	FooterContent,
	FooterList,
	FooterListItem,
	FooterListLink,
	FooterSection,
	FooterSectionTitle,
	FooterSubscribeForm,
	SocialIcon,
	SubscribeButton
} from "./Footer.styles";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Components
import { Divider, Grid, Stack } from "@mui/material";
import Link from "next/link";

const Footer = () => {
	return (
		<FooterContainer sx={{ ml: { xs: -4, lg: -6 } }}>
			<FooterContent container spacing={{ xs: 4, lg: 6 }}>
				<Grid item xs={12} md={6} lg={4}>
					<FooterSection>
						<FooterSectionTitle>Informasi</FooterSectionTitle>
						<FooterList>
							<FooterListItem>
								<Link href="/about">
									<FooterListLink>Tentang Kami</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/about">
									<FooterListLink>Kontak Kami</FooterListLink>
								</Link>
							</FooterListItem>
						</FooterList>
					</FooterSection>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FooterSection>
						<FooterSectionTitle>Layanan</FooterSectionTitle>
						<FooterList>
							<FooterListItem>
								<Link href="/tnc">
									<FooterListLink>Syarat & Ketentuan</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/pertanyaan">
									<FooterListLink>Pertanyaan Umum</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/pengembalian">
									<FooterListLink>Aturan Pengembalian</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/privasi">
									<FooterListLink>Aturan Privasi</FooterListLink>
								</Link>
							</FooterListItem>
						</FooterList>
					</FooterSection>
				</Grid>
				<Grid item xs={12} lg={4}>
					<FooterSection>
						<FooterSectionTitle>Langganan Berita Terbaru</FooterSectionTitle>
						<FooterSubscribeForm>
							<EmailInput variant="outlined" color="primary" placeholder="Masukkan alamat email" />
							<SubscribeButton size="small">Berlangganan</SubscribeButton>
						</FooterSubscribeForm>
					</FooterSection>
				</Grid>
			</FooterContent>
			<Divider sx={{ borderColor: "#3a3a3a" }} flexItem />
			<FooterBottom>
				<CopyrightText>&copy;2022 Clovesry.id - All Rights Reserved</CopyrightText>
				<Stack direction="row">
					<SocialIcon>
						<InstagramIcon sx={{ fontSize: { xs: "2.2rem", md: "large" } }} />
					</SocialIcon>
					<SocialIcon>
						<WhatsAppIcon sx={{ fontSize: { xs: "2.2rem", md: "large" } }} />
					</SocialIcon>
				</Stack>
			</FooterBottom>
		</FooterContainer>
	);
};

export default Footer;
