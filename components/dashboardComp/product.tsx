'use client';

import React from 'react';

type ProductProps = {
  id: number;               // Changed from string to number to match the pid
  name: string;
  category: string;
  status: string;           // Added status
  addDate: string;          // Added add date
  inventory: number;        // Added inventory
  sales: number;            // Added sales
  price: string;            // Changed price to string to match the price format in the data
};

const Product: React.FC<ProductProps> = ({
  id,
  name,
  category,
  status,
  addDate,
  inventory,
  sales,
  price,
}) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-10 flex-row h-[80px] bg-white rounded-[10px] shadow-md p-4">
        <div className='w-[10%]'>{id}</div>
        <div className='w-[20%]'>{name}</div>
        <div className='w-[15%]'>{category || 'N/A'}</div>  {/* Handle null or undefined category */}
        <div className='w-[15%]'>{status}</div>            {/* Display status */}
        <div className='w-[15%]'>{addDate}</div>           {/* Display add date */}
        <div className='w-[10%]'>{inventory} in inventory</div> {/* Display inventory */}
        <div className='w-[10%]'>{sales} sold</div>        {/* Display sales */}
        <div className='w-[10%]'>${parseFloat(price).toFixed(2)}</div>  {/* Display price, ensure it's in correct format */}
      </div>
      <div className="w-full h-[2px] bg-slate-400"></div>
    </>
  );
};

export default Product;
