const nodemailer=require('nodemailer');
const fs=require('fs').promises;;
const path = require("path");
const sendemail= async (options)=>{
 // Create a transporter
  try {
    const transporter=nodemailer.createTransport({
   service: 'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    }
  })
 const templatepath=path.join(__dirname,"../templates/forgetemail.html")
  let html=await fs.readFile(templatepath,'utf-8')
  html=html.replace("{{email}}", options.email)
  html=html.replace("{{resetLink}}", options.reseturl)


  const mailOptions = {
     from: `Jewellery Support <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    html
  };

  // Send email
  await transporter.sendMail(mailOptions);
  
  } catch (error) {
   
    console.error(" Email sending error:", error);
  }
};
module.exports=sendemail;