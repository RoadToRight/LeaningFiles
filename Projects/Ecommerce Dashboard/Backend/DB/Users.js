const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({Name:String,Email:String,Password:String});
let Model = mongoose.model('users',UsersSchema)

module.exports = Model;