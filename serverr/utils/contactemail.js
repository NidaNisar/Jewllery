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
 const templatepath=path.join(__dirname,"../templates/contactemail.html");
 let html= await fs.readFile(templatepath,'utf-8')
   
  html=html.replace("{{name}}",options.name)
   html=html.replace("{{email}}",options.email)
   html=html.replace("{{message}}",options.message)
     html=html.replace("{{help}}",options.help)
  const mailOptions = {
     from: options.name,
    to: `Jewellery <${process.env.EMAIL_USER}>`,
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