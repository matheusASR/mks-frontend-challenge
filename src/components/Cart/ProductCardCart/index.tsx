import { useContext } from "react";
import { StyledProductCardCart } from "./style";
import { CartContext, IGetProductsCart } from "../../../providers/CartContext";

const ProductCardCart = ({ product }: { product: IGetProductsCart }) => {
  const { removeCart, handleDecrement, handleIncrement } = useContext(CartContext);

  return (
    <StyledProductCardCart>
      <img
        className="product__image"
        src={product.photo}
        alt="product-image"
      />
      <button onClick={() => removeCart(product.id)}>X</button>
      <p>{product.name}</p>
      <div>
        <button onClick={() => handleDecrement(product.id)} >-</button>
        <p>{product.quantity}</p>
        <button onClick={() => handleIncrement(product.id)} >+</button>
      </div>
      <div>
        <p>R$ {Number(product.price) * product.quantity}</p>
      </div>
    </StyledProductCardCart>
  );
};

export default ProductCardCart;
