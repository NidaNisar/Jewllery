const express = require("express");
const router = express.Router();
const { restrict } = require("../controller/authcontroller");
const {
  createcategory,
  updatecategory,
  deletecategory,
  getallcategory,
} = require("./../controller/categorycontroller");
router.get("/getcategory", getallcategory);
router.post("/addcategory", createcategory);
router.patch("/updatecategory/:categoryid", updatecategory);
router.delete("/deletecategory/:categoryid", deletecategory);

module.exports = router;
