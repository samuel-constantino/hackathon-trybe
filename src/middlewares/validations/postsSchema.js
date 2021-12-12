const joi = require('joi');

const userSchema = async (req, res, next) => {
    const { grades, userId, comment } = req.body;
    const { id: partnerId } = req.params;

    const schema = joi.object({
        // adicionar restrição para grades => 5
        grades: joi.object({
            distancingAviability: joi.number().required(),
            alcoholAviability: joi.number().required(),
            cleanliness: joi.number().required(),
            maskUsage: joi.number().required(),
        }).required(),
        userId: joi.string().required(),
        comment: joi.string().required().min(10).max(200),
        partnerId: joi.string().required(),
    });

    const { error } = schema.validate({ grades, userId, comment, partnerId });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
};

module.exports = userSchema;