import React from "react";
import OrderCart from "../components/order/OrderCart";

const Orders = () => {
  const orders = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user: 0,
      status: "N",
      total_price: 125.99,
      shipping: 5.99,
      created_at: "2025-05-29T01:34:50.959Z",
      items: [
        {
          id: 1,
          product: {
            id: 101,
            name: "Premium Novel Collection",
            price: 39.99,
          },
          quantity: 2,
          price: 39.99,
          total_price: 79.98,
        },
        {
          id: 2,
          product: {
            id: 102,
            name: "Designer Coffee Mug",
            price: 15.0,
          },
          quantity: 3,
          price: 15.0,
          total_price: 45.0,
        },
      ],
    },
    {
      id: "4ga85f64-5717-4562-b3fc-2c963f66afa7",
      user: 0,
      status: "P",
      total_price: 89.5,
      shipping: 0.0, // Free shipping
      created_at: "2025-05-28T14:22:10.959Z",
      items: [
        {
          id: 3,
          product: {
            id: 103,
            name: "Wireless Earbuds",
            price: 59.99,
          },
          quantity: 1,
          price: 59.99,
          total_price: 59.99,
        },
        {
          id: 4,
          product: {
            id: 104,
            name: "Screen Cleaner Kit",
            price: 9.99,
          },
          quantity: 3,
          price: 9.99,
          total_price: 29.97,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {orders.map((order) => {
        return (
            <OrderCart key={order.id} order={order}/>
        );
      })}
    </div>
  );
};

export default Orders;
