import { IGetProducts } from "../../../providers/ProductsContext";
import { StyledProductCardCart } from "./style";

const ProductCardCart = ({ product }: { product: IGetProducts }) => {

  return (
    <StyledProductCardCart>
      {product.name}
    </StyledProductCardCart>
  );
};

export default ProductCardCart;