import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { products } from "./data";
import { ProductGrid } from "./ProductGrid";

export const Card = () => (
  <Box mx="auto">
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);
