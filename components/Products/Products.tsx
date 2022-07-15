// Dependencies
import React, { useState } from "react";

// Styles
import { ProductsContainer, ProductsContent, ProductsHeader } from "./Products.styles";

// Icons
import TuneIcon from "@mui/icons-material/Tune";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

// Components
import { Badge, Divider, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import PageTitle from "../PageTitle/PageTitle";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Button from "../Button/Button";
import SelectInput from "../SelectInput/SelectInput";
import ProductsContainerComponent from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";
import ProductListItem from "../ProductListItem/ProductListItem";
import useDispatch from "../../hooks/useDispatch";
import { openFilterDrawer } from "../../store/slices/productsSlice";

const links = [
	{ label: "Beranda", url: "#" },
	{ label: "Produk", url: "current" }
];

type DisplayModeType = "list" | "card";

const Products = () => {
	const dispatch = useDispatch();

	const [displayMode, setDisplayMode] = useState<DisplayModeType>("card");

	const isDisplayModeCard = displayMode === "card";

	const displayModeChangeHandler = (_: React.SyntheticEvent, newDisplayMode: DisplayModeType) => {
		if (newDisplayMode !== null) {
			setDisplayMode(newDisplayMode);
		}
	};

	const showFilterDrawerHandler = () => {
		dispatch(openFilterDrawer());
	};

	return (
		<ProductsContainer>
			<PageTitle>Daftar Produk</PageTitle>
			<ProductsHeader>
				<Breadcrumbs links={links} />
				<Stack direction="row" gap={2} alignItems="center">
					<Button
						sx={{ pr: 6, pl: 5 }}
						variant="text"
						startIcon={<TuneIcon />}
						endIcon={<Badge badgeContent={2} color="primary" sx={{ ml: 1 }}></Badge>}
						onClick={showFilterDrawerHandler}
					>
						Filters
					</Button>
					<Divider orientation="vertical" variant="middle" flexItem />
					<SelectInput
						options={[
							"Default sorting",
							"Sort by popularity",
							"Sort by rating",
							"Sort by latest",
							"Sort by price: low to high",
							"Sort by price: high to low"
						]}
						value="Default sorting"
						variant="standard"
						sx={{
							"&::before": {
								display: "none"
							},
							"&::after": {
								display: "none"
							}
						}}
					/>
					<Divider orientation="vertical" variant="middle" flexItem />
					<ToggleButtonGroup
						value={displayMode}
						exclusive
						onChange={displayModeChangeHandler}
						aria-label="products display mode"
						sx={{ border: "none" }}
					>
						<ToggleButton value="card" size="small" sx={{ border: "none" }}>
							<GridViewIcon />
						</ToggleButton>
						<ToggleButton value="list" size="small" sx={{ border: "none" }}>
							<TableRowsIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
			</ProductsHeader>
			<ProductsContent>
				{isDisplayModeCard ? (
					<ProductsContainerComponent spacing={4} rowSpacing={6} columns={4}>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</ProductsContainerComponent>
				) : (
					<ProductsContainerComponent spacing={4} rowSpacing={6} columns={2}>
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
						<ProductListItem />
					</ProductsContainerComponent>
				)}
			</ProductsContent>
		</ProductsContainer>
	);
};

export default Products;
