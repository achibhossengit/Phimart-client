import React, { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import CartItemList from "../components/cart/CartItemList";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const { cart, loading, cartId, createOrGetCart, updateQuantity, deleteCartItem } =
    useCart();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) createOrGetCart();
  }, [createOrGetCart, cart, loading]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart, setLocalCart]);

  const handleQuantity = async (newQuantity, itemId) => {
    if (newQuantity == 0 ) return;
    const prevLocalCartCopy = localCart;
    setLocalCart((prevLocalcart) => {
      const updatedItems = prevLocalcart.items.map(item => 
        item.id === itemId ? {...item, quantity:newQuantity, total_price:newQuantity*item.product.price} : item
      )
      return {
        ...prevLocalcart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price, 0
        ),
      };
    });
    try {
      await updateQuantity(newQuantity, itemId);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy);
    }
  };

  const handleDeleteItem = async (itemId) => {
    setLocalCart((prevLocalcart) => {
        const updatedItems = prevLocalcart.items.filter(item=> item.id != itemId);
        return {...prevLocalcart, items: updatedItems, total_price:updatedItems.reduce((sum, item)=> sum+item.product.price, 0)}
    });
    try {
      await deleteCartItem(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!localCart ? (
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-10">
          <div className="md:col-span-2">
            <CartItemList
              items={localCart.items}
              handleQuantity={handleQuantity}
              handleDeleteItem={handleDeleteItem}
            />
          </div>
          <div>
            <CartSummary
              totalPrice={localCart.total_price}
              itemCount={localCart.items.length}
              cartId={cartId}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
