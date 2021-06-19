import React, {useContext} from 'react';
import Image from 'next/image';

import {ProductsContext} from '../context/ProductsContext';
import Button from './Button';

import classes from '../styles/ProductHeader.module.scss';


const ProductHeader = ({product}) => {
    const {postToCart} = useContext(ProductsContext);

    return product ? 
            (<div className={classes.productheader}>
                <div className={[classes.watermark,classes.watermark_one].join(' ')}>
                    <h1>Ecommerce</h1>
                </div>
                <div className={[classes.watermark,classes.watermark_two].join(' ')}>
                    <h1>Shop</h1>
                </div>
                <div className={classes.productheader_imgcontainer}>
                    <div>
                        {product.image ? <Image src={product.image} alt={product.title}  layout={'fill'} objectFit={'contain'} /> : null}
                    </div>
                </div>
                <div className={classes.productheader_infocontainer}>
                    <h2>{product.title}</h2>
                    <h3>{product.price}$</h3>
                    <div>
                        <Button type="primary"  click={() => { postToCart(product)}}>Add to Cart</Button>
                    </div>
                </div>
            </div>) : null;
    
}

export default ProductHeader;