import React from "react";
import OrderTable from "./OrderTable";

const OrderCart = ({ order }) => {
  const subtotal = order.items.reduce((sum, item) => sum + item.total_price, 0);
  const shipping = 50;
  const total = subtotal + shipping;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      key={order.id}
      className="mb-10 border border-gray-200 rounded-lg overflow-hidden"
    >
      {/* Order header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-4">
        <div className="mb-2 md:mb-0">
          <p className="font-semibold">Order #{order.id.substring(0, 8)}</p>
          <p className="text-gray-600">
            Placed on {formatDate(order.created_at)}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              order.status === "N"
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {order.status === "N" ? "Not Paid" : "Paid"}
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-100">
            {order.status === "N" ? "Cancel" : "Request Return"}
          </button>
        </div>
      </div>

      {/* Items table */}
      <OrderTable items={order.items} />

      {/* Order summary */}
      <div className="max-w-md ml-auto bg-gray-50 p-6 border-t border-gray-200">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium">
              {shipping > 0 ? `${shipping.toFixed(2)}` : "Free"}
            </span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold text-lg">${total.toFixed(2)}</span>
          </div>
        </div>
        {order.status === "N" && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition duration-200">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCart;
