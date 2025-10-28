const mongoose = require("mongoose");  
const crypto=require('crypto')
const{model,Schema}=require('mongoose');
const { type } = require("os");
const { categories } = require("../../client/src/productjson");
 const Category= new Schema({
    
  categoryid:{
    type:Number,
    required: [true, "Enter the categoryid"],
     
  },
  categoryname:{
    type:String,
     required: [true, "Enter the categoryname"],

  }
  
 
  
 
  
 
});