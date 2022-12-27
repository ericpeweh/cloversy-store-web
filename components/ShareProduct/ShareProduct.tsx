// Dependencies
import React from "react";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

// Styles
import { MainText } from "./ShareProduct.styles";

// Components
import { Stack } from "@mui/material";
import IconButton from "../IconButton/IconButton";
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	LineShareButton,
	FacebookMessengerShareButton,
	LineIcon,
	FacebookMessengerIcon
} from "react-share";

interface ShareProductProps {
	url: string;
	title: string;
	text: string;
}

const ShareProduct = ({ url, text, title }: ShareProductProps) => {
	return (
		<Stack direction="row" alignItems="center" mt={2} gap={2}>
			<MainText>Share: </MainText>
			<Stack direction="row">
				<FacebookShareButton url={url} quote={`${title} - ${text}`} hashtag={"#bespecial!"}>
					<IconButton>
						<FacebookIcon />
					</IconButton>
				</FacebookShareButton>
				<TwitterShareButton
					url={url}
					title={`${title} - ${text}`}
					via="Cloversy.id Store"
					hashtags={["bespecial!", "customsneaker", "cloversy.id", "custompainting"]}
				>
					<IconButton>
						<TwitterIcon />
					</IconButton>
				</TwitterShareButton>
				<LineShareButton url={url} title={`${title} - ${text}`}>
					<IconButton>
						<LineIcon
							borderRadius={15}
							iconFillColor={"white"}
							size={20}
							bgStyle={{ fill: "currentColor" }}
						/>
					</IconButton>
				</LineShareButton>
				<WhatsappShareButton url={url} title={`${title} - ${text}`} separator={" | "}>
					<IconButton>
						<WhatsAppIcon />
					</IconButton>
				</WhatsappShareButton>
				<LinkedinShareButton
					url={url}
					title={title}
					summary={text}
					source={"Cloversy.id Store - Custom painting"}
				>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
				</LinkedinShareButton>
				<TelegramShareButton url={url} title={`${title} - ${text}`}>
					<IconButton>
						<TelegramIcon />
					</IconButton>
				</TelegramShareButton>
				<FacebookMessengerShareButton url={url} appId={process.env.NEXT_PUBLIC_META_APP_ID!}>
					<IconButton>
						<FacebookMessengerIcon
							borderRadius={50}
							iconFillColor={"white"}
							size={20}
							bgStyle={{ fill: "currentColor" }}
						/>
					</IconButton>
				</FacebookMessengerShareButton>
			</Stack>
		</Stack>
	);
};

export default ShareProduct;
