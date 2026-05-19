const express=require("express");
const router=express.Router()
const {Createorder, getallorder}=require('./../controller/checkoutcontroller')
router.post("/addcheckout",Createorder)
router.get("/getallorder",getallorder)
module.exports = router;