// Dependencies
import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import axios from "axios";

// Hooks
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

// Actions
import { closeSearchDrawer, closeCartDrawer } from "../../store/slices/globalSlice";
import { setCredentials } from "../../store/slices/authSlice";

// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import SearchDrawer from "../../components/SearchDrawer/SearchDrawer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

interface AppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
	const { showSearchModal, showCartModal } = useSelector(state => state.global, shallowEqual);

	const router = useRouter();
	const dispatch = useDispatch();

	const { isAuthenticated, user, getAccessTokenSilently, isLoading, loginWithRedirect } =
		useAuth0();

	const currentPath = router.asPath;

	useEffect(() => {
		if (isAuthenticated) {
			const getToken = async () => {
				const token = await getAccessTokenSilently();

				dispatch(
					setCredentials({
						isAuth: true,
						token,
						full_name: user?.name ?? "",
						email: user?.email ?? "",
						profile_picture: user?.picture ?? "",
						email_verified: user?.email_verified ?? false
					})
				);

				await axios.get("http://localhost:5000/auth", {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
			};
			getToken();
		}
	}, [getAccessTokenSilently, isAuthenticated, dispatch, user]);

	useEffect(() => {
		if (!isLoading && !isAuthenticated && currentPath.includes("/account")) {
			loginWithRedirect();
		}
	}, [isLoading, isAuthenticated, currentPath, loginWithRedirect]);

	return (
		<>
			{isLoading || (!isAuthenticated && currentPath.includes("/account")) ? (
				<LoadingScreen isOpen={isLoading} />
			) : (
				<>
					<Navbar />
					<SearchDrawer open={showSearchModal} onClose={() => dispatch(closeSearchDrawer())} />
					<CartDrawer open={showCartModal} onClose={() => dispatch(closeCartDrawer())} />
					{children}
					<Footer />
				</>
			)}
		</>
	);
};

export default AppWrapper;
