if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
if (process.env.NODE_ENV !== 'production') require('dotenv').config({
  path:`./.${process.env.NODE_ENV}.env`
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.promise = Promise;

const router = require('./routes/api');



mongoose.connect(process.env.DB_URI, function (err) {
  if (!err) {
    console.log(`connected to the Database: ${process.env.DB_URI}`);
  } else {
    console.log(`error connecting to the Database ${err}`);
  }
});

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api', router);

module.exports = app;