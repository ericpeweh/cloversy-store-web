// Dependencies
import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";

// Styles
import { TermsConditionsContainer, Lists, ListContainer, ListItem } from "./TermsConditions.styles";

import ContentContainer from "../../components/ContentContainer/ContentContainer";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import ContentDescription from "../../components/ContentDescription/ContentDescription";

const TermsConditions = () => {
	return (
		<TermsConditionsContainer>
			<PageTitle>Syarat & Ketentuan</PageTitle>
			<ContentContainer>
				<ContentDescription>
					Berikut adalah beberapa poin penting untuk syarat dan ketentuan yang kami tetapkan dalam
					setiap proses pelayanan dan penjualan produk, pastikan kamu telah menyetujui ketentuan
					yang kami rangkum dibawah ini sebelum melakukan pembelian produk.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Ketersediaan Produk</ContentTitle>
				<ContentDescription>
					Semua ukuran sepatu yang tersedia pada list produk bukan merupakan data real time, oleh
					karena itu, pastikan untuk menghubungi admin Cloversy.id untuk menghubungi terkait ukuran
					yang tersedia pada list ataupun ketersediaan ukuran lainnya (request). Selain itu,
					pengguna juga dapat menghubungi admin untuk meminta request produk custom untuk pilihan
					sepatu atau design yang tidak tersedia pada list produk.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Penawaran dan Pembelian Produk</ContentTitle>
				<ContentDescription>
					Setiap produk yang ditampilkan pada website &quot;Cloversy Store&quot; merupakan produk
					resmi dari Cloversy.id dan hanya berlaku diperjualbelikan pada konteks custom painting
					Cloversy.id. Setiap pembelian yang dilakukan oleh konsumen akan patuh kepada poin-poin
					aturan yang berhubungan. Saat konsumen melakukan pembelian, sistem akan mengirimkan email
					berupa konfirmasi pembayaran. Konsumen dapat melakukan tracking produk yang telah dibeli
					pada menu &quot;Pesanan Saya&quot;. Pastikan setiap informasi yang diisi merupakan
					informasi yang tepat untuk memastikan tidak ada kesalahan yang terjadi baik saat proses
					pengerjaan ataupun penyelesaian pesanan.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Pembatalan Pesanan</ContentTitle>
				<ContentDescription>
					Konsumen dapat membatalkan pesanan hanya ketika pesanan berada pada status &quot;Belum
					Bayar&quot; atau Pending. Pesanan yang telah memasuki tahap pengerjaan dan sudah diproses
					oleh tim Cloversy.id tidak dapat dibatalkan. Untuk aturan atau kendala lain mengenai
					pembatalan pesanan, silahkan menghubungi tim Cloversy.id melalui kontak yang tersedia.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Metode Pembayaran</ContentTitle>
				<ContentDescription>
					Konsumen akan diberikan pilihan terkait metode pembayaran yang tersedia saat melakukan
					checkout produk.
					<ListContainer>
						<Lists>
							<ListItem>
								- &nbsp;Metode pembayaran yang sah hanyalah metode pembayaran yang tersedia pada
								saat melakukan checkout.
							</ListItem>
							<ListItem>
								- &nbsp;Apabila pembayaran melibatkan sistem atau pengelola pihak ketiga, semua
								kesalahan dan kekeliruan pembayaran tidak ditanggung oleh pihak Cloversy.id.
							</ListItem>
							<ListItem>
								- &nbsp;Pastikan untuk menyimpan bukti pembayaran saat berhasil melakukan pembayaran
								sebagai alternatif apabila terjadi kesalahan sistem yang tidak terduga.
							</ListItem>
							<ListItem>
								- &nbsp;Semua produk dan pembayaran dilakukan menggunakan mata uang Rupiah
								Indonesia, apabila terdapat pajak atau biaya pengelolaan eksternal, maka konsumenlah
								yang menanggung biaya tersebut.
							</ListItem>
						</Lists>
					</ListContainer>
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Pengiriman</ContentTitle>
				<ContentDescription>
					Konsumen akan diberikan pilihan terkait metode pengiriman yang tersedia saat melakukan
					checkout produk.
					<ListContainer>
						<Lists>
							<ListItem>
								- &nbsp;Metode pengiriman yang sah hanyalah metode pengiriman yang tersedia pada
								saat melakukan checkout.
							</ListItem>
							<ListItem>
								- &nbsp;Cloversy.id menyediakan jasa pengiriman untuk wilayah Indonesia. Untuk
								pengiriman luar negeri atau lokasi lainnya yang tidak tersedia pada pengiriman,
								mohon hubungi admin.
							</ListItem>
							<ListItem>
								- &nbsp;Waktu pengiriman yang tertera pada daftar pilihan metode pengiriman
								merupakan estimasi yang diberikan oleh jasa pengiriman dan dapat meleset tergantung
								kepada jasa pengirimannya masing- masing.
							</ListItem>
							<ListItem>
								- &nbsp;Estimasi waktu pengiriman yang tertera tidak mencakup waktu pengerjaan
								produk (tergantung tingkat kesulitan design dan antrian pengerjaan)
							</ListItem>
							<ListItem>
								- &nbsp;Semua bentuk kerusakan, cacat, pengeluaran tambahan yang berhubungan dengan
								pengiriman pihak ketiga berada diluar tanggung jawab kami.
							</ListItem>
							<ListItem>
								- &nbsp;Apabila terdapat komplain atau ketidaksesuaian barang yang dikirim dengan
								produk yang kami fotokan sesaat sebelum pengiriman, pastikan konsumen memiliki
								rekaman dan foto packaging saat dibuka.
							</ListItem>
							<ListItem>
								- &nbsp;Pengiriman produk akan kami lakukan sesuai dengan alamat yang konsumen
								berikan, apabila terdapat kesalahan alamat maka itu diluar tanggung jawab kami.
							</ListItem>
							<ListItem>
								- &nbsp;Pastikan untuk memeriksa produk yang kamu terima sesaat setelah menerima
								pesanan dan melakukan konfirmasi kepada admin Cloversy.id.
							</ListItem>
						</Lists>
					</ListContainer>
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Pengembalian Produk</ContentTitle>
				<ContentDescription>
					Produk yang telah dibeli dan dikirim setelah konfirmasi konsumen tidak dapat dikembalikan
					dengan alasan apapun terkecuali produk yang dikirimkan tidak sesuai (berbeda produk) bukan
					berbeda design / detail. Karena foto produk akan selalu dikirim ke konsumen sesaat sebelum
					packaging dan setiap tahap pengerjaan produk.
				</ContentDescription>
			</ContentContainer>
			<ContentContainer>
				<ContentTitle>Ketentuan Lainnya</ContentTitle>
				<ContentDescription>
					Syarat dan Ketentuan yang dituliskan pada halaman ini dapat berubah dari waktu ke waktu
					tanpa terdapat pemberitahuan terlebih dahulu untuk menyesuaikan proses penjualan yang
					berlaku.
				</ContentDescription>
			</ContentContainer>
		</TermsConditionsContainer>
	);
};

export default TermsConditions;
