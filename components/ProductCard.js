import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {ProductsContext} from '../context/ProductsContext';

import classes from '../styles/ProductCard.module.scss';

const ProductCard = ({product}) => {
    const {postToCart} = useContext(ProductsContext);

    return (
        <div className={classes.productcard}>
            <div className={classes.productcard_imagecontainer}>
                <Image src={product.image} alt={product.title}  layout={'fill'} objectFit={'contain'} />
            </div>
            <div className={classes.productcard_info}>
                <h4>{product.title.length > 24 ? product.title.slice(0,19) + '....' : product.title}</h4>
                <h3>{product.price}$</h3>
            </div>
            <div className={classes.productcard_buttons}>
                <Link href={"product/" + product.id.toString()}>View Product</Link>
                <button onClick={() => { postToCart(product)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;