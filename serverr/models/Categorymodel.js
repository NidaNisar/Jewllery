const mongoose = require("mongoose");
const crypto = require("crypto");
const { model, Schema } = require("mongoose");
const { type } = require("os");

const Category = new Schema({
  categoryid: {
    type: Number,
    required: [true, "Enter the categoryid"],
    unique: [true, "Categoryid already exist! Enter the another Categoryid"],
  },
  categoryname: {
    type: String,
    required: [true, "Enter the categoryname"],
    unique: [
      true,
      "Categoryname already exist! Enter the another Categoryname",
    ],
  },
});
const CategoryModel = model("Category", Category);
module.exports = CategoryModel;
