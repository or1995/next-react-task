import {products} from '../../../data';

export default function handler(req, res) {
    const oneProduct = products.filter(product => {
            return product.id === parseInt(req.query.id)}
        );

    if(oneProduct.length > 0) {
        res.status(200).json(oneProduct[0]);
    } else {
        res.status(404).json({error: 'product not found'})
    }
}