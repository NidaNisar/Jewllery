const express=require("express");
const router=express.Router();
const{Create,deleteproduct,updateproduct,getAllProducts}=require("./../controller/productcontroller")
 router.post('/createproduct',Create)
  router.delete('/deleteproduct/:productId',deleteproduct)
  router.patch('/update/:productId',updateproduct)
  router.get('/getallproducts',getAllProducts)

  module.exports=router