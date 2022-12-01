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
import {
	closeSearchDrawer,
	closeCartDrawer,
	setUserWishlist
} from "../../store/slices/globalSlice";
import { setCredentials } from "../../store/slices/authSlice";

// Api
import { BASE_URL } from "../../api";

// Types
import { Product, User } from "../../interfaces";

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
	const authToken = useSelector(state => state.auth.token);

	const router = useRouter();
	const dispatch = useDispatch();

	const { isAuthenticated, user, getAccessTokenSilently, isLoading, loginWithRedirect } =
		useAuth0();

	const currentPath = router.asPath;

	// Set user data to auth store slice
	useEffect(() => {
		if (isAuthenticated) {
			const getToken = async () => {
				const token = await getAccessTokenSilently();

				const res = await axios.get<
					void,
					{ data: { data: { user: User } }; status: "success" | "error" }
				>(`${BASE_URL}/auth`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});

				const userData = res.data.data.user;

				dispatch(
					setCredentials({
						isAuth: true,
						token,
						email: user?.email ?? "",
						email_verified: user?.email_verified ?? false,
						full_name: userData?.full_name ?? "",
						contact: userData?.contact ?? "",
						profile_picture: userData?.profile_picture ?? "",
						birth_date: userData?.birth_date ?? ""
					})
				);
			};
			getToken();
		}
	}, [getAccessTokenSilently, isAuthenticated, dispatch, user]);

	// Set user wishlist to global store slice
	useEffect(() => {
		if (isAuthenticated && authToken) {
			const getUserWishlist = async () => {
				const res = await axios.get<
					void,
					{ data: { data: { wishlist: Product[] } }; status: "success" | "error" }
				>(`${BASE_URL}/account/wishlist`, {
					headers: {
						Authorization: `Bearer ${authToken}`
					}
				});

				const wishlist = res.data.data.wishlist.map(item => item.id);

				dispatch(setUserWishlist(wishlist));
			};
			getUserWishlist();
		}
	}, [authToken, dispatch, isAuthenticated]);

	// Redirect user to login if not auth & open protected route
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
