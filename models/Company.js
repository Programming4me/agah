var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CompanySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    products: {

    }
});

module.exports = mongoose.model('Company', CompanySchema);