const express = require('express');

const loginValid = require('../middlewares/validations/loginValid');
const { loginController } = require('../controllers');

const route = express.Router();

route.post('/', loginValid, loginController.login);

module.exports = route;
