'use client';

import React, { useEffect, useState } from 'react';
import Customer from './costumer'; // Ensure the correct path

type CustomerType = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;  // Replaced 'address' with 'location'
  registeredDate: string;
  status: string;    // Added 'status' field
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
        const response = await fetch('https://devfest-t8bx.onrender.com/customers', {
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
    <div className="flex flex-col w-full p-4 bg-white">
      {/* Table Header */}
      <div className="w-full flex justify-start items-center gap-6 h-[50px] bg-[#F3F4F5] text-black rounded-[10px] shadow-md p-4 font-bold">
        <div className="w-[15%]">ID</div>
        <div className="w-[15%]">Name</div>
        <div className="w-[15%]">Email</div>
        <div className="w-[15%]">Phone Number</div>
        <div className="w-[15%]">Location</div>  {/* Changed 'Address' to 'Location' */}
        <div className="w-[15%]">Status</div>    {/* Added 'Status' */}
      </div>

      {/* Loading or No Data */}
      {loading ? (
        <div className="w-full text-center mt-4">Loading customers...</div>
      ) : customers.length === 0 ? (
        <div className="w-full text-center mt-4">No customers found</div>
      ) : (
        customers.map((customer) => (
          <Customer
            key={customer.id}
            id={customer.id}
            name={customer.name}
            email={customer.email}
            phoneNumber={customer.phoneNumber}
            location={customer.location}
            status={customer.status}
          />
        ))
      )}
    </div>
  );
};

export default CustomersList;
