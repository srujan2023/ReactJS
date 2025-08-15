const UserModel = require('../models/userModel')
 
//Register Function
const registerUser = async (req,res) =>{
   try {
    const user = await UserModel.create(req.body)
     res.json(user)
   } catch (error) {
    return console.log(error);
   }
}

//Login Function
const loginUser = async (req,res) =>{
  try {
      const user = await UserModel.findOne({email:req.body.email})    
        console.log(user);
      
        if(user && (await user.matchPassword(req.body.password))){
            return res.json(user)
        }else{
           console.log(error);
        return res.json({error:'Invalid email or password'})            
        }
  } catch (error) {
    console.log(error);
    return res.json({error:'Invalid email or password'})  
  }
}

module.exports = {registerUser,loginUser}

