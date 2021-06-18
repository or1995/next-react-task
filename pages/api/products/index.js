import {products} from '../../../data';

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(products);
    } else if (req.method === 'POST') {
        console.log(req.body);
        products.push(req.body)
    }
}