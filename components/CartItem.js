import React,{useContext} from 'react';
import Image from 'next/image';

import {ProductsContext} from '../context/ProductsContext';

import classes from '../styles/CartItem.module.scss';

const CartItem = ({item, noedit}) => {
    const {increaseCartProduct, decreaseCartProduct, removeFromCart} = useContext(ProductsContext);

    return (
        <div className={classes.cartitem}>
            <div className={classes.cartitem_imgcontainer}>
                <div>
                    {item.image ? <Image src={item.image} alt={item.title}  layout={'fill'} objectFit={'contain'} /> : null}
                </div>
            </div>
            <div className={classes.cartitem_infocontainer}>
                <h3>{item.title}</h3>
                <h4>{item.price}$ x {item.quantity}</h4>
            </div>
            {!noedit ? <div className={classes.cartitem_controls}>
                <button onClick={() => {decreaseCartProduct(item.id)}}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => {increaseCartProduct(item.id)}}>+</button>
                <button onClick={() => {removeFromCart(item.id)}} className={classes.cartitem_controls_delete}>Delete</button>
            </div>: null}
        </div>
    )
} 

export default CartItem;