const express=require("express");
const router=express.Router();
const {createuser,login, getalluser, protect, restrict}=require("./../controller/authcontroller");

router.post("/auth", createuser )
router.post("/login",login)
router.get("/getusers", protect,restrict('admin'),getalluser)
module.exports=router;