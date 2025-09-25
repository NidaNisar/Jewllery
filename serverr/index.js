const express=require("express");

const app=express();
const port=3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const coonecttomongo=require("./db")
coonecttomongo();
const user=require("./routes/authroute")
app.use("/api/user" , user)

app.get("/",(req,res)=>{
            res.send("Homee Pageeee");
})
app.listen(port,()=>{
    console.log("App Started");
})



  //git remote add origin http://github.com/NidaNisar/Jewllery.git