import { StyledHeader } from "./style";
import Cart from "../../assets/cart.png"
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";

const Header = () => {
  const { openCart } = useContext(CartContext)

  return (
    <StyledHeader>
      <div className="div__header">
        <div>
          <p>MKS</p>
          <p>Sistemas</p>
        </div>
        <button className="cart__bttn" onClick={openCart}>
          <img src={Cart} alt="cart-image" />
          <p>0</p>
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
