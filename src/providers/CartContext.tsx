import React, { createContext, useState } from 'react';

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const contextValues: ICartContext = {
    isCartOpen,
    openCart,
    closeCart
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
