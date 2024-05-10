import { useContext } from 'react';
import { StyledProductCard } from "./style";
import ShoppingBag from "../../../assets/shopping-bag.png";
import { CartContext } from "../../../providers/CartContext";
import { IGetProducts } from '../../../providers/ProductsContext';

const ProductCard = ({ product }: { product: IGetProducts }) => {
    const { addCart } = useContext(CartContext);

    return (
        <StyledProductCard>
            <img className="product__image" src={product.photo} alt="product-image" />
            <div>
                <p>{product.name}</p>
                <div>
                    <p>{product.price}</p>
                </div>
            </div>
            <p>{product.description}</p>
            <button onClick={() => addCart(product)}>
                <img src={ShoppingBag} alt="shopping-bag-image" />
                <p>COMPRAR</p>
            </button>
        </StyledProductCard>
    );
};

export default ProductCard;
