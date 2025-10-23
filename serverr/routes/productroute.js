const express=require("express");
const router=express.Router();
const{Create,deleteproduct,updateproduct,getAllProducts}=require("./../controller/productcontroller")
 router.post('/createproduct',Create)
  router.delete('/delete/:id',deleteproduct)
  router.patch('/update/:id',updateproduct)
  router.get('/getallproducts',getAllProducts)

  module.exports=router