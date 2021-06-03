const Product = require('../models/Product');
const PlaceOrder = require('../models/PlaceOrder');
const util = require('util');

module.exports = app => {
  app.get('/api/products', async (req, res) => {
    const product = await Product.find();

    res.send({ product });
  });

  app.post('/api/orders', async (req, res) => {
    const val = req.body.total + parseInt(req.body.addedPrice);

    const placeOrder = await PlaceOrder({
      fullGas: req.body.fullGas,
      regularGas: req.body.regularGas,
      DeliverOrTakeout: req.body.DeliveryOrTakeout,
      price: val,
      dateCreated: Date.now(),
    });

    placeOrder.save();
  });
};
