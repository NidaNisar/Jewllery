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
    },
     passwordChangedAt: {
    type: Date   
  }

})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password= await bycrypt.hash(this.password,12)
      this.passwordChangedAt = Date.now() - 1000
    next();
})
userSchema.methods.passwordchanged= async function(JWTtimestamp){
    if(this.passwordchangedat)
    {
        const passwordchangedtimestamp=parseInt(this.passwordchanged.gettime()/1000,10);
        console.log(passwordchangedtimestamp,passwordchanged)
        return JWTtimestamp<passwordchangedtimestamp;

    }
    return false

}


const UserModel=model("User",userSchema);
module.exports=UserModel;