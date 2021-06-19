import React, { useContext, useState, useEffect } from 'react';
import {useRouter} from 'next/router';

import {ProductsContext} from '../../context/ProductsContext';
import ProductHeader from '../../components/ProductHeader';
import ProductDescription from '../../components/ProductDescription';

import classes from '../../styles/[id].module.scss';

const Product = () => {
    const {getCurrentProduct, currentProduct, getProducts, getCart} = useContext(ProductsContext);
    const router = useRouter();
    const id = router.query.id;


  useEffect(() => {
    if(!currentProduct) {
      getCurrentProduct();
      getCart();
      getProducts();
    }
  },[])

  useEffect(() => {
    getCurrentProduct(id);
  },[id])

  return currentProduct ?
    <div className={classes.product}>
      <ProductHeader product={currentProduct}/>
      <ProductDescription product={currentProduct}/>
    </div> : null;
  
}

export default Product;