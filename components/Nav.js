import React, {useState} from 'react';

import Logo from './Logo';
import NavLinks from './NavLinks';

import classes from '../styles/Nav.module.scss';

const nav = () => {
    return(
        <div className={classes.nav}>
            <Logo/>
            <NavLinks/>
        </div>
    )
}

export default nav;