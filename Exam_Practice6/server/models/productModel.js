const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String, 
  imgUrl:String,
  title: String,
  price: Number,
  rate:Number,
},{versionKey:false,timestamps:true});

const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;