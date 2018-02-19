const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name : { type: String },
    category : { type : String },
    price : { type : Number }
}, {
    collection : 'products'
})

module.exports = mongoose.model('Products', Product)
