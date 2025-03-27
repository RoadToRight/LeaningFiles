const mongoose = require('mongoose');

let Schema = new mongoose.Schema({name:String , email:String,password:String});
let Model = mongoose.model('users',Schema);

module.exports = Model;