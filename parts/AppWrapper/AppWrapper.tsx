// Dependencies
import { shallowEqual } from "react-redux";

// Hooks
import useSelector from "../../hooks/useSelector";
import useDispatch from "../../hooks/useDispatch";

// Action
import { closeSearchDrawer, closeCartDrawer } from "../../store/slices/globalSlice";

// Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import SearchDrawer from "../../components/SearchDrawer/SearchDrawer";

interface AppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
	const { showSearchModal, showCartModal } = useSelector(state => state.global, shallowEqual);
	const dispatch = useDispatch();

	return (
		<>
			<Navbar />
			<SearchDrawer open={showSearchModal} onClose={() => dispatch(closeSearchDrawer())} />
			<CartDrawer open={showCartModal} onClose={() => dispatch(closeCartDrawer())} />
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default AppWrapper;
