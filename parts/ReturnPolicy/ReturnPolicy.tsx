// Dependencies
import React from "react";

// Styles
import { ReturnPolicyContainer } from "./ReturnPolicy.styles";

// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import ContentDescription from "../../components/ContentDescription/ContentDescription";

const ReturnPolicy = () => {
	return (
		<ReturnPolicyContainer>
			<PageTitle>Aturan Pengembalian</PageTitle>
			<ContentContainer sx={{ mb: { xs: 4, sm: 6, lg: 8, xl: 10 } }}>
				<ContentDescription>
					Produk yang telah dikirim dan telah melalui proses konfirmasi produk sebelum dikirim tidak
					dapat dikembalikan.
				</ContentDescription>
				<ContentDescription>
					Pengembalian produk hanya dapat dikembalikan apabila produk yang dibeli tidak sesuai dalam
					konteks produk, bukan konteks design. Untuk memastikan design sesuai dengan keinginan
					konsumen, kami akan melakukan pembuatan mockup untuk setiap pesanan konsumen, dilanjutkan
					konfirmasi dari konsumen terhadap mockup, hingga update dalam bentuk foto pada saat
					pengerjaan produk dari tahap ke tahap kepada konsumen. Setelahnya, saat produk akan
					dikirim, maka akan dilakukan konfirmasi final terkait produk yang dibeli.
				</ContentDescription>
				<ContentDescription>
					Untuk keperluan pengembalian produk lainnya yang tidak dibahas pada halaman website kami,
					mohon menghubungi admin kami untuk informasi yang lebih lengkap untuk menghindari
					kesalahan komunikasi dan hal yang tidak diinginkan.
				</ContentDescription>
				<ContentDescription>
					Kamu dapat menghubungi admin melalui kontak yang tersedia pada menu &quot;Kontak
					Kami&quot; atau menggunakan form yang tersedia untuk mengirim pertanyaan langsung melalui
					laman website kami.
				</ContentDescription>
			</ContentContainer>
		</ReturnPolicyContainer>
	);
};

export default ReturnPolicy;
