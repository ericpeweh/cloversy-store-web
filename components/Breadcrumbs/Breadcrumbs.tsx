// Dependencies
import { Link, Typography } from "@mui/material";
import React from "react";

// Styles
import { BreadcrumbsContainer } from "./Breadcrumbs.styles";

interface LinkType {
	label: string;
	url: string;
}

interface BreadcrumbsProps {
	links: LinkType[];
}

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
	return (
		<BreadcrumbsContainer>
			{links.map(link => {
				return link.url === "current" ? (
					<Typography color="primary" fontWeight={500}>
						{link.label}
					</Typography>
				) : (
					<Link underline="hover" color="text.primary" href={link.url}>
						{link.label}
					</Link>
				);
			})}
		</BreadcrumbsContainer>
	);
};

export default Breadcrumbs;
