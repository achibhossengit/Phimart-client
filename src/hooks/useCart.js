import { useCallback, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  const [loading, setLoading] = useState(false);

  // create cart
  const createOrGetCart = useCallback(async () => {
    setLoading(true)
    try {
      const response = await authApiClient.post("/carts/");
      setCart(response.data);
      setCartId(response.data.id);
      localStorage.setItem("cartId", response.data.id);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }, [cartId])

  // add cart item
  const addCartItem = useCallback(async (product_data) => {
    setLoading(true)
    if (!cartId) await createOrGetCart();
    try {
      const response = await authApiClient.post(
        `/carts/${cartId}/items/`,
        product_data
      );
      return response;
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }, [cartId, createOrGetCart])

  // update quantity
  const updateQuantity = useCallback(async (newQuantity, itemId) =>{
    setLoading(true)
    try{
      const response = await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {quantity: newQuantity});
    }
    catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }, [])


  // delete cart item
  const deleteCartItem = useCallback(async(itemId)=>{
    try{
      await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
    }catch(error){
      console.log(error);
    }
  }, [])

  return { cart, loading, createOrGetCart, addCartItem, updateQuantity, deleteCartItem};
};

export default useCart;
