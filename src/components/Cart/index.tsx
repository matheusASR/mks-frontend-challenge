import { useContext } from "react";
import { StyledCart } from "./style";
import { CartContext } from "../../providers/CartContext";
import CloseCartBtn from "../../assets/Close_cart.png";
import ProductCardCart from "./ProductCardCart";

const Cart = () => {
  const { isCartOpen, closeCart, cartProducts, total } = useContext(CartContext);

  return (
    <>
      {isCartOpen && (
        <StyledCart>
          <div>
            <p>Carrinho de compras</p>
            <img src={CloseCartBtn} alt="close-cart" onClick={closeCart} />
          </div>
          <section>
            {cartProducts.length > 0 ? (
                <>
                    {cartProducts.map((product) => {
                        return <ProductCardCart key={product.id} product={product} />;
                    })}
                </>
            ) : (
                <>
                    <p>Ainda não há produtos no carrinho.</p>
                </>
            )}
          </section>
          <section>
            <div>
                <p>Total</p>
                <p>R${total}</p>
            </div>
            <button>Finalizar Compra</button>
          </section>
        </StyledCart>
      )}
    </>
  );
};

export default Cart;
