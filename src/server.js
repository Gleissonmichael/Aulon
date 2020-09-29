require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect( process.env.DB_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})



app.use(express.json());
app.use(routes);

app.listen(process.env.PORT||8080);
