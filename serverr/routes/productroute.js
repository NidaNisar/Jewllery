const express = require("express");
const router = express.Router();
const upload = require("./../middleware/Upload.js");
const {
  Create,
  deleteproduct,
  updateproduct,
  getAllProducts,
} = require("./../controller/productcontroller");
router.post("/createproduct", upload.single("image"), Create);
router.delete("/deleteproduct/:productId", deleteproduct);
router.patch("/update/:productId", updateproduct);
router.get("/getallproducts", getAllProducts);

module.exports = router;
