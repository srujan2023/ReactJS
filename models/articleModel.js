const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    title:{
        type:String,
        required:[true,'Article title is required']
    },
    body:{
        type:String,
        required:[true,'Article body is required'],
    },
    image:{
        type:String
    },
    status:{
        type:String,
        enum:['public','private'],
        default:'private'
    },

},{
    timestamps:true
})

module.exports = mongoose.model('Article',articleSchema)