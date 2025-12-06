const express = require("express");
const router = express.Router();
const {
  createuser,
  login,
  getalluser,
  protect,
  restrict,
  forgetpassword,
  resetpassword,
  updatepassword,
} = require("./../controller/authcontroller");

router.post("/auth", createuser);
router.post("/login", login);
router.post("/forgetpassword", forgetpassword);
router.patch("/resetpassword/:token", resetpassword);
router.get("/getusers", protect, restrict("admin"), getalluser);
router.patch("/updatepass", protect, updatepassword);
router.get("/admin/check", protect, restrict("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin verified",
  });
});

module.exports = router;
