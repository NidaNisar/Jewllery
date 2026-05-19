const ProductModel = require("./../models/productmodel");

const Create = async (req, res) => {
  const BASE_URL=process.env.BASE_URL
  // const photo = req.file ? `${BASE_URL}/uploads/${req.file.filename}` : null;
  const photo = req.file
  ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
  : null;
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const categoryid = req.query.categoryid;
    const skip = (page - 1) * limit;
    let filter = {};
    if (categoryid) {
      filter.categoryid = Number(categoryid);
    }
    const total = await ProductModel.countDocuments(filter);
    const products = await ProductModel.find(filter).skip(skip).limit(limit);

    res.status(200).json({
      success: true,
      count: total,
      products,
      page,
      pages: Math.ceil(total / limit),
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
const getbycategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;
    const skip = (page - 1) * limit;
    const { categoryid } = req.params;
    console.log(req.params);

    const total = await ProductModel.countDocuments({ categoryid: categoryid });
    const products = await ProductModel.find({ categoryid: categoryid })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: total,
      products,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  Create,
  deleteproduct,
  updateproduct,
  getAllProducts,
  getbycategory,
};
