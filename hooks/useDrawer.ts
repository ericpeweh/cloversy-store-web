// Dependencies
import { useState } from "react";

const useDrawer = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const openDrawerHandler = () => setIsDrawerOpen(true);

	const closeDrawerHandler = () => setIsDrawerOpen(false);

	return {
		isOpen: isDrawerOpen,
		openHandler: openDrawerHandler,
		closeHandler: closeDrawerHandler
	};
};

export default useDrawer;
