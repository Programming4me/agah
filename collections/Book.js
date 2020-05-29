var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    }
});
var Model = mongoose.model('book', BookSchema);
module.exports = Model;