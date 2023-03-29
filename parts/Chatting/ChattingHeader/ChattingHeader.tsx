// Dependencies
import React from "react";

// Styles
import { ChattingHeaderContainer, Name, NameContainer, Position } from "./ChattingHeader.styles";

// Hooks
import useSelector from "../../../hooks/useSelector";

// Components
import { Avatar, Badge } from "@mui/material";

interface ChattingHeaderProps {
	userTyping: string;
}

const ChattingHeader = ({ userTyping }: ChattingHeaderProps) => {
	const activeUsers = useSelector(state => state.chat.activeUsers);

	const isAdminActive = Boolean(activeUsers.find(user => user.user_role === "admin"));

	return (
		<ChattingHeaderContainer>
			<Badge
				color={isAdminActive ? "primary" : "error"}
				overlap="circular"
				badgeContent={isAdminActive ? "ON" : "OFF"}
			>
				<Avatar
					sx={{ width: { xs: 45, sm: 52, md: 60 }, height: { xs: 45, sm: 52, md: 60 } }}
					alt="user profile"
					src="/images/logo-square.jpg"
					imgProps={{ referrerPolicy: "no-referrer" }}
				/>
			</Badge>
			<NameContainer>
				<Name>Cloversy Admin</Name>
				<Position>{userTyping ? userTyping : "Customer Service"}</Position>
			</NameContainer>
		</ChattingHeaderContainer>
	);
};

export default ChattingHeader;
