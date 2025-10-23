const Product=require("./../models/productmodel")
const Create= async (req,res)=>{

    try {
        const product= await Product.create(req.body);
        res.status(200).json({
            success:true,
            message:"Product is Created"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
}
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteproduct= async (req,res)=>{

    try {
        const{id}=req.params;
        
        
        const product= await Product.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Product is deleted sucessfully"
        })
        if(!product){
          return   res.status(400).json({
            success:false,
            message:"Product not found "
        })
    }
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
}
const updateproduct= async (req,res)=>{

    try {
        const{id}=req.params;
        const { name, price, quantity, photo, categoryid, categoryname } = req.body;
        
        const product= await Product.findByIdAndUpdate(id,{
        name,
        price,
        quantity,
        photo,
        categoryid,
        categoryname,
      }, { new: true, runValidators: true }
     );
       
       
        res.status(200).json({
            success:true,
            message:"Product is updated sucessfully"
        })
        if(!product){
          return   res.status(400).json({
            success:false,
            message:"Product not found "
        })
    }
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message ,
            err:error
           
        })
    }
}
 module.exports={Create,deleteproduct,updateproduct,getAllProducts}