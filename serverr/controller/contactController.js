const util = require("util");
const validator = require("validator");
const { isEmail } = require("validator");


const sendemail=require('./../utils/contactemail')
const contact= async (req,res,next)=>{
try {
   const{Firstname,Lastname,help,email,message}=req.body;
    
  
 

if (!isEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }
   
       await sendemail({  
       name:`"${Firstname}" "${Lastname}" `,
        subject: "Jewllery",
           help,
           message,
           email,

        
         })
     
       return res.status(200).json({
        success:true,
        message:"Your Request is send"
       })


    // const contact=Contact.create(req.body)
    // res.status(200).json({
    //        success:true,
    //        data:{
    //         contact:contact
    //        }
    // })
    
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
  module.exports={contact}