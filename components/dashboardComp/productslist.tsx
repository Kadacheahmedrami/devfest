'use client';

import React, { useEffect, useState } from 'react';
import Product from './product'; // Ensure the correct path to the Product component

type ProductType = {
  pid: number;
  name: string;
  price: string;
  stock: number;
  description: string | null;
  category: string | null;
  createdAt: string;
  updatedAt: string;
  id_user: number;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie("accessToken");

      if (!token) {
        console.log('No access token found');
        setIsAuthenticated(false);
        setLoading(false); // Stop loading if no token is found
        return;
      }

      try {
        const response = await fetch('https://devfest-t8bx.onrender.com/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the token in the header
          },
        });

        if (response.ok) {
          const data: ProductType[] = await response.json();
          setProducts(data); // Set products if valid data is returned
          setIsAuthenticated(true);
        } else {
          console.log('Invalid token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error during token verification:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Stop loading after verification
      }
    };

    checkToken();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="w-full text-center mt-4">
        You are not authenticated. Please log in to view products.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full  bg-white">
      {/* Table Header */}
    

      {/* Loading or No Data */}
      {loading ? (
        <div className="w-full text-center mt-4">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="w-full text-center mt-4">No products found</div>
      ) : (
        products.map((product) => (
          <Product
            key={product.pid} 
            id={product.pid}
            name={product.name}
            category={product.category || 'N/A'}
            status={product.stock > 0 ? 'In Stock' : 'Out of Stock'} 
            addDate={new Date(product.createdAt).toLocaleDateString()} 
            inventory={product.stock}
            sales={0} 
            price={product.price}  
          />
        ))
      )}
    </div>
  );
};

export default ProductsList;
