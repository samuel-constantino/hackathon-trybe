const express = require('express');

const userRouter = require('./routers/user');
const error = require('./middlewares/error');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/', userRouter);

app.use(error);

module.exports = app;