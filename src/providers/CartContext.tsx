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
  removeCart: (product: IGetProducts) => void;
  total: number; // Total das compras
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<IGetProducts[]>([]);
  const [total, setTotal] = useState<number>(0); 

  const addCart = (product: IGetProducts) => {
    const isProductInCart = cartProducts.some((item) => item.id === product.id);
    if (!isProductInCart) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
      setTotal((prevTotal) => prevTotal + parseFloat(product.price)); 
    } else {
      console.log('O produto já está no carrinho.');
    }
  };

  const removeCart = (product: IGetProducts) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((item) => item.id !== product.id)
    );
    setTotal((prevTotal) => prevTotal - parseFloat(product.price)); 
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
    addCart,
    removeCart,
    total
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};


