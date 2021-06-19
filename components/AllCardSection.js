import React from 'react';

import ProductCard from './ProductCard';

import classes from '../styles/AllCardSection.module.scss';

const AllCardSection = (props) => {
    return (
        <div className={classes.section}>
            <div className={classes.section_header}>
                <h3>{props.title}</h3>
                <div className={classes.section_header_search}>
                    <input type="text" value={props.searchvalue} onChange={e => {props.searchFun(e.target.value)}} placeholder="Search"/>
                </div>
            </div>
            <div className={classes.section_cards}>
                {props.products ? props.products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                }): null}
            </div>
            <div className={classes.section_pagination}>

            </div>
        </div>
    )
}

export default AllCardSection;