// ProductGrid.jsx
import { SimpleGrid } from "@chakra-ui/react";
import { Children, isValidElement, useMemo } from "react";

export const ProductGrid = (props) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(
      isValidElement
    ).length;
    return Math.min(6, count); // Set a fixed number of columns for desktop screens
  }, [props.children]);
  return (
    <SimpleGrid columns={columns} spacingX="100" spacingY="10" {...props} />
  );
};
