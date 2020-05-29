const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ProductSchema = new Schema({
    id: ObjectId,
    title: {
        type: String,
        required: true
    },
    produced_date: {
        type: String
    },
    company: {
        type: ObjectId,
    }
});

module.exports = mongoose.model('Product', ProductSchema);