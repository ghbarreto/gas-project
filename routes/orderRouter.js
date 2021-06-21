const PlaceOrder = require('../models/PlaceOrder');

module.exports = app => {
  app.get('/api/orders', async (req, res) => {
    const product = await PlaceOrder.find();

    res.send({ product });
  });

  app.post('/api/orders/confirm/:id', async (req, res) => {
    const val = req.body.total + parseInt(req.body.addedPrice);
    console.log(val);
    res.send('hi');
  });
};
