import React from 'react';

import classes from '../styles/Logo.module.scss';

const logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.logo_orange}></div>
            <div className={classes.logo_blue}></div>
            <h1 className={classes.logo_text}>EShop</h1>
        </div>
    )
} 

export default logo;