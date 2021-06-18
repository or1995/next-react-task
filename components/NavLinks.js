import React from 'react';
import Link from 'next/link';

import classes from '../styles/NavLinks.module.scss';

const NavLink = () => {
    return (
        <ul className={classes.navlinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
        </ul>
    )
}

export default NavLink;