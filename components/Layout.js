import React from 'react';
import classes from '../styles/Layout.module.scss';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div className={classes.container}>
            <Nav/>
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;