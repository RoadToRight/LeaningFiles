const mongoose = require('mongoose');

let ProductsSchema = new mongoose.Schema({ Title: String, Price: Number,Category:String,Brand:String,UserId:String})
let Model = mongoose.model('products',ProductsSchema)

module.exports = Model;