const util = require("util");

const sendemail=require('./../utils/contactemail')
const contact= async (req,res,next)=>{
try {
   const{Firstname,Lastname,help,email,message}=req.body;
    
       await sendemail({  
      from: `"${Firstname}" "${Lastname}" <${email}>`,
        subject: `${help}`,
        text: ` You have received a new message from the  ${email} .
        Name: ${Firstname} ${Lastname}
        Message:
        ${message}` })
     
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