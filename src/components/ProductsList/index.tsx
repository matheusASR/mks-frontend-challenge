import { useContext } from "react";
import { StyledProductsList } from "./style";
import { ProductsContext } from "../../providers/ProductsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { productsList } = useContext(ProductsContext);

  return (
    <StyledProductsList>
      {productsList &&
        productsList.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </StyledProductsList>
  );
};

export default ProductsList;
