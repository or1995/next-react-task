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

    const resetCurrentProduct = () => {
        console.log('unmount');
        setCurrentProduct(null);
    }

    const getCart = () => {
        console.log('hi');
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

        console.log(cart, findProduct);

        if(findProduct[0]) {
            const productIndex = cart[0].findIndex(item => {
                return product.id === item.id
            })

            const newCartItems = cart[0];
            newCartItems[productIndex].quantity = newCartItems[productIndex].quantity + 1;
            
            const newTotal = cart[1] + product.price;
            const replaceProduct = newCartItems[productIndex];

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
            console.log('helooooooooooooo')
            fetch('/api/cart', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({...product, quantity: 1})
              }).then(res => {
                  console.log('hiiiiiiiiiii');
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