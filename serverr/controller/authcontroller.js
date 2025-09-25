const User=require("./../models/userModel");
const jwt =require('jsonwebtoken');
const bcrypt = require("bcryptjs");

 const signtoken=(id)=>{
    return jwt.sign({id},process.env.SECRET_STR,{
            expiresIn:process.env.LOGIN_EXPIRES
           }) 
 }
const createuser= async(req,res,next)=>{
    try {
        const newuser=await User.create(req.body);
           const token=signtoken(newuser._id);
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

const login= async(req,res,next)=>{
    try {
       
        const{email,password}=req.body;
      
        if(!email||!password)
        { 

          return res.status(400).json({message:"Please provide the email or pssword"})
        }

         const user= await User.findOne({email}).select("+password");
         

        if(!user||!(await bcrypt.compare(password,user.password)))
        { 

          return res.status(400).json({message:"Please provide the  correct email or pssword"})
        }
           const token =signtoken(user._id)
        res.status(200).json({
            success:true,
            message:"Logged in",
           token:''
        })
    } catch (error) {
        
          res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
}
module.exports={createuser,login};