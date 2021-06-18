import React, { useContext, useState, useEffect } from 'react';

import {ProductsContext} from '../context/ProductsContext';
import Header from '../components/Header';
import CardSection from '../components/CardSection';

export default function Home() {
  const {products, getProducts} = useContext(ProductsContext);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [latestProducts, setLatestProducts] = useState(null);


  useEffect(() => {
      getProducts()
  },[])

  useEffect(() => {
      setFeaturedProducts(products.slice(0,4));
      setLatestProducts(products.slice(-4));
  }, [products])

  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <Header/>
      <CardSection title="Latest Products" products={latestProducts}/>
      <CardSection title="Featured Products" products={featuredProducts}/>
    </div>
  )
}
