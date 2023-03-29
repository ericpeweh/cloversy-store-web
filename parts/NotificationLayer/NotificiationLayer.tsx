// Dependencies
import { useEffect, useState } from "react";
import { onMessage } from "firebase/messaging";
import axios from "axios";
import { shallowEqual } from "react-redux";

// Config
import { subscribeToPush, messaging } from "../../config/firebaseInit";

// Hooks
import useSelector from "../../hooks/useSelector";

// API
import { BASE_URL } from "../../api";

// Components
import NotificationSnackbar from "../../components/NotificationSnackbar/NotificationSnackbar";

export interface NotificationDataType {
	title: string;
	message: string;
	imageUrl?: string;
	actionTitle?: string;
	actionLink?: string;
}

const NotificiationLayer = () => {
	const { isAuth, token: authToken } = useSelector(state => state.auth, shallowEqual);
	const [notificationData, setNotificationData] = useState<null | NotificationDataType>(null);

	const closeNotificationSnackbarHandler = () => setNotificationData(null);

	useEffect(() => {
		if (isAuth) {
			const initNotificationService = async () => {
				const token = await subscribeToPush();
				const messagingResolve = await messaging;

				if (messagingResolve && token) {
					// Send token to backend
					const res = await axios.post<
						void,
						{
							data: { data: { subscriptionId: number } };
						}
					>(
						`${BASE_URL}/subscription/push`,
						{ token },
						{
							headers: {
								Authorization: `Bearer ${authToken}`,
								"content-type": "application/json"
							},
							withCredentials: true
						}
					);

					// Store subscription id in local storage
					const subscriptionId = res.data?.data?.subscriptionId;
					if (subscriptionId) {
						localStorage.setItem("subscriptionId", subscriptionId.toString());
					}
				}

				if (messagingResolve) {
					// Handle incoming message (foreground)
					onMessage(messagingResolve, payload => {
						const { data } = payload;
						console.log("Message received in app. ", payload);
						if (data?.title && data?.body) {
							setNotificationData({
								title: data?.title,
								message: data?.body,
								imageUrl: data?.imageUrl,
								actionTitle: data?.actionTitle,
								actionLink: data?.actionLink
							});
						}
					});
				}
			};

			initNotificationService();
		}
	}, [authToken, isAuth]);

	return (
		<>
			{notificationData && (
				<NotificationSnackbar data={notificationData} onClose={closeNotificationSnackbarHandler} />
			)}
		</>
	);
};

export default NotificiationLayer;
