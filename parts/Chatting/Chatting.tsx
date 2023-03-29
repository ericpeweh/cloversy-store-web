// Dependencies
import React, { useEffect, useRef, useState } from "react";
import { shallowEqual } from "react-redux";

// Styles
import { ChattingContainer } from "./Chatting.styles";

// Utils
import initSocketIO from "../../utils/initSocketIO";

// Components
import { Alert } from "@mui/material";

// Types
import { Message, User } from "../../interfaces";

// Actions
import {
	setMessages,
	setChatCursor,
	setCurrentCursor,
	setConversationData,
	addNewMessage,
	setActiveUsers
} from "../../store/slices/chatSlice";

// Hooks
import { useGetConversationQuery } from "../../api/chat.api";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";

// Parts
import ChattingActions from "./ChattingActions/ChattingActions";
import ChattingHeader from "./ChattingHeader/ChattingHeader";
import Conversation from "./Conversation/Conversation";

// Init web socket connection
const socketClient = initSocketIO();

const Chatting = () => {
	const dispatch = useDispatch();
	const { conversationId, messages, currentCursor, chatCursor, minCursor, nextCursor } =
		useSelector(state => state.chat, shallowEqual);
	const [connectError, setConnectError] = useState(false);
	const { isAuth, token, email: authEmail } = useSelector(state => state.auth, shallowEqual);
	const [scrollToMessageId, setScrollToMessageId] = useState("");

	// Scroll to bottom feature
	const scrollToBottomRef = useRef<HTMLSpanElement>(null);
	const [messageAtBottom, setMessageAtBottom] = useState(0);

	// User typing feature
	const [userTyping, setUserTyping] = useState("");

	const {
		data: conversationData,
		isFetching: isGetConversationFetching,
		isLoading: isGetConversationLoading,
		isSuccess: isGetConversationSuccess
	} = useGetConversationQuery(
		{ currentCursor: chatCursor },
		{
			skip: !isAuth
		}
	);

	useEffect(() => {
		if (conversationData && isGetConversationSuccess && !isGetConversationFetching) {
			if (currentCursor === -1 || currentCursor > conversationData.currentCursor) {
				const { currentCursor, data, minCursor, maxCursor, nextCursor } = conversationData;

				// Store first mesage id to allow scroll to view
				setScrollToMessageId(data.conversation.messages[0]?.id + "");

				dispatch(setMessages(data.conversation.messages));
				dispatch(setCurrentCursor(currentCursor));
				dispatch(
					setConversationData({
						min: minCursor,
						max: maxCursor,
						next: nextCursor,
						conversationId: data.conversation.id
					})
				);
			}
		}
	}, [
		conversationData,
		currentCursor,
		isGetConversationSuccess,
		isGetConversationFetching,
		dispatch
	]);

	const loadMoreMessageHandler = () => {
		if (conversationData) {
			dispatch(setChatCursor(conversationData.nextCursor));
		}
	};

	// Websocket connection & events
	useEffect(() => {
		if (isAuth && token) {
			socketClient.connect(token);

			// Connection success
			socketClient.socket.on("connect", () => {
				setConnectError(false);
			});

			// Failed connect to websocket server
			socketClient.socket.on("connect_error", () => {
				setConnectError(true);
			});

			// Handle incoming message
			socketClient.socket.on("newMessageResponse", (newMessage: Message) => {
				// Store message to conversation messages
				dispatch(addNewMessage(newMessage));

				// Increase message at bottom count if user at the current conversation tab
				if (newMessage.conversation_id === conversationId && newMessage.email !== authEmail) {
					setMessageAtBottom(prev => prev + 1);
				}
			});
		}

		// Active users feature
		socketClient.socket.on("activeUsers", (users: Partial<User>[]) => {
			dispatch(setActiveUsers(users));
		});

		// User typing feature
		socketClient.socket.on(
			"userTypingResponse",
			(data: { is_typing: boolean; full_name: string; conversation_id: string; email: string }) => {
				// If user typing is chat opponent
				if (data.email !== authEmail) {
					const { is_typing, conversation_id, full_name } = data;
					if (+conversation_id !== conversationId) return;

					setUserTyping(is_typing ? `${full_name} sedang mengetik...` : "");
				}
			}
		);

		return () => {
			socketClient.socket.off("connect");
			socketClient.socket.off("connect_error");
			socketClient.socket.off("newMessageResponse");
			socketClient.socket.off("activeUsers");
			socketClient.socket.off("userTypingResponse");
		};
	}, [isAuth, token, dispatch, conversationId, authEmail]);

	const resetMessageAtBottomHandler = () => {
		setMessageAtBottom(0);
	};

	return (
		<ChattingContainer>
			{connectError && (
				<Alert severity="error" sx={{ mb: 2 }}>
					Failed to connect to chat system, reconnecting...
				</Alert>
			)}
			<ChattingHeader userTyping={userTyping} />
			<Conversation
				messages={messages}
				onLoadMore={loadMoreMessageHandler}
				hasMore={nextCursor > minCursor && !isGetConversationFetching}
				currentCursor={currentCursor}
				scrollToMessageId={scrollToMessageId}
				setScrollToMessageId={setScrollToMessageId}
				isLoading={isGetConversationLoading}
				ref={scrollToBottomRef}
				onResetMessageAtBottom={resetMessageAtBottomHandler}
			/>
			<ChattingActions
				conversationId={conversationId}
				socket={socketClient.socket}
				scrollToBottomRef={scrollToBottomRef}
				messageAtBottom={messageAtBottom}
				onResetMessageAtBottom={resetMessageAtBottomHandler}
			/>
		</ChattingContainer>
	);
};

export default Chatting;
