// Dependencies
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "../store";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";

// Styles
import "../styles/globals.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Theme
import mainTheme from "../styles/mainTheme";

// Components
import AppWrapper from "../parts/AppWrapper/AppWrapper";
import { CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => {
	// Prevent navbar shifting on open dialog
	useEffect(() => {
		const body = document.body;
		const observer = new MutationObserver(mutations => {
			mutations.forEach((mutationRecord: any) => {
				const navbar = document.getElementById("navbar");
				if (navbar === null) return;
				if (mutationRecord.target.style[0] === "padding-right") {
					navbar.style.paddingRight = "4rem";
				} else {
					navbar.style.paddingRight = "3rem";
				}
			});
		});

		observer.observe(body, { attributes: true, attributeFilter: ["style"] });
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<ThemeProvider theme={mainTheme}>
					<ReduxProvider store={reduxStore}>
						<Auth0Provider
							domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
							clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENTID!}
							audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!}
							redirectUri="http://localhost:3000/"
							scope="openid profile email"
						>
							<AppWrapper>
								<Component {...pageProps} />
							</AppWrapper>
						</Auth0Provider>
					</ReduxProvider>
				</ThemeProvider>
			</StyledEngineProvider>
		</>
	);
};

export default App;
