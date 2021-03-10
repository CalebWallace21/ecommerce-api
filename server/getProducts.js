const products = require('../products.json');

const getProducts = (req, res) => {
    if (req.query.price) {
        const filteredItems = products.filter((amount) => 
            amount.price >= parseInt(req.query.price)
        )
        return res.status(200).send(filteredItems) 
    }
    res.status(200).send(products)       
}


module.exports = getProducts