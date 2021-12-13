const partnerService = require('../services/partner');

const getAll = async (req, res, next) => {
    try {
        const result = await partnerService.getAll();

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar parceiros',
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

        const result = await partnerService.getById(id);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar parceiro',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { title, address, city, state, picture, description, type } = req.body;
    
        const result = await partnerService.create(
            { title, address, city, state, picture, description, type },
        );

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao cadastrar parceiro',
            });
        }

        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, address, city, state, picture, description, type } = req.body;

        const result = await partnerService.update(
            { id, title, address, city, state, picture, description, type },
        );

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao atualizar parceiro',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await partnerService.remove(id);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao remover parceiro',
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
    update,
    remove,
};