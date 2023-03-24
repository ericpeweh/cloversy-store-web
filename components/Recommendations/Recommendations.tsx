// Components
import Section from "../Section/Section";

// Styles
import { SectionContent } from "./Recommendation.styles";

// Types
import { Product } from "../../interfaces";

// Components
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import ProductCard from "../ProductCard/ProductCard";

interface RecommendationsProps {
	products: Product[];
}

const Recommendations = ({ products }: RecommendationsProps) => {
	return (
		<Section title="Produk terlaris">
			<SectionContent>
				<ProductsContainer
					spacing={{ xs: 1, sm: 2, xl: 4 }}
					rowSpacing={{ xs: 1, sm: 2, md: 4, xl: 6 }}
					size={{ xs: 6, sm: 6, lg: 4 }}
				>
					{products.map((product, i) => (
						<ProductCard
							key={product.id}
							productData={product}
							testIds={{
								productContainer: `recommendation-${i + 1}-container`,
								productTitle: `recommendation-${i + 1}`,
								productPrice: `recommendation-${i + 1}-price`,
								quickViewButton: `recommendation-quick-view-${i + 1}`
							}}
						/>
					))}
				</ProductsContainer>
			</SectionContent>
		</Section>
	);
};

export default Recommendations;
