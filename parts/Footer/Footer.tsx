// Dependencies
import React, { useState } from "react";
import * as Yup from "yup";

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

// Hooks
import { useSubscribeToEmailMutation } from "../../api/subscription.api";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Components
import { Alert, Divider, Grid, Stack, Link as MUILink } from "@mui/material";
import Link from "next/link";

const EmailSchema = Yup.string()
	.email("Email tidak valid!")
	.required("Mohon masukkan email untuk subscribe");

const Footer = () => {
	const [emailInput, setEmailInput] = useState("");
	const [emailInputError, setEmailInputError] = useState("");

	const [
		subscribeToEmail,
		{
			isLoading: isSubscribeToEmailLoading,
			reset: resetSubscribeToEmail,
			isSuccess: isSubscribeToEmailSuccess
		}
	] = useSubscribeToEmailMutation();

	const subscribeToEmailHandler = async (email: string) => {
		try {
			resetSubscribeToEmail();
			setEmailInputError("");
			await EmailSchema.validate(email);

			const { status, error } = await subscribeToEmail(email).unwrap();

			if (status === "success") {
				setEmailInput("");
			}
			if (status === "error" && error) setEmailInputError(error);
		} catch (error: any) {
			if (error.name === "ValidationError") {
				setEmailInputError(error.errors[0]);
			} else {
				setEmailInputError(error);
			}
		}
	};

	return (
		<FooterContainer sx={{ ml: { xs: -4, lg: -6 } }}>
			<FooterContent container spacing={{ xs: 4, lg: 6 }}>
				<Grid item xs={12} md={6} lg={4}>
					<FooterSection>
						<FooterSectionTitle>Informasi</FooterSectionTitle>
						<FooterList>
							<FooterListItem>
								<Link href="/about-us">
									<FooterListLink>Tentang Kami</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/contact-us">
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
								<Link href="/terms-conditions">
									<FooterListLink>Syarat & Ketentuan</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/faq">
									<FooterListLink>Pertanyaan Umum</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/return-policy">
									<FooterListLink>Aturan Pengembalian</FooterListLink>
								</Link>
							</FooterListItem>
							<FooterListItem>
								<Link href="/privacy-policy">
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
							<EmailInput
								variant="outlined"
								color="primary"
								placeholder="Masukkan alamat email"
								value={emailInput}
								onChange={e => setEmailInput(e.target.value)}
								error={Boolean(emailInputError)}
							/>
							<SubscribeButton
								size="small"
								onClick={() => subscribeToEmailHandler(emailInput)}
								loading={isSubscribeToEmailLoading}
							>
								Berlangganan
							</SubscribeButton>
							{!isSubscribeToEmailLoading && emailInputError && (
								<Alert severity="error" onClose={() => setEmailInputError("")}>
									{emailInputError}
								</Alert>
							)}
							{!isSubscribeToEmailLoading && isSubscribeToEmailSuccess && (
								<Alert severity="success" onClose={() => resetSubscribeToEmail()}>
									Berhasil berlangganan.
								</Alert>
							)}
						</FooterSubscribeForm>
					</FooterSection>
				</Grid>
			</FooterContent>
			<Divider sx={{ borderColor: "#3a3a3a" }} flexItem />
			<FooterBottom>
				<CopyrightText>&copy;2023 Cloversy.id - All Rights Reserved</CopyrightText>
				<Stack direction="row">
					<MUILink target="_blank" rel="noreferrer" href="https://instagram.com/cloversy.id">
						<SocialIcon>
							<InstagramIcon sx={{ fontSize: { xs: "2.2rem", md: "large" } }} />
						</SocialIcon>
					</MUILink>
					<MUILink
						target="_blank"
						rel="noreferrer"
						href="https://api.whatsapp.com/send?phone=6287818001061&text=Halo,%20Saya%20mau%20Konsultasi%20/%20Design%20|%20CLOVERSY"
					>
						<SocialIcon>
							<WhatsAppIcon sx={{ fontSize: { xs: "2.2rem", md: "large" } }} />
						</SocialIcon>
					</MUILink>
				</Stack>
			</FooterBottom>
		</FooterContainer>
	);
};

export default Footer;
