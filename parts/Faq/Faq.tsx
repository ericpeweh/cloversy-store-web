// Dependencies
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import PageTitle from "../../components/PageTitle/PageTitle";

// Styles
import { ContentContainer, FaqContainer, FaqSubtitle } from "./Faq.styles";

const Faq = () => {
	return (
		<FaqContainer>
			<PageTitle>Pertanyaan Umum</PageTitle>
			<ContentContainer>
				<FaqSubtitle>
					Berikut adalah beberapa pertanyaan yang sering diajukan kepada kami. Apabila jawaban kami
					belum cukup menjawab pertanyaan, mohon hubungi admin.
				</FaqSubtitle>
				<Accordion
					title="Apa itu Cloversy?"
					description="Cloversy adalah tempat penyedia layanan custom painting untuk produk septu, dompet, tas, dll."
					testIds={{ summary: "faq-1" }}
				/>
				<Accordion
					title="Dimana lokasi Cloversy?"
					description="Saat ini toko Cloversy.id hanya berbasis online, untuk studio pengerjaan terletak di Kota Pontianak, Kalbar, Indonesia."
					testIds={{ summary: "faq-2" }}
				/>
				<Accordion
					title="Produk Cloversy itu buatan dalam negeri atau impor?"
					description="Cloversy menggunakan kedua produk tersebut. Konsumen dapat memilih produk yang sesuai untuk digunakan sebagai media lukis."
					testIds={{ summary: "faq-3" }}
				/>
				<Accordion
					title="Custom produk apa saja?"
					description="Cloversy.id saat ini hanya menerima produk custom dengan media berupa: sepatu (kulit, kanvas, dll), tas & dompet (kulit), produk lain berbahan kulit."
					testIds={{ summary: "faq-4" }}
				/>
				<Accordion
					title="Apakah hasil custom tahan lama?"
					description="Untuk masalah durabilitas produk sudah kita jamin, baik proses custom, penggunaan cat, treatment dan aditif. Kita secara kompeten mengupayakan produk dengan tingkat durabilitas tinggi."
					testIds={{ summary: "faq-5" }}
				/>
				<Accordion
					title="Apakah aman terkena air?"
					description="Cat tidak akan luntur walaupun kena air, sama halnya saat mencuci."
					testIds={{ summary: "faq-6" }}
				/>
				<Accordion
					title="Cat apa yang dipakai?"
					description="Cat yang kita gunakan full dari Angelus Paint, cat ini dibuat khusus untuk keperluan custom painting terutama bahan- bahan seperti kulit, canvas, dan lainnya."
					testIds={{ summary: "faq-7" }}
				/>
				<Accordion
					title="Berapa kisaran biaya custom painting?"
					description="Biaya custom bergantung pada jenis bahan dan kesulitan design, berkisar dari 150K untuk yang paling sederhana hingga jutaan rupiah."
					testIds={{ summary: "faq-8" }}
				/>
				<Accordion
					title="Apakah bisa menggunakan design sendiri?"
					description="Tentu saja bisa, konsep dan design dapat disediakan oleh customer, atau customer dapat memilih design yang telah disediakan pada katalog produk Cloversy.id"
					testIds={{ summary: "faq-9" }}
				/>
				<Accordion
					title="Bagaimana cara merawat produk custom?"
					description="Merawat produk custom sebenarnya mirip dengan merawat produk utuh pada umumnya. Sebisa mungkin menyimpan pada tempat lembab, dan tidak menggosok terlalu kuat saat mencuci, gunakan sikat yang tidak kasar dan gunakan sabun pencuci khusus."
					testIds={{ summary: "faq-10" }}
				/>
			</ContentContainer>
		</FaqContainer>
	);
};

export default Faq;
