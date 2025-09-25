const mongoose = require("mongoose");  

const{model,Schema}=require('mongoose');
const validator = require("validator");
const bycrypt=require("bcryptjs");
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
        unique:[true,"Email already exist! Enter the another e-mail"],
        lowercase:true,
        validate:[validator.isEmail,"Please enter a valid e-mail"]
    },

    password:{
        type:String,
          require:[true,"Please enter your Password"],
          minlength:8,
          select:false
    }

})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password= await bycrypt.hash(this.password,12)
    next();
})


const UserModel=model("User",userSchema);
module.exports=UserModel;