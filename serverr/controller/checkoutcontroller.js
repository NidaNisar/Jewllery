const Ordermodel=require('./../models/ordermodel')
const Createorder= async (req,res)=>{
         try {
            const product=Ordermodel.create(req.body);
            res.status(200).json({
                success: true,
                message: "Order is Created",
                product,
              });
         } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
                err: error,
              });
         }
}
module.exports={Createorder}