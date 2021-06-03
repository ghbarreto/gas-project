const mongoose = require('mongoose');

const placeOrderSchema = new mongoose.Schema({
  fullGas: Number,
  regularGas: Number,
  DeliverOrTakeout: String,
  price: Number,
  dateCreated: { type: Date, default: Date.now() },
});

const PlaceOrder = mongoose.model('place_order', placeOrderSchema);

module.exports = PlaceOrder;
