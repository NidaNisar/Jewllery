const ProductModel = require("./../models/productmodel");

const Create = async (req, res) => {
  const photo = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const products = await ProductModel.create({ ...req.body, photo });
    res.status(200).json({
      success: true,
      message: "Product is Created",
      products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};
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

const updateproduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, stock, categoryid } = req.body;
    let photopath;
    if (req.file) {
      photopath = `/uploads/${req.file.filename}`;
    }
    const Updateddata = {
      name,
      price,
      stock,
      categoryid,
    };
    if (photopath) {
      Updateddata.photo = photopath;
    }
    const product = await ProductModel.findOneAndUpdate(
      { productId },
      Updateddata,

      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product not found ",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product is updated sucessfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};
module.exports = { Create, deleteproduct, updateproduct, getAllProducts };
