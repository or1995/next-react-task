import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([[],0]);
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

    const getCart = () => {
        fetch('/api/cart')
        .then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            setCart(res);
        }).catch(err => {
            console.log(err);
        });
    }

    const postToCart = (product) => {
        const findProduct = cart[0].filter(item => {
            return product.id === item.id;
        });

        if(findProduct[0]) {
            const productIndex = cart[0].findIndex(item => {
                return product.id === item.id
            })

            const newCartItems = cart[0];
            newCartItems[productIndex].quantity = newCartItems[productIndex].quantity + 1;
            
            const newTotal = cart[1] + product.price;
            const replaceProduct = newCartItems[productIndex];
            console.log('theid', product.id);
            fetch(`/api/cart/${product.id}`, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(replaceProduct)
              }).then(res => {
                setCart([newCartItems,newTotal]);
              })

        } else {
            fetch('/api/cart', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({...product, quantity: 1})
              }).then(res => {
                setCart(prevCart => {
                    console.log([[...prevCart[0], {...product, quantity: 1}], prevCart[1] + product.price]);
                    return [[...prevCart[0], {...product, quantity: 1}], prevCart[1] + product.price];
                })
              }).catch(err => {
                  console.log(err);
              })
        }
    }

    const removeFromCart = (id) => {
        const productIndex = cart[0].findIndex(item => {
            return id === item.id
        });

        //cart[0][productIndex].quantity = cart[0][productIndex].quantity + 1;
        
        const newTotal = cart[1] - (cart[0][productIndex].quantity * cart[0][productIndex].price);

        console.log(newTotal);


        const newCartItems = cart[0].filter(item => {
            return item.id !== id;
        })

        console.log(newCartItems);
        
        fetch(`/api/cart/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }).then(res => {
            setCart([newCartItems, newTotal]);
          }).catch(err => {
                console.log(err);
            });
    }

    const increaseCartProduct = (id) => {
        const findProduct = cart[0].filter(item => {
            return id === item.id;
        });

        if(findProduct[0]) {
            const productIndex = cart[0].findIndex(item => {
                return id === item.id
            })

            const newCartItems = cart[0];
            newCartItems[productIndex].quantity = newCartItems[productIndex].quantity + 1;
            
            const newTotal = cart[1] + newCartItems[productIndex].price;
            const replaceProduct = newCartItems[productIndex];

            fetch(`/api/cart/${id}`, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(replaceProduct)
              }).then(res => {
                setCart([newCartItems,newTotal]);
              })
        }
    }

    const decreaseCartProduct = (id) => {
        const findProduct = cart[0].filter(item => {
            return id === item.id;
        });

        if(findProduct[0].quantity > 1) {
            const productIndex = cart[0].findIndex(item => {
                return id === item.id
            })

            const newCartItems = cart[0];
            newCartItems[productIndex].quantity = newCartItems[productIndex].quantity - 1;
            
            const newTotal = cart[1] - newCartItems[productIndex].price;
            const replaceProduct = newCartItems[productIndex];

            fetch(`/api/cart/remove/${id}`, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(replaceProduct)
              }).then(res => {
                setCart([newCartItems, newTotal]);
              })
        } else {
            removeFromCart(id);
        }
    }


    return  (<ProductsContext.Provider value={{
        products: products,
        currentProduct: currentProduct,
        cart: cart,
        getProducts: getProducts,
        getCurrentProduct: getCurrentProduct,
        getCart: getCart,
        postToCart: postToCart,
        removeFromCart: removeFromCart,
        increaseCartProduct: increaseCartProduct,
        decreaseCartProduct: decreaseCartProduct
    }}>{props.children}</ProductsContext.Provider>)
}