const joi = require('joi');

const userSchema = async (req, res, next) => {
    const { name, description, picture, email, password } = req.body;

    const schema = joi.object({
        name: joi.string().required().min(3).max(30),
        description: joi.string().required().min(5).max(5000),
        picture: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required().min(6).max(30),
    });

    const { error } = schema.validate({ name, description, picture, email, password });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
};

module.exports = userSchema;