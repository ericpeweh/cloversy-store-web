// Dependencies
import type { AppProps } from "next/app";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Head from "next/head";

// Styles
import "../styles/globals.css";
import "swiper/css/bundle";

// Theme
import mainTheme from "../styles/mainTheme";

// Components
import Navbar from "../components/Navbar/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={mainTheme}>
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</StyledEngineProvider>
		</>
	);
};

export default App;
