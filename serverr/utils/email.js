const nodemailer=require('nodemailer');
const sendemail= async (options)=>{
 // Create a transporter
  const transporter=nodemailer.createTransport({
   host:process.env.EMAIL_HOST,
    port:process.env.EMAIL_PORT,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    }
  })
  const mailOptions = {
    from: 'Jewellery Support <support@jewellery.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // Send email
  await transporter.sendMail(mailOptions);
};
module.exports=sendemail;