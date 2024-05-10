import { useContext } from "react";
import { IGetProducts } from "../../../providers/ProductsContext";
import { StyledProductCardCart } from "./style";
import { CartContext } from "../../../providers/CartContext";

const ProductCardCart = ({ product }: { product: IGetProducts }) => {
  const { removeCart } = useContext(CartContext)

  return (
    <StyledProductCardCart>
      <img className="product__image" src={product.photo} alt="product-image" />
      <button onClick={() => removeCart(product)}>X</button>
      <p>{product.name}</p>
      <div>
        <button>-</button>
        <p></p>
        <button>+</button>
      </div>
      <div>
        <p>R$ {product.price}</p>
      </div>
    </StyledProductCardCart>
  );
};

export default ProductCardCart;