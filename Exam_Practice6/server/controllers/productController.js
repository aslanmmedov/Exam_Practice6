const ProductModel = require("../models/productModel");


const GetAllProduct =  async (req, res) => {
    try {
        const data = await ProductModel.find({});
        res.status(200).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(404).json({message:"Not Found"});
    }
  }
  const GetDataById =  async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ProductModel.findById(id);
        res.status(200).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(404).json({message:"Not Found"});
    }
  }
  const AddData =  async (req, res) => {
    try {
        const data = ProductModel({...req.body});
       await data.save();
        res.status(201).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(400).json({message:"Bad Request"});
    }
  }
  const DeleteDataById =  async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({data:data,message:"Succesfully Deleted"});
    } catch (error) {
        res.status(404).json({message:"Not Found"});
    }
  }

  module.exports = {
    GetAllProduct,
    GetDataById,
    AddData,
    DeleteDataById,
  }