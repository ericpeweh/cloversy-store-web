// Dependencies
import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

// Styles
import {
	AboutUsContainer,
	AboutUsHero,
	Content,
	ContentContainer,
	ContentDescription,
	ContentImage,
	ContentItem,
	ContentTag,
	ContentTitle,
	HeroDescription,
	HeroTitle,
	SignatureContainer
} from "./AboutUs.styles";

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<AboutUsHero>
				<HeroTitle>Be Special!</HeroTitle>
				<HeroDescription>
					Jadilah spesial dengan memiliki sesuatu yang unik dan bernilai melalui perantara seni
					lukisan dengan makna atau memori yang kamu inginkan pada produk- produk yang kamu gunakan.
				</HeroDescription>
			</AboutUsHero>
			<ContentContainer container spacing={{ xs: 2, md: 3, xl: 6 }}>
				<ContentItem item xs={12} md={6}>
					<ContentImage>
						<Image
							src="/images/about-us-2.webp"
							alt="content image"
							layout="responsive"
							width={1920}
							height={1080}
						/>
					</ContentImage>
				</ContentItem>
				<ContentItem item xs={12} md={6}>
					<Content textLeft>
						<ContentTag>Informasi</ContentTag>
						<ContentTitle>Custom Painting Untuk Berbagai Produk</ContentTitle>
						<ContentDescription>
							Kami menyediakan layanan custom painting untuk berbagai produk dan media berbahan
							kulit (leather) dan kanvas khususnya produk sepatu. Untuk kustomisasi lainnya,
							konsumen dapat menghubungi tim Cloversy.id untuk melakukan konsultasi beberapa produk
							seperti media tas, dompet, penyimpan kartu. Harga custom painting menyesuaikan jenis
							bahan media lukis dan design yang digunakan.
						</ContentDescription>
					</Content>
				</ContentItem>
			</ContentContainer>
			<ContentContainer container spacing={{ xs: 2, md: 3, xl: 6 }}>
				<ContentItem item xs={12} md={6}>
					<Content textLeft>
						<ContentTag>Kualitas</ContentTag>
						<ContentTitle>Pilihan Cat dan Teknik Pengerjaan</ContentTitle>
						<ContentDescription>
							Untuk saat ini, kami menggunakan pilihan cat terbaik dari merk &quot;Angelus&quot;
							tanpa ada campuran cat lokal ataupun aditif lainnya dari brand lain. Kualitas lukisan
							yang dihasilkan dengan menggunakan cat Angelus memiliki durabilitas yang sangat baik
							dan sudah kami uji bahkan untuk beberapa test berat seperti <em>stratch test.</em>
							Pengerjaan custom paint dilakukan dengan lukis tangan / hand paint.
						</ContentDescription>
					</Content>
				</ContentItem>
				<ContentItem item xs={12} md={6}>
					<ContentImage>
						<Image
							src="/images/about-us-3.webp"
							alt="content image"
							layout="responsive"
							width={1920}
							height={1080}
						/>
					</ContentImage>
				</ContentItem>
			</ContentContainer>
			<ContentContainer>
				<Divider flexItem>
					<ContentTitle>Cerita Kami</ContentTitle>
				</Divider>
				<ContentItem item xs={12} sx={{ mt: { xs: 3, sm: 7 }, mb: 4 }}>
					<ContentDescription align="center">
						Toko Cloversy.id dibuka pada tanggal 22 Juli 2020 dan mulai melakukan penjualan melalui
						media sosial Instagram, TikTok dan marketplace Shopee sebagai media pendukung.
						Berdomisili di Kota Pontianak, Kalbar. Saat ini Cloversy.id menerima pesanan baik
						langsung melalui website ataupun melalui chat sosial media.
					</ContentDescription>
				</ContentItem>
			</ContentContainer>
			<SignatureContainer>
				<Image
					src="/images/signature.png"
					alt="cloversy team signature"
					layout="responsive"
					width={500}
					height={150}
				/>
			</SignatureContainer>
		</AboutUsContainer>
	);
};

export default AboutUs;
