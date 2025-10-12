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
  console.log(" Email sent successfully to:", options.email);
  const mailOptions = {
     from: `Jewellery Support <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // Send email
  await transporter.sendMail(mailOptions);
  console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response from Gmail:", info.response);
  } catch (error) {
   
    console.error(" Email sending error:", error);
  }
};
module.exports=sendemail;