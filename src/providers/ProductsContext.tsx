import React, { createContext, useState } from 'react';

interface IProductsProviderProps {
  children: React.ReactNode;
}

interface IGetProducts {
  id: number,
  name: string,
  brand: string,
  description: string,
  photo: string,
  price: string,
  createdAt: string,
  updatedAt: string
}

interface IProductsContext {
  productsList: IGetProducts[]
  setProductsList: React.Dispatch<React.SetStateAction<IGetProducts[]>>;
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IGetProducts[]>([]);

  return (
    <ProductsContext.Provider
      value={{productsList, setProductsList}}
    >
      {children}
    </ProductsContext.Provider>
  );
};

