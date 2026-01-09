const express = require("express");
const router = express.Router();
const upload = require("./../middleware/Upload.js");
const { restrict } = require("../controller/authcontroller");
const {
  Create,
  deleteproduct,
  updateproduct,
  getAllProducts,
  getbycategory,
} = require("./../controller/productcontroller");
router.post(
  "/createproduct",

  upload.single("image"),
  Create
);
router.delete("/deleteproduct/:productId", deleteproduct);

router.patch(
  "/update/:productId",

  upload.single("image"),
  updateproduct
);
router.get("/getallproducts", getAllProducts);
router.get("/getbycategory/:categoryid", getbycategory);

module.exports = router;
