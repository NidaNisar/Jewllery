const mongoose=require('mongoose')
const { isNumeric } = require('validator')
const {Schema,model}=mongoose
const Orderschema=new Schema({ 
    Fullname:{
        type:String,
        required: [true, "Enter the full Name"],
    },
    email:{
        type:String,
       required: [true, "Enter your email"],
       lowercase:true,

    },
    phonenumber:{
        type:Number,
        required: [true, "Enter your phone number"],

    },
    address:{
        type:String,
        required: [true, "Enter your address"],

    },
    products:[
        {
            product:{
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity:{
                type:Number,
                required:[true,"Enter the quantity of the product"]
            },
            price:{
                type:Number,
                required:[true,"Enter the price of the product"]
            },
           
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
      },
  
      status: {
        type: String,
        default: "Pending",
      },



}, {timestamps:true})
module.exports = model("Order", Orderschema);