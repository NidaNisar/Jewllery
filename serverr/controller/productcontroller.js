const ProductModel = require("./../models/productmodel");

const Create= async (req,res)=>{

    try {
        const product= await ProductModel.create(req.body);
        res.status(200).json({
            success:true,
            message:"Product is Created",
           product,
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
    const products = await ProductModel.find();
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
const deleteproduct = async (req, res) => {
  try {
    const { productId } = req.params;

    
    const product = await ProductModel.findOneAndDelete({ productId });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    console.log("DELETE route hit! productId =", req.params.productId);


    
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};

const updateproduct= async (req,res)=>{

    try {
        const{productId}=req.params;
        const { name, price,stock, photo} = req.body;
        
        const product= await ProductModel.findOneAndUpdate({productId},{
        name,
        price,
        stock,
        photo,
       
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