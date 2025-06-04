import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";

const OrderList = () => {
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
  return (
    <div className="bg-white my-5 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Orders
      </h2>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>
            <span class="loading loading-spinner loading-sm"></span> Loading
            Orders...
          </p>
        </div>
      ) : (
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
              {orders.map((order, index) => (
                <tr className="even:bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">
                    {order.id}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {order.user}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-yellow-600 font-medium">
                    {order.status}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {order.created_at}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-green-700 font-semibold">
                    ${order.total_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
