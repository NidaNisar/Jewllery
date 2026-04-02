const express=require("express");
const router=express.Router()
const {Createorder}=require('./../controller/checkoutcontroller')
router.post("/addcheckout",Createorder)

module.exports = router;