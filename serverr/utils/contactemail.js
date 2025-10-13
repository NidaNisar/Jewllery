const nodemailer=require('nodemailer');
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
 
  const mailOptions = {
     from: options.from,
    to: `Jewellery <${process.env.EMAIL_USER}>`,
    subject: options.subject,
    text: options.text
  };

  // Send email
  await transporter.sendMail(mailOptions);
  
  } catch (error) {
   
    console.error(" Email sending error:", error);
  }
};
module.exports=sendemail;