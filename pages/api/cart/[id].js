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
        //DELETE FROM CART
    }
}