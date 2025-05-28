import React from "react";

const CartSummary = ({totalPrice, itemCount}) => {
  const shipping = (totalPrice > 0 ? 50 : 0)
  return (
    <div className="card bg-base-300 card-body">
      <h4 className="card-title text-lg mb-4">Order Summary</h4>
      <div className="flex justify-between mb-2">
        <span>Products</span>
        <span>{itemCount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping}</span>
      </div>
      <div className="flex justify-between mb-4 font-bold text-lg">
        <span>Total</span>
        <span>${(totalPrice + shipping).toFixed(2)}</span>
      </div>
      <button className="btn btn-primary w-full">Checkout</button>
    </div>
  );
};

export default CartSummary;
