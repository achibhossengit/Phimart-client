import React from "react";

const CartSummary = () => {
  return (
    <div className="card bg-base-300 max-h-72 w-full md:w-1/3">
      <div className="card-body">
        <h4 className="card-title text-lg mb-4">Order Summary</h4>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$45.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between mb-4 font-bold text-lg">
          <span>Total</span>
          <span>$50.00</span>
        </div>
        <button className="btn btn-primary w-full">Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
