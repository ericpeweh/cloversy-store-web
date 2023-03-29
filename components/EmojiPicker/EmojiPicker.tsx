// Dependencies
import React from "react";
import { IEmojiData } from "emoji-picker-react";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), {
	ssr: false
});

// Styles
import { EmojiPickerContainer } from "./EmojiPicker.styles";

interface EmojiPickerProps {
	onSelectEmoji: React.Dispatch<React.SetStateAction<string>>;
}

const EmojiPicker = ({ onSelectEmoji }: EmojiPickerProps) => {
	const emojiClickHandler = (_: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
		onSelectEmoji(prevMessageInput => prevMessageInput + emojiObject.emoji);
	};

	return (
		<EmojiPickerContainer>
			<Picker
				onEmojiClick={emojiClickHandler}
				disableSkinTonePicker
				native
				disableSearchBar
				groupVisibility={{
					flags: false,
					food_drink: false,
					travel_places: false,
					animals_nature: false
				}}
			/>
		</EmojiPickerContainer>
	);
};

export default EmojiPicker;
