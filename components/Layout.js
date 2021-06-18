import React from 'react';
import classes from '../styles/Layout.module.scss';

import Nav from './Nav';
import Header from './Header';

const Layout = (props) => {
    return (
        <div className={classes.container}>
            <Nav/>
            <main className={classes.main}>
                {props.children}
            </main>
            <h1>Footer</h1>
        </div>
    )
};

export default Layout;