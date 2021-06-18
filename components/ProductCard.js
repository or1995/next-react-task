import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from '../styles/ProductCard.module.scss';

const ProductCard = ({product}) => {
    return (
        <div className={classes.productcard}>
            <div className={classes.productcard_imagecontainer}>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src={product.image}/>
            </div>
            <div className={classes.productcard_info}>
                <h4>{product.title.length > 24 ? product.title.slice(0,19) + '....' : product.title}</h4>
                <h3>{product.price}$</h3>
            </div>
            <div className={classes.productcard_buttons}>
                <Link href={"product/" + product.id.toString()}>View Product</Link>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;