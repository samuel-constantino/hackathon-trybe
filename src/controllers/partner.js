const partnerService = require('../services/partner');

const create = async (req, res, next) => {
    try {
        const { title, address, city, state, description, type } = req.body;
        
        // validações
    
        const result = await partnerService.create(
            { title, address, city, state, description, type },
        );

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao cadastrar parceiro',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
};