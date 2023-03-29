// Dependencies
import type { AppProps } from "next/app";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "../store";
import Head from "next/head";
import { Auth0Provider, User } from "@auth0/auth0-react";
import ReactGA from "react-ga4";

// Styles
import "../styles/globals.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Hooks
import { useRouter } from "next/router";
import { useEffect } from "react";

// Types
import { AppState } from "@auth0/auth0-react";

// Theme
import mainTheme from "../styles/mainTheme";

// Components
import AppWrapper from "../parts/AppWrapper/AppWrapper";
import { CssBaseline } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

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

	// Google analytics setup
	useEffect(() => {
		const routeChangeHandler = (url: string) => {
			// Initialize GA
			ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!);

			// Track pageview
			ReactGA.send({ hitType: "pageview", page: url });
		};

		router.events.on("routeChangeComplete", routeChangeHandler);

		// Unsubscribe if component is unmounted
		return () => {
			router.events.off("routeChangeComplete", routeChangeHandler);
		};
	}, [router.events]);

	// Redirect after auth if appState is provided
	const redirectCallbackHandler = (
		appState?: AppState | undefined,
		_user?: User | undefined
	): void => {
		router.replace(appState?.returnTo || window.location.pathname);
	};

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
							redirectUri={
								process.env.NODE_ENV === "development"
									? "http://localhost:3000/"
									: "https://cloversy.id/"
							}
							scope="openid profile email"
							onRedirectCallback={redirectCallbackHandler}
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
