// Dependencies
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

// Styles
import "../styles/globals.css";

// Theme
import mainTheme from "../styles/mainTheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={mainTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
