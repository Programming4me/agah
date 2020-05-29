const express = require('express')
const routes = express.Router()

const Product = require('../models/Product').product;

routes.get('/', (request, response) => {
    Product.find({})
        .then(data => res.json({data}).status(200))
        .catch(err => res.status(404).json({msg: 'No items found : ' + err}));
})

routes.post('/products', (req, res) => {
    const body = req.body;
    const product = new Product();
    product.title = body.title;
    product.save().then()
    console.log(product, req.body);
    res.send('product is added to the database');
});

module.exports = routes