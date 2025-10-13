const mongoose = require("mongoose");  
const crypto=require('crypto')
const{model,Schema}=require('mongoose');
const validator = require("validator");
const { stringify } = require("querystring");
const { tmpdir } = require("os");
const contactSchema= new Schema({
     Firstname:{
            type:String,
            require:[true,"Please enter your name"]
            
    
        },
         Lastname:{
            type:String,
            require:[true,"Please enter your name"]
         },
        email:{
            type:String,
            require:[true,"Please enter your email"],
            unique:[true,"Email already exist! Enter the another e-mail"],
            lowercase:true,
            validate:[validator.isEmail,"Please enter a valid e-mail"]
        },
        help:{
            type:String,
            enum:['Refund','Purchase','Repair'],
             require:[true,"Please select an option"],
        },
        message:{
            type:String,
            require:[true,"Please enter the message for you issue"],
        }

})
 const contactModel=model("Cotant",contactSchema)
 module.exports=contactModel;