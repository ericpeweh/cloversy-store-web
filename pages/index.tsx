// Dependencies
import type { NextPage } from "next";
import Head from "next/head";

// MUI
import { Button } from "@mui/material";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Cloversy Store</title>
				<meta name="description" content="Customize your shoes, be special!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Cloversy Store</h1>
				<Button variant="outlined">Click me</Button>
				<BigCarousel />
			</main>
		</div>
	);
};

export default Home;
