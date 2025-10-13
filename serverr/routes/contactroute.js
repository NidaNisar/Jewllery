const express=require("express");
const router=express.Router();
const{contact}=require("./../controller/contactController")
const{protect}=require('./../controller/authcontroller')
router.post('/contact',contact)
module.exports=router