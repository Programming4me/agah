const express = require('express')
const routes = express.Router()
const Product = require('../models/Product');

//index && filter
routes.get('/', async (request, response) => {
    console.log(request.query)
    await Product.find(request.query)
        .then((docs) => response.json({data: docs, message: ''}))
        .catch((err) => response.json({data: {}, message: err}))
})

//create
routes.post('/', (request, response) => {
    const body = request.body;
    Product.create({
        title: request.body.title,
        company: request.body.company_id
    }).then(product => response.json({message: 'product ' + product.title + ' is added to the database'}, 201))
        .catch((err) => response.json({message: err}, 422))
});

//get
routes.get('/:productId', async (request, response) => {
    await Product.findById(request.params.productId)
        .then((product) => response.json({data: product, message: 'product ' + product.title + ' is found'}, 200))
        .catch((err) => response.json({data: {}, message: "not found"}, 404))
})

//delete
routes.delete('/:productId', async (request, response) => {
    // Product.deleteOne({"_id": request.params.productId})
    //   .then((result) => response.json({message: "deleted successfully", data: result}))
    //           .catch(err => response.json({message: "not deleted  ", data: err}))
    await Product.deleteOne({_id: request.params.productId})
        .then(function (result) {
            if (result.n > 0) return response.json({message: "deleted successfully"})
            else return response.json({message: " already deleted  "})
        })

})

//update
routes.put('/:productId', async (request, response) => {
    if (Object.keys(request.body).length === 0) {
        return response.status(400).send({
            message: " content can not be empty"
        });
    }
    console.log(request.body)
    const updatedProduct = await Product.updateOne({_id: request.params.productId},
        {
            title: request.body.title,
            company: request.body.company_id
        }).then(function (result) {
        console.log(result)
        return response.status(200).send({
            message: "updated successfully"
        });
    })
})

module.exports = routes


