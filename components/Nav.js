import React from 'react';

import Logo from './Logo';
import NavLinks from './NavLinks';


import classes from '../styles/Nav.module.scss';

const Nav = () => {
    return(
        <div className={classes.nav}>
            <Logo/>
            <NavLinks/>
        </div>
    )
}

export default Nav;