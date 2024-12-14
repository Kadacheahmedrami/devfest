'use client';

import React, { useEffect, useState } from 'react';
import Customer from './costumer'; // Ensure the correct path

type CustomerType = {
  cid: number; // Matches "cid" in the API response
  fullname: string; // Matches "fullname" in the API response
  adress: string; // Matches "adress" in the API response
  phone: string; // Matches "phone" in the API response
  createdAt: string; // Matches "createdAt" in the API response
  id_user: number | null; // Matches "id_user" in the API response
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

const CustomersList: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerType[]>([]); // Ensure customers is always an array
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie('accessToken');

      if (!token) {
        console.log('No access token found');
        setIsAuthenticated(false);
        setLoading(false); // Stop loading if token is not found
        return;
      }

      try {
        const response = await fetch('https://devfest-t8bx.onrender.com/clients', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Send the access token to check its validity
          },
        });

        if (response.ok) {
          const data: CustomerType[] = await response.json();
          // Ensure that the data is an array
          if (Array.isArray(data)) {
            setCustomers(data); // Set customers if data is an array
            setIsAuthenticated(true);
          } else {
            console.log('Response is not an array:', data);
            setCustomers([]); // Reset customers to an empty array
            setIsAuthenticated(false);
          }
        } else {
          console.log('Invalid token');
          setIsAuthenticated(false);
          setCustomers([]); // Reset customers to an empty array
        }
      } catch (error) {
        console.error('Error during token verification:', error);
        setIsAuthenticated(false);
        setCustomers([]); // Reset customers to an empty array
      } finally {
        setLoading(false); // Stop loading after verification
      }
    };

    checkToken();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="w-full text-center mt-4">
        You are not authenticated. Please log in to view customers.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-white">
 
 

   
      {loading ? (
        <div className="w-full text-center mt-4">Loading customers...</div>
      ) : customers.length === 0 ? (
        <div className="w-full text-center mt-4">No customers found</div>
      ) : (
        customers.map((customer) => (
          <Customer
            key={customer.cid}
            id={customer.cid.toString()} // Convert number to string
            name={customer.fullname}
            location={customer.adress} // Adjust to match the Customer props
            phoneNumber={customer.phone}
            registeredDate={new Date(customer.createdAt).toLocaleDateString()} // Format date
          />
        ))
      )}
    </div>
  );
};

export default CustomersList;
