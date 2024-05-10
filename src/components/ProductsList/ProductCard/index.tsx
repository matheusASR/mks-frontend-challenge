import { StyledProductCard } from "./style";
import ShoppingBag from "../../../assets/shopping-bag.png"

interface IProduct {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createdAt: string,
    updatedAt: string
}

const ProductCard = ({ product }: { product: IProduct }) => {
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
            <button>
                <img src={ShoppingBag} alt="shopping-bag-image" />
                <p>COMPRAR</p>
            </button>
        </StyledProductCard>
    );
};

export default ProductCard;
