const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

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

require('./routes/storeRouter')(app);

// initializing the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
