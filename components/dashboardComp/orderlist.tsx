'use client';

import React, { useEffect, useState } from 'react';
import Order from './order'; // Make sure the path is correct

type OrderType = {
  id: string;
  date: string;
  customer: string;
  phoneNumber: string;
  location: string;
  customerService: string;
  product: string;
  category: string;
  trackCode: string;
  status: string;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie("accessToken");

      if (!token) {
        console.log('No access token found');
        setIsAuthenticated(false);
        setLoading(false); // Stop loading if token is not found
        return;
      }

      try {
        const response = await fetch('https://devfest-t8bx.onrender.com/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the access token to check its validity
          },
        });

        if (response.ok) {
          const data: OrderType[] = await response.json();
          setOrders(data); // Set orders if data is available
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
        You are not authenticated. Please log in to view orders.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full  bg-white">
      {/* Table Header */}
  

      {/* Loading or No Data */}
      {loading ? (
        <div className="w-full text-center mt-4">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="w-full text-center mt-4">No orders found</div>
      ) : (
        orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            date={new Date(order.date).toLocaleDateString()} 
            customer={order.customer}
            phoneNumber={order.phoneNumber}
            location={order.location}
            customerService={order.customerService}
            product={order.product}
            category={order.category || 'N/A'}
            trackCode={order.trackCode}
            status={order.status}
          />
        ))
      )}
    </div>
  );
};

export default OrdersList;
