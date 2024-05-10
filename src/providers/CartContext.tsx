import React, { createContext, useState } from 'react';
import { IGetProducts } from './ProductsContext';

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  cartProducts: IGetProducts[]; 
  setCartProducts: React.Dispatch<React.SetStateAction<IGetProducts[]>>;
  addCart: (product: IGetProducts) => void; 
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<IGetProducts[]>([]);

  const addCart = (product: IGetProducts) => {
    const isProductInCart = cartProducts.some((item) => item.id === product.id);
    if (!isProductInCart) {
        setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    } else {
        console.log('O produto já está no carrinho.');
    }
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const contextValues: ICartContext = {
    isCartOpen,
    openCart,
    closeCart,
    cartProducts,
    setCartProducts,
    addCart
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

