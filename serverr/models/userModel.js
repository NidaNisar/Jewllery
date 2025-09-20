const mongoose=require('moongoose');
const{model,Schema}=require('moongose');

const userSchema=new Schema ({

})


const UserModel=model("User",userSchema);
module.exports=UserModel;