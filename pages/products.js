import React, {useContext, useEffect, useState, useCallback} from 'react';

import {ProductsContext} from '../context/ProductsContext';
import SidePanel from '../components/SidePanel';
import AllCardSection from '../components/AllCardSection';

import classes from '../styles/products.module.scss';

const Products = () => {
    const {products, getProducts} = useContext(ProductsContext);
    const [localProducts, setLocalProducts] = useState([])
    const [category, setCategory] = useState('All Products')
    const [searchedProducts, setSearchedProducts] = useState(null)
    const [search, setSearch] = useState('');
  
    useEffect(() => {
        getProducts();
    },[])

    useEffect(() => {
        setLocalProducts(products)
    },[products])

    useEffect(() => {
        setSearchedProducts(prevProds => {
            return localProducts.filter((prod) => {
                return prod.title.toLowerCase().includes(search.toLowerCase());
            })
        })
    },[search, localProducts])
    

    const categoryChoice = cat => {
        setCategory(cat);
        if(cat === 'All Products') {
            setLocalProducts(products);
        } else {
            setLocalProducts(prevProds => {
                return products.filter(prods => {
                    return cat.toLowerCase() === prods.category;
                })
            })
        }
    }

    const searchSet = (term) => {
        setSearch(term);
    }

    return (
        <div className={classes.products}>
            <SidePanel catFun={(cat) => {categoryChoice(cat)}}/>
            <AllCardSection products={searchedProducts ? searchedProducts : localProducts} searchFun={(item) => {searchSet(item)}} searchvalue={search} title={category}/>
        </div>
    )
}

export default Products;
