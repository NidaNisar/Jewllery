const User=require("./../models/userModel");
const util = require("util");
const sendEmail=require('./../utils/email')
const jwt =require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const crypto=require('crypto');
const { error } = require("console");
 const createSendRespone=(user,statuscode,res)=>{
    const token =signtoken(user._id)
    const options={
       maxAge: parseInt(process.env.LOGIN_EXPIRES) * 24 * 60 * 60 * 1000,
        httpOnly:true
    }
     if(process.env.NODE_ENV==='production')
        {
            options.secure=true;
        }
    res.cookie('jwt',token,options)
    user.password=undefined
        res.status(statuscode).json({
            success:true,
            message:"Logged in",
           token,
           data:{
            user:user
           }
        })
       
 }
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
           
            createSendRespone(newuser,200,res);
   

       
    } catch (error) {
        
        let message = error.message;

    
    if (error.name === "ValidationError") {
      message = Object.values(error.errors)
        .map(val => val.message)
        .join(", ");
    }

    res.status(400).json({
      success: false,
      message
    });
  }
}
    //   return    res.status(400).json({
    //         success:false,
    //         message: error.message ,
    //         error:error.stack
           
    //     })
    


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
        //    const token =signtoken(user._id)
        // res.status(200).json({
        //     success:true,
        //     message:"Logged in",
        //    token:token
        // })
        createSendRespone(user,200,res);
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
     req.user=user
 next();
} catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token. Login again",
    });
}

 
}
const  restrict =(role)=>{
  return  (req,res,next)=>{
    try {
        if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "User not authenticated",
        });
      }
         if(req.user.role!==role)
   {
    return res.status(403).json({
        success:false,
        message:"You dont have permission for this action.Only for admin"
    })
   
   }
    next()
        
    } catch (error) {
         return res.status(401).json({
     err:{}
    });
    }
  
}
}
const forgetpassword= async (req,res,next)=>{
    try {
         // 1 Get user based on posted email
    const {email}=req.body
    const user= await User.findOne({email});
    if(!user){
        return res.status(404).json({
            success:false,
            message:"The user is not exist with this email"

        })
    }
   
    // 2 Generate a random  reset token
     const resettoken=user.resetpasstoken()
     await user.save({validateBeforeSave:false});

    // 3 Send the token back to user email
    
  //  const reseturl = `${req.protocol}://${req.get('host')}/user/resetpassword/${resettoken}`;
  const reseturl = `http://localhost:3001/reset/${encodeURIComponent(resettoken)}`;



      const message=`We have received a password reset request. Please use the below link to reset your password\n\n ${reseturl}\n\n This reset password link will be valid only for 10 minutes`
     try {
        await sendEmail({
        email:user.email,
        subject:"Password change request receive",
        message:message
       
      })
      console.log("Raw token sent in email:", resettoken);
console.log("Hashed token saved in DB:", user.passwordresettoken);

       return res.status(200).json({
        success:true,
        message:"Password reset  linkk send to the user"
       })
       
       
     } catch (error) {
         console.error(" Controller catch:", error);
        user.passwordresettoken=undefined
        user.passwordresettokenexpires=undefined;
        user.save({validateBeforeSave:false});
        return res.status(500).json({
            success:false,
            error:error.stack,
            message:"There was an error in the sending reset password.Please try again later"
        })
     }
      
    } catch (error) {
          return res.status(401).json({
     err:error,
     stack: error.stack
    });
   
}
}
const resetpassword= async (req,res,next)=>{
    try {
       const rawToken = decodeURIComponent(req.params.token);
const hashtoken = crypto.createHash('sha256').update(rawToken).digest('hex');


           // const hashtoken=crypto.createHash('sha256').update(req.params.token).digest('hex')
 //const user= await  User.findOne({passwordresettoken:hashtoken,passwordresettokenexpires:{$gt:Date.now()}})
 const user = await User.findOne({ passwordresettoken: hashtoken });

if (!user) {
  return res.status(400).json({ message: "Token is invalid (no match in DB)" });
}

if (user.passwordresettokenexpires <= Date.now()) {
  return res.status(400).json({ message: "Token is expired" });
}
  console.log("Raw token from URL:", req.params.token);
console.log("Hashed token from URL:", hashtoken);
 if(!user){
    return res.status(400).json({
        message:"Token is expire or invalid"
    })
 }
 // Reset the user password
  user.password=req.body.password;
  user.confirmpassword=req.body.confirmpassword;
  user.passwordresettoken=undefined
  user.passwordresettokenexpires=undefined
  user.passwordChangedAt=Date.now()
 await user.save();
// token for login to the user
const logintoken =signtoken(user._id)
        res.status(200).json({
            success:true,
            message:"Logged in",
           token:logintoken
        })
        
    } catch (error) {
        return res.status(400).json({
            error:error.stack,
            err:error.message
        })
    }

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
module.exports={createuser,login,protect,getalluser,restrict,forgetpassword,resetpassword,updatepassword};