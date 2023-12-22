const mongoose = require('mongoose')

const ReactScema = new mongoose.Schema({
    name : {
        type : String,
        require :[true , 'name is required']
    },
    rate:{
        type:Number,
        require:[true , 'rate is required']
    }
},{timestamps:true})

module.exports.React = mongoose.model('React',ReactScema)
