const mongoose=require('moongoose');
const{model,Schema}=require('moongose');

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
        unique:true,
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