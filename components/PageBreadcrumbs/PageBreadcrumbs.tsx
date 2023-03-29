// Dependencies
import { Link, Typography } from "@mui/material";
import React from "react";

// Hooks
import { useRouter } from "next/router";

// Styles
import { BreadcrumbsContainer, BreadcrumbsOuterContainer } from "./PageBreadcrumbs.styles";

interface LinkType {
	label: string;
	url: string;
}

interface PageBreadcrumbsProps {
	links: LinkType[];
}

const PageBreadcrumbs = ({ links }: PageBreadcrumbsProps) => {
	const router = useRouter();

	return (
		<BreadcrumbsOuterContainer>
			<BreadcrumbsContainer>
				{links.map(link => {
					return link.url === "current" ? (
						<Typography color="primary" fontWeight={500} key={link.url}>
							{link.label}
						</Typography>
					) : (
						<Link
							underline="hover"
							color="text.primary"
							key={link.url}
							onClick={() => router.push(link.url)}
							sx={{ cursor: "pointer" }}
						>
							{link.label}
						</Link>
					);
				})}
			</BreadcrumbsContainer>
		</BreadcrumbsOuterContainer>
	);
};

export default PageBreadcrumbs;
