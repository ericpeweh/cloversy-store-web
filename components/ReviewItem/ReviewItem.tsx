// Dependencies
import React from "react";

// Types
import { ProductReviewItem } from "../../interfaces";

// Styles
import {
	ReviewDate,
	ReviewDescription,
	ReviewerName,
	ReviewItemContainer
} from "./ReviewItem.styles";

// Utils
import { formatDateFullMonth } from "../../utils/formatDate";

// Components
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Rating } from "@mui/material";

interface ReviewItemProps {
	reviewData: ProductReviewItem;
}

const ReviewItem = ({ reviewData }: ReviewItemProps) => {
	return (
		<ReviewItemContainer item xs={12} md={6}>
			<ListItem
				alignItems="flex-start"
				sx={{ padding: 0 }}
				secondaryAction={<Rating value={+reviewData.rating} readOnly precision={0.1} />}
			>
				<ListItemAvatar>
					<Avatar alt="review name" src="/images/1.jpg" sx={{ width: "5rem", height: "5rem" }} />
				</ListItemAvatar>
				<ListItemText
					sx={{ ml: { xs: 0, sm: 1, lg: 2 } }}
					primary={<ReviewerName>{reviewData.full_name}</ReviewerName>}
					secondary={<ReviewDate>{formatDateFullMonth(reviewData.created_at)}</ReviewDate>}
				/>
			</ListItem>
			<ReviewDescription>{reviewData.description}</ReviewDescription>
			<Divider variant="inset" />
		</ReviewItemContainer>
	);
};

export default ReviewItem;
