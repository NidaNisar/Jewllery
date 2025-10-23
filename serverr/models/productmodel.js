const mongoose = require("mongoose");  
const crypto=require('crypto')
const{model,Schema}=require('mongoose');
 const Product= new Schema({
    productId: {
    type: String,
    required: true,
    unique: true, 
  },
  name: {
    type: String,
    required: true,
  },
  price: {
     type: Number,
    required: true,
  },
  categoryid:{
    type:Number,
    required:true
  },
   categoryname:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    default:1
  },
   photo: {
    type: String, 
     default: "https://cdn.pixabay.com/photo/2016/11/18/16/33/jewelry-1839069_1280.jpg", 
  },
  
 
});
Product.pre("save", async function (next) {
  if (!this.productId) {
   
    const count = await this.constructor.countDocuments(); 
    const nextNum = count + 1;
    this.productId = `${nextNum.toString().padStart(3, "0")}`; 
  }
  next();
});
 

 const Productmodel= model("product",Product)
 module.exports=Productmodel