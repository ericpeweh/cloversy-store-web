// Dependencies
import React from "react";

// Components
import { GridSpacing, Grid, Box } from "@mui/material";

// Styles
import { ProductsGrid } from "./ProductsContainer.styles";

type ResponsiveSizing = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
};

interface ProductsContainerProps {
	children: React.ReactElement[];
	spacing?: GridSpacing | ResponsiveSizing;
	columns?: number;
	rowSpacing?: number | ResponsiveSizing;
	size?: ResponsiveSizing;
}

const ProductsContainer = ({
	children,
	spacing = 2,
	columns = 3,
	rowSpacing,
	size
}: ProductsContainerProps) => {
	const childProps = {
		xs: 12 / columns,
		item: true
	};

	return (
		<Box sx={{ flexGrow: 1, mr: -spacing }}>
			<ProductsGrid container spacing={spacing} rowSpacing={rowSpacing}>
				{React.Children.map(children, child => {
					return (
						<Grid {...childProps} {...size}>
							{child}
						</Grid>
					);
				})}
			</ProductsGrid>
		</Box>
	);
};

export default ProductsContainer;
