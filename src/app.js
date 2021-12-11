const express = require('express');

const { userRouter, partnerRouter, postRouter } = require('./routers');
const error = require('./middlewares/error');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/partner', partnerRouter);

app.use('/post', postRouter);

app.use(error);

module.exports = app;