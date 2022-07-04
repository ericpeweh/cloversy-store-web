// Dependencies
import React from "react";

// Components
import { GridSpacing, Grid } from "@mui/material";

// Styles
import { ProductsGrid } from "./ProductsContainer.styles";

interface ProductsContainerProps {
	children: React.ReactElement[];
	spacing?: GridSpacing;
	columns?: number;
	rowSpacing?: number;
}

const ProductsContainer = ({
	children,
	spacing = 2,
	columns = 3,
	rowSpacing
}: ProductsContainerProps) => {
	const childProps = {
		xs: 12 / columns,
		item: true
	};

	return (
		<ProductsGrid container spacing={spacing} rowSpacing={rowSpacing}>
			{React.Children.map(children, child => {
				return <Grid {...childProps}>{child}</Grid>;
			})}
		</ProductsGrid>
	);
};

export default ProductsContainer;
