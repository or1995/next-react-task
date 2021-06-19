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
        const deletedItem = cart[0].filter(item => item.id === parseInt(req.query.id))[0];

        cart[0] = cart[0].filter(item => item.id !== parseInt(req.query.id));

        cart[1] = cart[1] - (deletedItem.quantity * deletedItem.price);

        res.status(200).json(cart);
    } else if (req.method === 'PUT') {
        console.log('-----------------------------------');
        console.log(req.query.id, cart);
        const id = parseInt(req.query.id);
        const currentIndex = cart[0].findIndex(item => {
            return item.id === id;
        })

        cart[0][currentIndex].quantity = cart[0][currentIndex].quantity + 1;
        cart[1] = cart[1] + cart[0][currentIndex].price;
        res.status(200).json(cart);
    }
}