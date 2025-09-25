const User=require("./../models/userModel");
const util = require("util");

const jwt =require('jsonwebtoken');
const bcrypt = require("bcryptjs");

 const signtoken=(id)=>{
    return jwt.sign({id},process.env.SECRET_STR,{
            expiresIn:process.env.LOGIN_EXPIRES
           }) 
 }
 const getalluser=async(req,res,next)=>{
    try {
         const alluser= await User.find();
         res.status(200).json({
            success:true,
            lenght:alluser.lenght,
            data:{
                alluser:alluser
            }

         })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Server error",
            err:error.message

         })
    }
    next();
   
 }
const createuser= async(req,res,next)=>{
    try {
        const newuser=await User.create(req.body);
           const token=signtoken(newuser._id);
        res.status(201).json({

            success:true,
            token:token,
            message:"User is created",
           data:{
            
                user:newuser,
                
            }
        })
        next();
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
           token:token
        })
        next();
    } catch (error) {
        
          res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
    
}

const protect= async (req,res,next)=>{
// 1 Read the token and  check if exist
try {
    const testtoken=req.headers.authorization;
 let token;
 if(testtoken && testtoken.startsWith('bearer'))
 {
    token=testtoken.split(' ')[1]
    

 }
 console.log(token)
 if(!token){
    return res.status(400).json({
        message:"you are not loggeg inn"
    })
 }
  
 // 2 Validate the token

  const decodedtoken=  await util.promisify(jwt.verify)(token,process.env.SECRET_STR)
  // 3 If the user exists
     const user=await User.findById(decodedtoken.id)
     if(!user)
     {
        return res.status(401).json({
             message:"The user is not exist"
        })
     }
     const ispasschange= await user.passwordchanged(decodedtoken.iat)
     if(ispasschange)
     {
        return res.status(401).json({
            message:"The password has changed recently.Please login again"
        })
     }

 next();
} catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token. Login again",
    });
}
 
}
module.exports={createuser,login,protect,getalluser};