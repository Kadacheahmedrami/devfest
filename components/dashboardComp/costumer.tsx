'use client';
import React from 'react';

type CustomerProps = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;  // Changed 'address' to 'location'

  status: string;    // Added 'status' field
};

const Customer: React.FC<CustomerProps> = ({
  id,
  name,
  email,
  phoneNumber,
  location,   // Changed 'address' to 'location'

  status,      // Added 'status'
}) => {
  return (
    <>
      <div className="w-full t-24 justify-center items-center gap-10 flex h-[80px] bg-white flex-row rounded-[10px] shadow-md p-4">
        <div>{id}</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <div>{location}</div>  {/* Changed 'address' to 'location' */}
  
        <div>{status}</div>    {/* Added 'status' */}
      </div>
      <div className="w-full h-[2px] bg-slate-400"></div>
    </>
  );
};

export default Customer;
