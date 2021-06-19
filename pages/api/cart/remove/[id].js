import {cart} from '../../../../data';

export default function handler(req, res) {
    if (req.method === 'PUT') {
        const currentIndex = cart[0].findIndex(item => {
            console.log(item.id,parseInt(req.query.id))
            return item.id === parseInt(req.query.id);
        })

        console.log(currentIndex);

        cart[0][currentIndex].quantity = cart[0][currentIndex].quantity - 1;
        cart[1] = cart[1] - cart[0][currentIndex].price;
        
        res.status(200).json(cart);
    }
}