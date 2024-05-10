import React, { createContext, useState, useEffect } from 'react';
import { IGetProducts } from './ProductsContext';

interface ICartProviderProps {
  children: React.ReactNode;
}

// Atualize a interface IGetProductsCart para incluir a quantidade (quantity)
export interface IGetProductsCart {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number; // Novo campo para armazenar a quantidade do produto no carrinho
}

interface ICartContext {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  handleIncrement: (productId: number) => void; // Aceita o ID do produto como parâmetro
  handleDecrement: (productId: number) => void; // Aceita o ID do produto como parâmetro
  cartProducts: IGetProductsCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<IGetProductsCart[]>>;
  addCart: (product: IGetProducts) => void;
  removeCart: (productId: number) => void; // Aceita o ID do produto como parâmetro
  total: number;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<IGetProductsCart[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleIncrement = (productId: number) => {
    // Encontra o produto no carrinho pelo ID
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 }; // Incrementa a quantidade
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
  };

  const handleDecrement = (productId: number) => {
    // Encontra o produto no carrinho pelo ID
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 }; // Decrementa a quantidade, garantindo que não seja menor que 1
      }
      return product;
    });
    setCartProducts(updatedCartProducts);
  };

  const addCart = (product: IGetProducts) => {
    const isProductInCart = cartProducts.some((item) => item.id === product.id);
    if (!isProductInCart) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, { ...product, quantity: 1 }]); // Inicia a quantidade como 1 ao adicionar um novo produto
    }
  };

  const removeCart = (productId: number) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((item) => item.id !== productId)
    );
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Atualiza o total sempre que cartProducts for alterado
  useEffect(() => {
    const updatedTotal = cartProducts.reduce((acc, curr) => {
      return acc + parseFloat(curr.price) * curr.quantity; // Multiplica o preço pela quantidade
    }, 0);
    setTotal(updatedTotal);
  }, [cartProducts]);

  const contextValues: ICartContext = {
    isCartOpen,
    openCart,
    closeCart,
    cartProducts,
    setCartProducts,
    addCart,
    removeCart,
    total,
    handleDecrement,
    handleIncrement
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};


