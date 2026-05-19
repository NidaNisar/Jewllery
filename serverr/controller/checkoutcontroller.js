const Ordermodel=require('./../models/ordermodel')
const Createorder= async (req,res)=>{
         try {
            const orderproduct= await Ordermodel.create(req.body);
            res.status(200).json({
                success: true,
                message: "Order is Created",
                orderproduct,
              });
         } catch (error) {
            res.status(400).json({ 
                success: false,
                message: error.message,
                err: error,
              });
         }
}

const getallorder= async (req,res)=>{
         try {
            const allorderproduct= await Ordermodel.find().populate("products.product");
          if  (!allorderproduct){
               return res.status(404).json({
                success: false,
                message: "Order is not found",
                allorderproduct,
              });
         }
           res.status(200).json({
                success: true,
                message: "Order is found",
                allorderproduct,            
              });
         } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                err: error,
              });
         }
}

module.exports={Createorder,getallorder}