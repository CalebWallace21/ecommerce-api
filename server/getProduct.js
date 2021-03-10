const products = require('../products.json');

const getProduct = (req, res) => {
    const item = products.find((items) => items.id === parseInt(req.params.id))
    if (!item) {
        return res.status(500).send('Item not in List')
    }
    res.status(200).send(item)
}

module.exports = getProduct