import { StyledProductCard } from "./style";

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
            <p>{product.name}</p>
        </StyledProductCard>
    );
};

export default ProductCard;
