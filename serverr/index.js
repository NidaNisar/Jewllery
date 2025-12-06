const express = require("express");
const rate_limit = require("express-rate-limit");
const dotenv = require("dotenv");
const path = require("path");
// const cors = require("cors");
// app.use(cors());

dotenv.config();

const app = express();
const port = 3000;

// -------------------------
// STATIC FILES
// -------------------------
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.static("./public"));
// -------------------------
// JSON BODY (AFTER file upload routes)
// -------------------------
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
// -------------------------
// DATABASE
// -------------------------
const connectDB = require("./db");
connectDB();

// -------------------------
//  ROUTES BEFORE BODY PARSER
// (Important: file upload routes first)
// -------------------------

// authentication
app.use("/api/user", require("./routes/authroute"));

// product route contains multer middleware (upload.single("photo"))
// so it MUST be before express.json()
app.use("/api/product", require("./routes/productroute"));

app.use("/api/userdetail", require("./routes/userroutes"));
app.use("/api/user", require("./routes/contactroute"));
app.use("/api/product", require("./routes/category"));

// -------------------------
// JSON BODY (AFTER file upload routes)
// -------------------------
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// -------------------------
// HOME ROUTE
// -------------------------
app.get("/", (req, res) => {
  res.send("Home Page");
});

// -------------------------
// START SERVER
// -------------------------
app.listen(port, () => {
  console.log(`App Started on ${port}`);
});
