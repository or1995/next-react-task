import React from 'react';

import ProductCard from './ProductCard';

import classes from '../styles/CardSection.module.scss';

const CardSection = (props) => {
    return (
        <div className={classes.section}>
            <h3 className={classes.section_title}>{props.title}</h3>
            <div className={classes.section_cards}>
                {props.products ? props.products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default CardSection;