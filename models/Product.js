const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: String,
  name: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
