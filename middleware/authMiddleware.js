const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')

const protect =  async (req,res,next) =>{
    try {
        let token;
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await UserModel.findById(decoded.id).select('-password')

            console.log(req.user);    

             next();
        }else{
            return res.status(400).json({error:"Not authorization"})
        }
    } catch (error) {
        console.log(error);
                     return res.status(400).json({error:"Not authorization"})

    }
}

module.exports = {protect}