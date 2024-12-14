"use client";

import React, { useEffect, useState } from "react";
import Order from "./order"; // Ensure this path is correct

type OrderType = {
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

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = getCookie("accessToken");

      if (!token) {
        console.warn("No access token found");
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://devfest-t8bx.onrender.com/orders/details", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.warn("Failed to fetch orders. Invalid token or server error.");
          setIsAuthenticated(false);
          return;
        }

        const data = await response.json();
        console.log("Fetched orders:", data);

        const mappedOrders = data.map((order: any) => ({
          id: order.oid.toString(),
          date: new Date(order.createdAt).toLocaleDateString(),
          status: order.status || "Pending",
          quantity: order.quantity,
          customerId: order.Client?.cid || null,
          customerName: order.Client?.fullname || null,
          customerAddress: order.Client?.adress || null,
          customerPhone: order.Client?.phone || null,
          productId: order.Product?.pid || null,
          productName: order.Product?.name || null,
          productPrice: order.Product?.price || null,
        }));

        setOrders(mappedOrders);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center mt-4">Loading orders...</div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-full text-center mt-4">
        You are not authenticated. Please log in to view orders.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {orders.length === 0 ? (
        <div className="w-full text-center mt-4">No orders found</div>
      ) : (
        orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            date={order.date}
            status={order.status}
            quantity={order.quantity}
            customerId={order.customerId}
            customerName={order.customerName}
            customerAddress={order.customerAddress}
            customerPhone={order.customerPhone}
            productId={order.productId}
            productName={order.productName}
            productPrice={order.productPrice}
          />
        ))
      )}
    </div>
  );
};

export default OrdersList;
