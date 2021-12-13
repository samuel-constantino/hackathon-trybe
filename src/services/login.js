const jwt = require('jsonwebtoken');

const userModel = require('../models/user');

const { INCORRECT_USERNAME_OR_PASSWORD } = require('../erros');

const { SECRET } = process.env;

const OPTIONS = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const login = async ({ email, password }) => {
    const userFound = await userModel.getByEmail(email);
    
    if (!userFound || userFound.password !== password) {
        return INCORRECT_USERNAME_OR_PASSWORD;
    }

    const { password: passBD, description, picture, ...payload } = userFound;

    const token = jwt.sign({ data: payload }, SECRET, OPTIONS);

    return { token };
};

module.exports = {
    login,
};