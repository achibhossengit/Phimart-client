import React from "react";
import OrderTable from "./OrderTable";
import useAuthContext from "../../hooks/useAuthContext";

const OrderCart = ({ order, handleCancelOrder }) => {
  const { user } = useAuthContext();
  let buttonText = 'Not Paid';
  let buttonColor = 'bg-yellow-500'
  const subtotal = order.items.reduce((sum, item) => sum + item.total_price, 0);
  const shipping = 50;
  const total = subtotal + shipping;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if(order.status == 'N'){
    buttonColor = 'bg-yellow-500';
    buttonText = 'Not Paid';
  }else if(order.status == 'R'){
    buttonColor = 'bg-green-500'
    buttonText = 'Ready to Ship'
  }else if(order.status == 'S'){
    buttonColor = 'bg-purple-500'
    buttonText = 'Shipped'
  }else if(order.status == 'D'){
    buttonColor = 'bg-blue-500'
    buttonText = 'Delevered'
  }else if(order.status == 'C'){
    buttonColor = 'bg-gray-200'
    buttonText = 'Canceled'
  }

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
            className={`px-4 py-2 rounded-md font-medium ${buttonColor}`}
          >
            {buttonText}
          </button>
          <button
            onClick={() => handleCancelOrder(order.id)}
            className={`${order.status == 'C' && 'hidden' } px-4 py-2 border hover:cursor-pointer border-gray-300 rounded-md font-medium hover:bg-gray-100`}
          >
            Cancel
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
        {!user.is_staff && order.status === "N" && (
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition duration-200">
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCart;
