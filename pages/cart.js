import React, {useContext, useEffect} from 'react';

import {ProductsContext} from '../context/ProductsContext';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

import classes from '../styles/cart.module.scss';

const Cart = () => {
    const {getCart, postToCart, removeFromCart, cart                                                                    
    } = useContext(ProductsContext);

    useEffect(() => {
        getCart();
    },[])

    console.log(cart);
    console.log(cart[0]);

    return (
        <div className={classes.cart}>
            <div className={classes.cart_items}>
                {cart ? cart[0] ?cart[0].map(item => {
                    console.log(item);
                    return <CartItem key={item.id} item={item}/> 
                }) : null : null}
            </div>
            <div className={classes.cart_total}>
                <h3>Total Price</h3>
                <h2>{cart ? cart[1] + '$' : null}</h2>
                <Button>Checkout</Button>
            </div>
        </div>
    )
}

export default Cart;