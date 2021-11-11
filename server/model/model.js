const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    nama:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        required:true
    }

})

const userDb = mongoose.model('userdb',schema)
module.exports = userDb