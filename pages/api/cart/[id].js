import {cart} from '../../../data';

export default function handler(req, res) {
    if(req.method === 'GET') {
        const oneProduct = cart.filter(item => item.id === req.query.id);

        if(oneProduct.length > 0) {
            res.status(200).json(oneProduct[0]);
        } else {
            res.status(404).json({error: 'product not found'})
        }      
    } else if (req.method === 'DELETE') {
        cart = cart.filter(item => item.id !== req.query.id);
        res.status(200).json(cart);
    
    } else if (req.method === 'PUT') {
        const currentIndex = cart[0].findIndex(item => {
            return item.id === parseInt(req.query.id);
        })

        cart[0][currentIndex].quantity = cart[0][currentIndex].quantity + 1;
        console.log(cart[1] + cart[0][currentIndex].price)
        cart[1] = cart[1] + cart[0][currentIndex].price;
        res.status(200).json(cart);
    }
}