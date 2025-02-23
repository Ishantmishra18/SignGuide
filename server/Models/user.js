const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:String,
    cover:{type:String , default:'default.webp'},
    name:String,
    password:String,
    score:Number,
    email:String,
    quiz: {
        type: [Number],  // quiz[0] = total attempted, quiz[1] = correct answers
        default: [0, 0]  // Default values
      }                 
});
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel;