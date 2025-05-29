import React, { useEffect, useState } from "react";
import OrderCart from "../components/order/OrderCart";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await authApiClient.get("/orders/");
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id == orderId ? { ...order, status: "C" } : order
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <OrderCart
              key={order.id}
              order={order}
              handleCancelOrder={handleCancelOrder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
