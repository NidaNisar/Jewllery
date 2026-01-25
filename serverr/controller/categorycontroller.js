
const CategoryModel = require("../models/Categorymodel");

// get all
const getallcategory = async (req, res) => {
  try {
    const allcategory = await CategoryModel.find();
    if (!allcategory) {
      return res.status(201).json({
        success: true,
        message: "Here is no catagories",
        data: allcategory,
      });
    }
    res.status(200).json({
      success: true,
      count: allcategory.length,
      data: allcategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const createcategory = async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);

    res.status(200).json({
      success: true,
      message: "Category is created",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not created",
      error: error,
    });
  }
};

// update
const updatecategory = async (req, res) => {
  try {
    const { categoryid } = req.params;
    const { categoryname } = req.body;
    const Updateddata = {
      categoryname,
    };
    const updatecategory = await CategoryModel.findOneAndUpdate(
      { categoryid },
      Updateddata,
      { new: true, runValidators: true }
    );

    const allCategories = await CategoryModel.find(); // return array

    res.status(200).json({
      success: true,
      message: "Category updated",
      data: allCategories, // ✔ array
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Category not updated",
      error: error,
    });
  }
};
// delete

const deletecategory = async (req, res) => {
  try {
    const { categoryid } = req.params;

    const deletecategory = await CategoryModel.findOneAndDelete(
      { categoryid },

      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Category is deleted",
      data: deletecategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Category not deleted",
      error: error,
    });
  }
};

module.exports = {
  createcategory,
  updatecategory,
  deletecategory,
  getallcategory,
};
