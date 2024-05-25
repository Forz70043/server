
const express = require('express');
require('dotenv').config();
let db = require('./db');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Example server listening on port ${process.env.APP_PORT}`);
})

