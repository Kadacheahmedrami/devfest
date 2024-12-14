'use client';

import React from 'react';

type OrderProps = {
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

const Order: React.FC<OrderProps> = ({
  id,
  date,
  customer,
  phoneNumber,
  location,
  customerService,
  product,
  category,
  trackCode,
  status,
}) => {
  return (
    
    <div className="w-full t-24  justify-center items-center gap-10 flex h-[80px] bg-white flex-row rounded-[10px] shadow-md p-4">
      <div>{id}</div>
      <div>{date}</div>
      <div>{customer}</div>
      <div>{phoneNumber}</div>
      <div>{location}</div>
      <div>{customerService}</div>
      <div>{product}</div>
      <div>{category}</div>
      <div>{trackCode}</div>
      <div>{status}</div>
      
    </div>
   
    
  );
};

export default Order;
