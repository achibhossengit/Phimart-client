import React from "react";

const Orders = () => {
  return (
    <div className="bg-white shadow-xl p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Order ID</th>
              <th className="border border-gray-200 px-4 py-2">Customer</th>
              <th className="border border-gray-200 px-4 py-2">Status</th>
              <th className="border border-gray-200 px-4 py-2">Order Date</th>
              <th className="border border-gray-200 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">7739473</td>
              <td className="border border-gray-200 px-4 py-2">Sujata Datta</td>
              <td className="border border-gray-200 px-4 py-2 text-yellow-600 font-medium">
                Pending
              </td>
              <td className="border border-gray-200 px-4 py-2">May 5, 2025</td>
              <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                ₹50,000
              </td>
            </tr>
            <tr className="even:bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">7739473</td>
              <td className="border border-gray-200 px-4 py-2">Sujata Datta</td>
              <td className="border border-gray-200 px-4 py-2 text-yellow-600 font-medium">
                Pending
              </td>
              <td className="border border-gray-200 px-4 py-2">May 5, 2025</td>
              <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                ₹50,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
