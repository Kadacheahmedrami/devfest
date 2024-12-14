'use client';

import React from 'react';

type OrderProps = {
  id: string;
  date: string;
  status: string;
  quantity: number;
  customerId: number | null;
  customerName: string | null;
  customerAddress: string | null;
  customerPhone: string | null;
  productId: number | null;
  productName: string | null;
  productPrice: string | null;
};

const Order: React.FC<OrderProps> = ({
  id,
  date,
  status,
  quantity,
  customerId,
  customerName,
  customerAddress,
  customerPhone,
  productId,
  productName,
  productPrice,
}) => {
  return (
    <>
    <div className="w-full flex justify-center w-full items-center gap-10 flex-row h-[80px] bg-white rounded-[10px] shadow-md p-4">
      {/* Order ID */}
      <div className="w-[10%]">{id}</div>

      {/* Product Name */}
      <div className="w-[20%]">{productName || 'Unknown Product'}</div>

      {/* Product Category */}
      <div className="w-[15%]">{productId || 'N/A'}</div>

      {/* Order Status */}
      <div className="w-[15%]">{status}</div>

      {/* Order Date */}
      <div className="w-[15%]">{date}</div>

      {/* Inventory */}
      <div className="w-[10%]">{quantity} in inventory</div>

      {/* Sales */}
      <div className="w-[10%]">{customerId} sold</div>

      {/* Price */}
      <div className="w-[10%]">${parseFloat(productPrice || '0').toFixed(2)}</div>
    </div>
    <div className="w-full h-[2px] bg-slate-400"></div>
    </>
    
  );
};

export default Order;
