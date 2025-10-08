const express=require("express");
const router=express.Router();
const {updatepassword,updateme,deleteme}=require("./../controller/usercontroller");
const{protect}=require('./../controller/authcontroller')


router.patch("/updatepass",protect,updatepassword)
router.patch("/updateme",protect,updateme)
router.delete("/deleteme",protect,deleteme)
module.exports=router;