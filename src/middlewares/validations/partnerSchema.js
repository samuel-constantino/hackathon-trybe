const joi = require('joi');

const userSchema = async (req, res, next) => {
    const { title, address, city, state, picture, description, type } = req.body;

    const schema = joi.object({
        title: joi.string().required().min(3).max(50),
        address: joi.string().required().min(3).max(50),
        city: joi.string().required().min(3).max(50),
        state: joi.string().required().min(2).max(50),
        picture: joi.string().required().min(3).max(50),
        description: joi.string().required().min(50).max(5000),
        type: joi.string().required().min(3).max(50),
    });

    const { error } = schema.validate({ title, address, city, state, picture, description, type });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
};

module.exports = userSchema;