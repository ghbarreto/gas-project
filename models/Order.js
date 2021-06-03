const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: String,
  name: String,
  telephoneNumber: Number,
  price: Number,
  gasAmount: Number,
  dateCreated: Date.now(),
  totalToPay: Number,
});

const Product = mongoose.model("order", orderSchema);

module.exports = Product;
