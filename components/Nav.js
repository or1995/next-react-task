import React, {useState} from 'react';

import Logo from './Logo';

import classes from '../styles/Nav.module.scss';

const nav = () => {
    return(
        <div className={classes.nav}>
            <Logo/>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Add Product</li>
            </ul>
        </div>
    )
}

export default nav;