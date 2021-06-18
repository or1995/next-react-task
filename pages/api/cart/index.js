import {cart} from '../../../data';

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(cart);
    } else if (req.method === 'POST') {
        cart.push(req.body)
    }
}