import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null)

    const getProducts = () => {
        fetch('/api/products')
        .then(res => {
            return res.json();
        }).then(res => {
            setProducts(res);
        }).catch(err => {
            console.log(err);
        });
    }

    const getCurrentProduct = (id) => {
        fetch(`/api/products/${id}`)
        .then(res => {
            console.log(res);
            return res.json();
        }).then(res => {
            setCurrentProduct(res);
        }).catch(err => {
            console.log(err);
        });
    }

    const resetCurrentProduct = () => {
        console.log('unmount');
        setCurrentProduct(null);
    }

    const getCart = () => {
        fetch('/api/cart')
        .then(res => {
            return res.json();
        }).then(res => {
            setCart(res);
        }).catch(err => {
            console.log(err);
        });
    }

    const postToCart = (product) => {
        fetch('/api/cart', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          }).then(res => {
            setCart(prevCart => {
                return [...prevCart, product];
            }).catch(err => {
                console.log(err);
            });
          })
    }

    const removeFromCart = (id) => {
        fetch(`/api/cart/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(res => {
            setCart(prevCart => {
                return [...prevCart, product];
            }).catch(err => {
                console.log(err);
            });
        })
    }


    return  (<ProductsContext.Provider value={{
        products: products,
        currentProduct: currentProduct,
        cart: cart,
        getProducts: getProducts,
        getCurrentProduct: getCurrentProduct,
        resetCurrentProduct: resetCurrentProduct,
        getCart: getCart,
        postToCart: postToCart,
        removeFromCart: removeFromCart
    }}
    >{props.children}</ProductsContext.Provider>)
}