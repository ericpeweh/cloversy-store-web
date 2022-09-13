// Components
import Section from "../Section/Section";

// Styles
import { SectionContent } from "./Recommendation.styles";

// Components
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";

const Recommendations = () => {
	return (
		<Section title="Produk terlaris">
			<SectionContent>
				<ProductsContainer
					spacing={{ xs: 1, sm: 2, xl: 4 }}
					rowSpacing={{ xs: 1, sm: 2, md: 4, xl: 6 }}
					size={{ xs: 6, sm: 6, lg: 4 }}
				>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</ProductsContainer>
			</SectionContent>
		</Section>
	);
};

export default Recommendations;
