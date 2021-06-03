const Product = require('../models/Product');
const util = require('util');

module.exports = app => {
  app.get('/api/products', async (req, res) => {
    const product = await Product.find();

    res.send({ product });
  });

  app.post('/api/orders', async (req, res) => {
    console.log(req.body);
    res.send('a');
  });
};
