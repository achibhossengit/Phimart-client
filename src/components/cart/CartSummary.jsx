import authApiClient from "../../services/auth-api-client";

const CartSummary = ({ totalPrice, itemCount, cartId }) => {
  const shipping = totalPrice > 0 ? 50 : 0;
  const placeOrder = async() => {
    try{
      const response = authApiClient.post('/orders/', {cart_id: cartId})
      alert('Order placed successfully!')
    }catch(error){
      console.log(error);
    }
  };

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
      <button onClick={()=>placeOrder()} className="btn btn-primary w-full">Checkout</button>
    </div>
  );
};

export default CartSummary;
