const express=require("express");
const router=express.Router();
const {createuser,login, getalluser, protect, restrict,forgetpassword,resetpassword}=require("./../controller/authcontroller");

router.post("/auth", createuser )
router.post("/login",login)
router.post("/forgetpassword",forgetpassword)
router.post("/resetpassword",resetpassword)
router.get("/getusers", protect,restrict('admin'),getalluser)
module.exports=router;