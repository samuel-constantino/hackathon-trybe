const { StatusCodes } = require('http-status-codes');

const { loginService } = require('../services');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const result = await loginService.login({ email, password });
        
        if (result.status) {
            const { status, message } = result;
            return res.status(status).json({ message });
        }
        
        return res.status(StatusCodes.OK).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    login,
};