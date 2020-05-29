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
    }
});

module.exports = mongoose.model('company.js', CompanySchema);