// Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Components
import MainWrapper from "../../components/PageWrapper/MainWrapper";
import MyVoucher from "../../parts/MyVoucher/MyVoucher";
import AccountWrapper from "../../parts/AccountWrapper/AccountWrapper";

const MyVoucherPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Voucher Saya</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainWrapper>
				<AccountWrapper title="Voucher Diskon">
					<MyVoucher />
				</AccountWrapper>
			</MainWrapper>
		</>
	);
};

export default MyVoucherPage;
