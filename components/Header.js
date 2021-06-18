import React from 'react';

import Button from './Button';

import classes from '../styles/Header.module.scss';



const header = () => {
    return(
        <div className={classes.header}>
            <div className={[classes.watermark,classes.watermark_one].join(' ')}>
                <h1>Ecommerce</h1>
            </div>
            <div className={[classes.watermark,classes.watermark_two].join(' ')}>
                <h1>Shop</h1>
            </div>
            <div className={classes.header_left}>
                <h1><span>Welcome</span> to Ecommerce Shop</h1>
                <h3>Great Products for You.</h3>
                <div>
                    <Button type="primary">All Products</Button>
                    <Button type="secondary">Cart</Button>
                </div>
            </div>
            <div className={classes.header_right}>
                <div className={classes.header_right_photoone}></div>
                <div className={classes.header_right_phototwo}></div>
            </div>
        </div>
    )
}

export default header;