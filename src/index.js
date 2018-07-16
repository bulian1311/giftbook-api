const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const CONFIG = require('./config/config');

const app = express();

//DB connect
(async () => {
  try {
    await mongoose.connect(
      CONFIG.mongo_db,
      { useNewUrlParser: true }
    );
    console.log('Mongo conect.');
  } catch (err) {
    console.error(err.message);
  }
})();

//Middlewares
app.use('*', cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
require('./routes/index')(app);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(CONFIG.port, () => {
  console.log(`Run on port:${CONFIG.port}`);
});
