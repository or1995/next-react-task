import {cart} from '../../../data';

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(cart);
    } else if (req.method === 'POST') {
        cart[0].push(req.body);
        cart[1] = cart[1] + req.body.price;
        res.status(200).json(cart);
    }
}