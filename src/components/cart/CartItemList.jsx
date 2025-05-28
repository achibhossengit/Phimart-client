import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartItemList = ({ handleQuantity, items, handleDeleteItem }) => {
  if (items.length < 1) {
    return (
      <div className="text-center py-10">
        <FiShoppingCart className="mx-auto text-4xl text-gray-400 mb-4" />
        <p className="text-lg mb-4">আপনার কার্টে কোনো আইটেম নেই!</p>
        <button className="btn btn-primary">শপিং করুন</button>
      </div>
    );
  }
  return (
    <div className="bg-base-300 p-5 rounded-xl">
      <h3 className="text-2xl font-bold mb-6">Shopping Cart</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th className="text-left py-4 px-4">Product</th>
              <th className="text-right py-4 px-4">Price</th>
              <th className="text-center py-4 px-4">Quantity</th>
              <th className="text-right py-4 px-4">Total</th>
              <th className="text-center py-4 px-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* items container */}
            {items.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-base-200 rounded-xl border-b border-base-200"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="avatar mr-4">
                      <div className="w-16 h-16 bg-base-300 rounded">
                        {/* Placeholder for product image */}
                      </div>
                    </div>
                    <span className="font-medium">{item.product.name}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-4">${item.product.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleQuantity(item.quantity - 1, item.id)}
                      className="btn btn-ghost btn-sm rounded-full"
                    >
                      <FiMinus className="text-gray-600" />
                    </button>
                    <input
                      min={1}
                      type="number"
                      onChange={(e) => handleQuantity(e.target.value, item.id)}
                      value={item.quantity}
                      className="max-w-12 mx-4 text-center font-medium"
                    />
                    <button
                      onClick={() => handleQuantity(item.quantity + 1, item.id)}
                      className="btn btn-ghost btn-sm rounded-full"
                    >
                      <FiPlus className="text-gray-600" />
                    </button>
                  </div>
                </td>
                <td className="text-right py-4 px-4 font-medium">
                  ${item.total_price.toFixed(2)}
                </td>
                <td className="text-center py-4 px-4">
                  <button onClick={()=>handleDeleteItem(item.id)} className="btn btn-ghost btn-sm text-error">
                    <FiTrash2 className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
            {/* You can add more rows here for other cart items */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemList;
