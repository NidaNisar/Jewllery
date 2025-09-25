const express=require("express");
const router=express.Router();
const {createuser,login, getalluser, protect}=require("./../controller/authcontroller");

router.post("/auth", createuser )
router.post("/login",login)
router.get("/getusers", protect,getalluser)
module.exports=router;