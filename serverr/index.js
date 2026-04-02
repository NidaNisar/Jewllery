const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

const app = express();

// -------------------------
// CORS (VERY IMPORTANT)
// -------------------------

 const allowedorigins=[
  "https://jewllery-alpha.vercel.app",
  "http://localhost:3000"
 ]
app.use(
  cors({
    origin:function(origin ,callback){
      if(!origin)
        return callback(null,true)
      
      if(allowedorigins.includes(origin))
      
        return callback(null,true)

      
      else
        callback(new Error("Not allowed by the CORS"))
      
    },
    credentials:true,
  })
 
   
);

// -------------------------
// STATIC FILES (Images)
// -------------------------
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// -------------------------
// BODY PARSER (ONLY ONCE)
// -------------------------
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// -------------------------
// DATABASE
// -------------------------
const connectDB = require("./db");
connectDB();

// -------------------------
// ROUTES
// -------------------------

// auth
app.use("/api/user", require("./routes/authroute"));

// product (multer inside route)
app.use("/api/product", require("./routes/productroute"));

app.use("/api/userdetail", require("./routes/userroutes"));
app.use("/api/user", require("./routes/contactroute"));
app.use("/api/product", require("./routes/category"));

// -------------------------
// Checkout ROUTES
// -------------------------
         app.use("/api/order",require("././routes/checkoutroute"))


// -------------------------
// HOME ROUTE
// -------------------------
app.get("/", (req, res) => {
  res.send("Jewellery Backend Running ");
});

// -------------------------
// START SERVER (IMPORTANT)
// -------------------------
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
