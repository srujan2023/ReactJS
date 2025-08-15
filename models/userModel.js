const mongoose = require('mongoose')
const bcyrpt = require('bcryptjs')//bcyrpt na install madabeku

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
        password:{
            type:String,
            required:true
        }
},{
    timestamps:true
})


//MatchPassword Function
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcyrpt.compare(enteredPassword,this.password)
}


//password encyrpt function 
userSchema.pre('save',async function(){
    const salt = await bcyrpt.genSalt(10);
    this.password = await bcyrpt.hash(this.password,salt)
})

module.exports = mongoose.model('User',userSchema)