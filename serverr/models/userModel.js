const mongoose = require("mongoose");  

const{model,Schema}=require('mongoose');
const validator = require("validator");
const userSchema=new Schema ({
    Firstname:{
        type:String,
        require:[true,"Please enter your name"]

    },
     Secondname:{
        type:String,
        require:[true,"Please enter your name"]
     },
    email:{
        type:String,
        require:[true,"Please enter your email"],
        unique:[true,"Enter the another e-mail"],
        lowercase:true,
        validator:[validator.isEmail,"Please enter a valid e-mail"]
    },

    password:{
        type:String,
          require:[true,"Please enter your Password"],
          minlength:8
    }

})


const UserModel=model("User",userSchema);
module.exports=UserModel;