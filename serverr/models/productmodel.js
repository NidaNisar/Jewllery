const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const ProductSchema = new Schema({
  productId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Enter the Product Name"],
  },
  price: {
    type: Number,
    required: [true, "Enter the Price"],
  },
  stock: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  photo: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2016/11/18/16/33/jewelry-1839069_1280.jpg",
  },
});


ProductSchema.pre("validate", async function (next) {
  if (!this.productId) {
    const count = await this.constructor.countDocuments();
    const nextNum = count + 1;
    this.productId = nextNum.toString().padStart(3, "0");
  }
  next();
});


const ProductModel = model("Product", ProductSchema);
module.exports = ProductModel;
