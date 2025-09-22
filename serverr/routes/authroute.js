const express=require("express");
const router=express.Router();
const {createuser}=require("./../controller/authcontroller");

router.post("/auth", createuser )
module.exports=router;