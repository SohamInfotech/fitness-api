const mongoose = require('mongoose')
const  user = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }, 
    profileImage: {
        type: String,
        required: true // Ensures the field is mandatory
    }
})
module.exports = mongoose.model('user',user)