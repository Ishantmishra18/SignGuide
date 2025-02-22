const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:String,
    cover:{type:String , default:'default.webp'},
    name:String,
    password:String,
    score:Number
});
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel;