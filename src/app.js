const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const dashInfoRouter = require('./routes/dashInfoRouter');

app.use('/', index);
app.use('/api/data', dashInfoRouter);

module.exports = app;
