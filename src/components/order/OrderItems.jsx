import React from "react";

const OrderItems = ({item}) => {
  return (
    <tr key={item.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-gray-900">{item.product.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
      <td className="px-6 py-4 whitespace-nowrap font-medium">
        ${item.total_price.toFixed(2)}
      </td>
    </tr>
  );
};

export default OrderItems;
