const express=require("express");
const rate_limit=require('express-rate-limit')
const dotenv = require("dotenv");      
dotenv.config();                       

const app=express();
const port=3000;
app.use(express.json())
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
const connectDB=require("./db")
connectDB();
const user=require("./routes/authroute")
app.use("/api/user" , user)

const products=require("./routes/productroute")
app.use("/api/product",products)
 const userdetail=require("./routes/userroutes")
 app.use("/api/userdetail",userdetail)

 const contact=require("./routes/contactroute")
 app.use("/api/user",contact)
app.get("/",(req,res)=>{
            res.send("Homee Pageeee");
})
app.listen(port,()=>{
    console.log("App Started");
})



  //git remote add origin http://github.com/NidaNisar/Jewllery.git