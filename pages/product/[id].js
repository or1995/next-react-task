import React, { useContext, useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import {ProductsContext} from '../../context/ProductsContext';

import classes from '../../styles/[id].module.scss';

const Product = () => {
    const {getCurrentProduct, resetCurrentProduct, currentProduct} = useContext(ProductsContext);
    const router = useRouter();
    const id = router.query.id;

  useEffect(() => {
    getCurrentProduct(id);

    return resetCurrentProduct();
  },[id])

  return (
    <div className={classes.product}>
      {currentProduct ? <h1>{currentProduct.title}</h1> : null}
    </div>
  )
}

export default Product;