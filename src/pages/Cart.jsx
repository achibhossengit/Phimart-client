import React, { useEffect } from 'react';
import useCart from '../hooks/useCart';

const Cart = () => {
    const {createOrGetCart, addCartItem, cart} = useCart()
    const data = {product_id: 26, quantity: 1}
    useEffect(()=>{
        // createOrGetCart()
        // console.log(cart.id);
        // const res = addCartItem(data);
        // console.log(res);
    }, [])
    // console.log(cart);
    // console.log(cart.id);
    return (
        <div>
            <p>This is cart page well come here</p>
        </div>
    );
};

export default Cart;