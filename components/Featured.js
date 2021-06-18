import React, {useContext,useState} from 'react';

import {ProductsContext} from '../context/ProductsContext';

const Featured = () => {
    const {products, getProducts} = useContext(ProductsContext);
    const [featuredCards, setFeaturedCards] = useState([]);
    return (
        <div className={classes.featured}>
            {products}
        </div>
    )
}

export default Featured;