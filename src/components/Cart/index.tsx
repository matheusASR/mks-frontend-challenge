import { useContext } from "react";
import { StyledCart } from "./style";
import { CartContext } from "../../providers/CartContext";
import CloseCartBtn from "../../assets/Close_cart.png";

const Cart = () => {
  const { isCartOpen, closeCart } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <StyledCart>
          <div>
            <p>Carrinho de compras</p>
            <img src={CloseCartBtn} alt="close-cart" onClick={closeCart} />
          </div>
          <section></section>
          <section>
            <div>
                <p>Total</p>
                <p>R$ 700,00</p>
            </div>
            <button>Finalizar Compra</button>
          </section>
        </StyledCart>
      )}
    </>
  );
};

export default Cart;
