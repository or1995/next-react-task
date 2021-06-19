import React, {useContext, useState, useEffect} from 'react';
import Link from 'next/link';

import {ProductsContext} from '../context/ProductsContext';

import classes from '../styles/NavLinks.module.scss';

const NavLink = () => {
    const {cart} = useContext(ProductsContext);
    const [cartlength, setCartlength] = useState(0);

    useEffect(() => {
        if(cart[0].length > 0) {
            let initialValue = 0
            let sum = cart[0].reduce(function (accumulator, currentValue) {
                return accumulator + currentValue.quantity
            }, initialValue)

            setCartlength(sum);
        } else {
            setCartlength(0);
        }
    },[cart])

    return (
        <ul className={classes.navlinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            {cart ? <div className={classes.noti}>{cartlength}</div> : null}
        </ul>
    )
}

export default NavLink;