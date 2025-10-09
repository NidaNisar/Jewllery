    const mongoose = require('mongoose');
       const dotenv=require("dotenv");
       dotenv.config();
    const connectDB = async () => {
      try { 
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log('MongoDB connected successfully!');
      } catch (err) {
        console.error('MongoDB connection error:', err.message);
        
      }
    };

    module.exports = connectDB;