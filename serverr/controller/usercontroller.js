const User=require("./../models/userModel");
const util = require("util");
const sendEmail=require('./../utils/email')
const jwt =require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const crypto=require('crypto');
const { error } = require("console");
const filterReqObj=(obj, ...allowedfields)=>{
    const newobj={};
    Object.keys(obj).forEach(prop=>{
        if(allowedfields.includes(prop))
            newobj[prop]=obj[prop];
    })
    return newobj;

}
const updatepassword= async (req,res,next)=>{
    try {
        const {password,confirmpassword}=req.body
        //Get cuurrent user data from database
        const user= await User.findById(req.user._id).select('+password');
        // Check if current supplie password is incorrect
        if(!(await bcrypt.compare(req.body.currentpassword,user.password))){
               return res.status(401).json({
                success:false,
                message:"The Current password you supplied is wrong"
               })
        }
          if( confirmpassword!==password)
          {
              return res.status(401).json({
                success:false,
                message:"The confrim Password or Password does not match"
               })
          }
        // If the supply password is correct Update user password with new value
        user.password=req.body.password;
        user.confirmpassword=req.body.confirmpassword;
        await user.save();
        // Login the user and send JWT
        const token=signtoken(user._id)
        res.status(200).json({
            success:true,
            error:error,
            token:token,
            data:{
                user:user
            }
        })
    } catch (error) {
         return res.status(400).json({
            error:error.stack,
            err:error.message
        })
    }
}

const updateme= async (req,res,next)=>{
    try {
        const{password,confirmpassword,email,Firstname,Secondname}=req.body;
    // Check if request data contain password or confirm password
    if(password||confirmpassword)
    {
        return res.json(400).json({
            message:"You cannot update your password using thiss end point"
        })
    }
    // update the user details
    const filterobj=filterReqObj(req.body,'Firstname','Secondname','email')
    const updateduser=await User.findByIdAndUpdate(req.user._id,filterobj,{runValidators:true,new:true})
  await  updateduser.save()
     res.status(200).json({
        sucess:true,
        message:"Your information is update"
     })
        
    } catch (error) {
         return res.status(400).json({
            error:error.stack,
            err:error.message
        })
    }
}
const deleteme= async (req,res,next)=>{
    try {
        await User.findByIdAndUpdate(req.user._id, { active: false });
     res.status(204).json({
      status: 'success',
      data: null
    });
        
    } catch (error) {
       return res.status(400).json({
            error:error.stack,
            err:error.message
        })
}
}
module.exports={updatepassword,updateme,deleteme};