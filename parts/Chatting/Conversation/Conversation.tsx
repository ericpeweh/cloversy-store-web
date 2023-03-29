// Dependencies
import React, { forwardRef, useEffect } from "react";
import InfiniteScroller from "react-infinite-scroll-component";

// Hooks
import useSelector from "../../../hooks/useSelector";

// Types
import { Message } from "../../../interfaces";

// Styles
import {
	BubbleGroup,
	BubbleTimestamp,
	ChatBubble,
	ConversationContainer,
	GroupTimestamp
} from "./Conversation.styles";

// Utils
import {
	formatDateFullMonth,
	formatDateStandard,
	formatDateTimeOnly
} from "../../../utils/formatDate";

// Components
import { Alert, CircularProgress } from "@mui/material";
import FallbackContainer from "../../../components/FallbackContainer/FallbackContainer";
import throttleEvent from "../../../utils/throttleEvent";

interface ConversationProps {
	messages: Message[];
	onLoadMore: () => void;
	currentCursor: number;
	hasMore: boolean;
	scrollToMessageId: string;
	setScrollToMessageId: React.Dispatch<React.SetStateAction<string>>;
	isLoading: boolean;
	onResetMessageAtBottom: () => void;
}

const Conversation = forwardRef<HTMLSpanElement, ConversationProps>((props, ref) => {
	const {
		onLoadMore,
		hasMore,
		scrollToMessageId,
		setScrollToMessageId,
		isLoading,
		messages,
		currentCursor,
		onResetMessageAtBottom
	} = props;

	const chatTimestampsTracker = new Set();
	const userEmail = useSelector(state => state.auth.email);
	const reversedMessages = [...messages].reverse();

	// To prevent scrollbar stay the top and trigger load more event infinitely
	useEffect(() => {
		if (scrollToMessageId) {
			const element = document.getElementById(scrollToMessageId);

			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
			}

			setScrollToMessageId("");
		}
	}, [scrollToMessageId, setScrollToMessageId]);

	const conversationScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		const { scrollTop, scrollHeight } = e.target as HTMLElement;

		// Reset bottom chat number if scroll reach almost the end
		if (Math.abs(scrollTop) / scrollHeight < 0.06) {
			onResetMessageAtBottom();
		}
	};

	return (
		<ConversationContainer
			id="conversationScroller"
			onScroll={throttleEvent(conversationScrollHandler, 3000)}
		>
			<span ref={ref} style={{ scrollPaddingBottom: "6rem" }}></span>
			{!isLoading && messages.length === 0 && (
				<FallbackContainer>
					<Alert severity="info">Belum ada pesan, kirim pesan untuk memulai percakapan</Alert>
				</FallbackContainer>
			)}
			{isLoading && (
				<FallbackContainer>
					<CircularProgress />
				</FallbackContainer>
			)}
			<InfiniteScroller
				inverse={true}
				dataLength={messages.length}
				style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column-reverse" }}
				next={onLoadMore}
				hasMore={hasMore}
				loader={
					currentCursor !== -1 && (
						<FallbackContainer size="small">
							<CircularProgress />
						</FallbackContainer>
					)
				}
				scrollableTarget="conversationScroller"
			>
				<BubbleGroup>
					{reversedMessages.map(msg => {
						const chatDateTimestamp = formatDateStandard(msg.created_at);

						// Add new timestamp group if doesn't exist
						let addNewTimestampGroup = false;
						if (!chatTimestampsTracker.has(chatDateTimestamp)) {
							chatTimestampsTracker.add(chatDateTimestamp);
							addNewTimestampGroup = true;
						}

						return (
							<React.Fragment key={msg.id}>
								{addNewTimestampGroup && (
									<GroupTimestamp>{formatDateFullMonth(msg.created_at)}</GroupTimestamp>
								)}
								<ChatBubble
									align={msg.email === userEmail ? "right" : "left"}
									id={msg.id.toString()}
								>
									{msg.body}
									<BubbleTimestamp>{formatDateTimeOnly(msg.created_at)}</BubbleTimestamp>
								</ChatBubble>
							</React.Fragment>
						);
					})}
				</BubbleGroup>
			</InfiniteScroller>
		</ConversationContainer>
	);
});

Conversation.displayName = "Conversation";

export default Conversation;
