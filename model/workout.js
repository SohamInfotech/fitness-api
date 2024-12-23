const mongoose = require('mongoose')
const  workout = new  mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"user"
    },
    duration:{
        type:String,
        required:true
    },
    caloriesBurn:{
        type:String,
        required:true
    },
    setTime:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('workout',workout)