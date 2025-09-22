const User=require("./../models/userModel");

 
const createuser= async(req,res,next)=>{
    try {
        const newuser=await User.create(req.body);
          
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
            err:error,
           
        })
    }
}
module.exports={createuser};