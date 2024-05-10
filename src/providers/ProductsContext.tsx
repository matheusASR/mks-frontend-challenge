import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';

interface IProductsProviderProps {
  children: React.ReactNode;
}

export interface IGetProducts {
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
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IGetProducts[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products?page=1&rows=8&sortBy=id&orderBy=ASC');
      setProductsList(response.data.products);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  return (
    <ProductsContext.Provider value={{ productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
