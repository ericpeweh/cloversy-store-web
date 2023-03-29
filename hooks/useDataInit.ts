// Dependencies
import axios from "axios";

// Api
import { BASE_URL } from "../api";

// Hooks
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useDispatch from "./useDispatch";
import useSelector from "./useSelector";

// Types
import { Product, User } from "../interfaces";

// Actions
import { setCredentials, setAuthStatus } from "../store/slices/authSlice";
import { setUserWishlist } from "../store/slices/globalSlice";

const useDataInit = () => {
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

				dispatch(setAuthStatus("loading"));
				const res = await axios.get<
					void,
					{ data: { data: { user: User } }; status: "success" | "error" }
				>(`${BASE_URL}/auth`, {
					headers: {
						Authorization: `Bearer ${token}`
					},
					withCredentials: true
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
						birth_date: userData?.birth_date ?? "",
						status: "fulfilled"
					})
				);
			};
			getToken();
		}
	}, [getAccessTokenSilently, isAuthenticated, dispatch, user]);

	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			dispatch(setAuthStatus("fulfilled"));
		}
	}, [dispatch, isAuthenticated, isLoading]);

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
					},
					withCredentials: true
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
			loginWithRedirect({
				appState: {
					returnTo: router.asPath
				}
			});
		}
	}, [isLoading, isAuthenticated, currentPath, loginWithRedirect, router.asPath]);

	return { isLoading, isAuthenticated, currentPath };
};

export default useDataInit;
