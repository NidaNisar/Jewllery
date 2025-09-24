const User=require("./../models/userModel");
const jwt =require('jsonwebtoken');
 
const createuser= async(req,res,next)=>{
    try {
        const newuser=await User.create(req.body);
           const token=jwt.sign({id:newuser._id},process.env.SECRET_STR,{
            expiresIn:process.env.LOGIN_EXPIRES
           }) 
        res.status(201).json({
            success:true,
            message:"User is created",
           data:{
                user:newuser
            }
        })
    } catch (error) {
        
          res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
}
module.exports={createuser};