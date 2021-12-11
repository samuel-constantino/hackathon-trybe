const userService = require('../services/partner');

const getAll = async (_req, res, next) => {
    try {
        const result = await userService.getAll();

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar usuários',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await userService.getById(id);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar usuario',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { name, description, email, password } = req.body;

        // validações
    
        const result = await userService.create(
            { name, description, email, password },
        );

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao cadastrar usuario',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
};