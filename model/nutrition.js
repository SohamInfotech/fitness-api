const mongoose = require('mongoose')
const  nutrition = new  mongoose.Schema({
    UserId1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"workout"
    },
    food:{
        type:String,
        required:true
    },
    calories:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('nutrition',nutrition)