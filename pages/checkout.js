import React, {useContext, useEffect} from 'react';

import {ProductsContext} from '../context/ProductsContext';
import CartItem from '../components/CartItem';

import classes from '../styles/checkout.module.scss';

const Checkout = () => {
    const {getCart, cart} = useContext(ProductsContext);

    useEffect(() => {
        getCart();
    },[])

    return (
        <div className={classes.checkout}>
            <div className={classes.checkout_items}>
                {cart ? cart[0] ?cart[0].map(item => {
                    console.log(item);
                    return <CartItem key={item.id} item={item} noedit/> 
                }) : null : null}
            </div>
            <div className={classes.checkout_total}>
                <h3>Total Price</h3>
                <h2>{cart ? cart[1].toFixed(2) + '$' : null}</h2>
                <h3>Your order is placed</h3>
            </div>
        </div>
    )
}

export default Checkout;