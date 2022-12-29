// Hooks
import useDataInit from "../../hooks/useDataInit";

// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import SearchDrawer from "../../components/SearchDrawer/SearchDrawer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import AddToCartSnackbar from "../../components/AddToCartSnackbar/AddToCartSnackbar";
import SyncCart from "../../components/SyncCart/SyncCart";

interface AppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
	const { isLoading, isAuthenticated, currentPath } = useDataInit();

	return (
		<>
			{isLoading || (!isAuthenticated && currentPath.includes("/account")) ? (
				<LoadingScreen isOpen={isLoading} />
			) : (
				<>
					<Navbar />
					<AddToCartSnackbar />
					<SyncCart />
					<SearchDrawer />
					<CartDrawer />
					{children}
					<Footer />
				</>
			)}
		</>
	);
};

export default AppWrapper;
