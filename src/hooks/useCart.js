import { useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // create cart
  const createOrGetCart = async () => {
    try {
      const response = await authApiClient.post("/carts/");
      setCart(response.data);
      setCartId(response.data.id);
      localStorage.setItem("cartId", response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  // add cart item
  const addCartItem = async (product_data) => {
    if (!cartId) await createOrGetCart();
    try {
      const response = await authApiClient.post(
        `/carts/${cartId}/items/`,
        product_data
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { cart, createOrGetCart, addCartItem };
};

export default useCart;
