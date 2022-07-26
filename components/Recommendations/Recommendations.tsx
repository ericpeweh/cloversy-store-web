// Components
import Section from "../Section/Section";

// Styles
import { RecommendationContainer, SectionContent } from "./Recommendation.styles";

// Components
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";

const Recommendations = () => {
	return (
		<Section title="Produk terlaris">
			<SectionContent>
				<ProductsContainer spacing={4} rowSpacing={6}>
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
