const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken') //First Install then Define jsonwebtoken

//Register Function
const registerUser = async (req,res) =>{
   try {
    const user = await UserModel.create(req.body)
     res.json({token:generateToken(user._id)})
   } catch (error) {
    return console.log(error)
   }
}

//Login Function
const loginUser = async (req,res) =>{
  try {
      const user = await UserModel.findOne({email:req.body.email})    
      
        if(user && (await user.matchPassword(req.body.password))){
                            
            return res.json({token:generateToken(user._id)})

        }else{
           console.log(error);
           return res.json({error:'Invalid email or password'}) 
        }
    } catch (error) {
           console.log(error);
           return res.json({error:'Invalid email or password'})  
  }
}



//Get User Profile Function
const getUserProfile = async (req,res) => {
 return res.json(req.user)
}



//User Profile Updated
const updateUserProfile = async (req,res) => {
  const user = await UserModel.findByIdAndUpdate(req.user._id,{
    name:req.body.name,
  },{new:true})
 return res.json(user)
}


//JWT_Token Generate Function
const generateToken = (id) =>{
 const token = jwt.sign({id},process.env.JWT_SECRET,{
          expiresIn:'30d',
        })
        return token;
}

module.exports = {registerUser,loginUser,getUserProfile,updateUserProfile}

