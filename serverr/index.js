const express=require("express");
const app=express();
const port=3000;

const coonecttomongo=require("./db")
coonecttomongo();
app.get("/",(req,res)=>{
            res.send("Homee Pageeee");
})
app.listen(port,()=>{
    console.log("App Started");
})