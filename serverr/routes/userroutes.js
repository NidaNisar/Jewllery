const express=require("express");
const router=express.Router();
const {updatepassword,updateme}=require("./../controller/usercontroller");
const{protect}=require('./../controller/authcontroller')


router.patch("/updatepass",protect,updatepassword)
router.patch("/updateme",protect,updateme)
module.exports=router;