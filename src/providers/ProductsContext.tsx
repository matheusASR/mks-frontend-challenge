import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IGetProducts[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []); 

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
      setProductsList(response.data);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ productsList }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

