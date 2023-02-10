import { io } from "socket.io-client";

const BASE_URL = "http://localhost:5000";

const initSocketIO = () => {
	const socket = io(BASE_URL, {
		autoConnect: false
	});

	return {
		socket,
		connect: (token: string) => {
			// Set token header
			socket.io.opts.extraHeaders = { Authorization: `Bearer ${token}` };
			socket.connect();
		}
	};
};

export default initSocketIO;
