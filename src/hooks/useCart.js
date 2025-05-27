import React, { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
  const [authToken, setAuthToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens")).access
  );
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  // create cart
  const createOrGetCart = async () => {
    try {
      console.log("inside caret try block");
      const response = await apiClient.post(
        "/carts/",
        {},
        { headers: { Authorization: `JWT ${authToken}` } }
      );
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
      const responsse = await apiClient.post(
        `/carts/${cartId}/items/`,
        product_data,
        {
          headers: {
            Authorization: `JWT ${authToken}`,
          },
        }
      );
      return responsse;
    } catch (error) {
      console.log(error);
    }
  };

  return { createOrGetCart, cart, addCartItem };
};

export default useCart;
