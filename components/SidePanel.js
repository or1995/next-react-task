import React from 'react';

import classes from '../styles/SidePanel.module.scss';

const SidePanel = (props) => {
    return (
        <div className={classes.panel}>
            <h1>Categories</h1>
            <ul>
                <li><button onClick={() => {props.catFun('All Products')}}>All</button></li>
                <li><button onClick={() => {props.catFun("Men's Clothing")}}>Men clothing</button></li>
                <li><button onClick={() => {props.catFun("Women's Clothing")}}>Women clothing</button></li>
                <li><button onClick={() => {props.catFun('Jewelery')}}>Jewelery</button></li>
                <li><button onClick={() => {props.catFun('Electronics')}}>Electronics</button></li>
            </ul>
        </div>
    )
}

export default SidePanel;