const express = require('express')
const routes = express.Router()
const Company = require('../models/Company');

//index && filter
routes.get('/', async (request, response) => {
    console.log(request.query)
    await Company.find(request.query)
        .then((docs) => response.json({data: docs, message: ''}))
        .catch((err) => response.json({data: {}, message: err}))
})

//create
routes.post('/', (request, response) => {
    const body = request.body;
    Company.create({
        title: body.title,
        phone: body.phone
    }).then(Company => response.json({message: 'Company ' + Company.title + ' is added to the database'}, 201))
        .catch((err) => response.json({message: err}, 422))
});

//get
routes.get('/:CompanyId', async (request, response) => {
    await Company.findById(request.params.CompanyId)
        .then((Company) => response.json({data: Company, message: 'Company ' + Company.title + ' is found'}, 200))
        .catch((err) => response.json({data: {}, message: "not found"}, 404))
})

//delete
routes.delete('/:CompanyId', async (request, response) => {
    // Company.deleteOne({"_id": request.params.CompanyId})
    //   .then((result) => response.json({message: "deleted successfully", data: result}))
    //           .catch(err => response.json({message: "not deleted  ", data: err}))
    await Company.deleteOne({_id: request.params.CompanyId})
        .then(function (result) {
            if (result.n > 0) return response.json({message: "deleted successfully"})
            else return response.json({message: " already deleted  "})
        })

})

//update
routes.put('/:CompanyId', async (request, response) => {
    if (Object.keys(request.body).length === 0) {
        return response.status(400).send({
            message: " content can not be empty"
        });
    }
    console.log(request.body)
    const updatedCompany = await Company.updateOne({_id: request.params.CompanyId},
        {$set: {title: request.body.title}})
        .then(function (result) {
            console.log(result)
            return response.status(200).send({
                message: "updated successfully"
            });
        })
})

module.exports = routes


