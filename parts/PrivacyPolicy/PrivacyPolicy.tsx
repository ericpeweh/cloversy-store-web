// Dependencies
import React from "react";

// Styles
import { PrivacyPolicyContainer } from "./PrivacyPolicy.styles";

// Components
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentDescription from "../../components/ContentDescription/ContentDescription";
import ContentTitle from "../../components/ContentTitle/ContentTitle";

const PrivacyPolicy = () => {
	return (
		<PrivacyPolicyContainer>
			<PageTitle>Kebijakan Privasi</PageTitle>
			<ContentContainer>
				<ContentTitle>Data yang kami kumpulkan</ContentTitle>
				<ContentDescription>
					Data yang kami kumpulkan berupa informasi yang dimasukkan oleh konsumen baik melalui input
					langsung ataupun bentuk interaksi dengan website atau aplikasi kami. Informasi yang
					diambil nama konsumen, email, alamat, kontak, foto profil dan data penunjang lainnya yang
					digunakan untuk meningkatkan pengalaman pengguna.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Pemanfaatan Data</ContentTitle>
				<ContentDescription>
					Data diperoleh dari pengguna hanya dimanfaatkan untuk keperluan transaksi dan marketing
					kami untuk meningkatkan pengalaman pengguna dalam menggunakan aplikasi dan websiite kami.
					Selain itu, menjadi bahan pertimbangan kami dalam memberikan penawaran- penawaran terbaik
					bagi konsumen atau calon konsumen kami.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Analytics</ContentTitle>
				<ContentDescription>
					Website dan aplikasi kami terintegrasi dengan Google Analytics yang mengumpulkan data dari
					perangkat yang anda gunakan untuk kebutuhan analisis kami.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Pihak Ketiga</ContentTitle>
				<ContentDescription>
					Penggunaan data dari pihak ketiga seperti konten tersemat baik berupa gambar, video,
					artikel dan lainnya. Pihak ketiga mungkin akan mengumpulkan data dari akun yang anda
					gunakan.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Keamanan Data</ContentTitle>
				<ContentDescription>
					Data yang diperoleh dan diolah akan disimpan dengan aturan keamanan yang kami gunakan
					untuk memastikan data tetap aman dan tidak terdapat pihak lain yang dapat mengakses,
					membajak, dan memanfaatkan data anda.
				</ContentDescription>
			</ContentContainer>
		</PrivacyPolicyContainer>
	);
};

export default PrivacyPolicy;
