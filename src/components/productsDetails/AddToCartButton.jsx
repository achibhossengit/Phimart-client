import React, { useState } from "react";
import { FaCheck, FaShoppingCart, FaSpinner } from "react-icons/fa";

const AddToCartButton = ({ product = { stock: 7 } }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [shake, setShake] = useState(false);

    const handleIncrease = ()=>{
        if (quantity < product.stock){
            setQuantity(quantity+1)
        }
    };
    const handleDecrease = ()=>{
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    };

  const handleButtonClick = () => {
    if (isAdded) return;
    
    setIsAdding(true);
    setTimeout(() => {
      setIsAdded(true);
      setIsAdding(false);
      setTimeout(() => setIsAdded(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Quantity Selector */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Quantity</span>
        <div className={`flex border rounded-md ${shake ? 'animate-shake' : ''}`}>
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-l-md"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="text"
            min="1"
            max={product.stock}
            value={quantity}
            className="w-12 text-center border-t border-b border-gray-200 py-1 px-2 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
            aria-label="Product quantity"
          />
          <button
            onClick={handleIncrease}
            disabled={quantity >= product.stock}
            className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-r-md"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleButtonClick}
        disabled={isAdding || !product.stock}
        className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2
          ${
            isAdded
              ? 'bg-green-100 text-green-800'
              : isAdding
              ? 'bg-pink-400 text-white cursor-wait'
              : 'bg-pink-600 hover:bg-pink-700 text-white cursor-pointer'
          }
          ${!product.stock ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}
        `}
        aria-live="polite"
      >
        {isAdding ? (
          <>
            <FaSpinner className="animate-spin" />
            Adding...
          </>
        ) : isAdded ? (
          <>
            <FaCheck />
            Added to Cart
          </>
        ) : (
          <>
            <FaShoppingCart />
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </>
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;