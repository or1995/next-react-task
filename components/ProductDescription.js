import React from 'react';
import Link from 'next/link';

import classes from '../styles/ProductDescription.module.scss';

const ProductDescription = ({product}) => {
    return product ? 
    (<div className={classes.productdescription}>
        <div className={[classes.watermark,classes.watermark_one].join(' ')}>
            <h1>Ecommerce</h1>
        </div>
        <div className={[classes.watermark,classes.watermark_two].join(' ')}>
            <h1>Shop</h1>
        </div>
        <h3 className={classes.productdescription_title}>Product Description</h3>
        <p>{product.description}</p>
    </div>) : null;
}

export default ProductDescription;