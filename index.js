const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/access_keys');
const PORT = process.env.PORT || 5000;

// connecting to the database
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// adding app to use express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


require('./routes/storeRouter')(app);
require('./routes/orderRouter')(app);

// initializing the server
app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
