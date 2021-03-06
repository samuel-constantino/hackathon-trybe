const postService = require('../services/post');
const { UNAUTHORIZED } = require('../erros');

const getByPartnerId = async (req, res, next) => {
    try {
        const { id: partnerId } = req.params;

        const result = await postService.getByPartnerId(partnerId);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar posts',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getAll = async (_req, res, next) => {
    try {
        const result = await postService.getAll();

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar posts',
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

        const result = await postService.getById(id);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao buscar post',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { grades, userId, comment } = req.body;
        const { id: partnerId } = req.params;
    
        const result = await postService.create({ grades, userId, comment, partnerId });

        if (!result) {
            return res.status(400).json({ message: 'Erro ao cadastrar post' });
        }

        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { id: partnerId } = req.params;
        const { grades, comment } = req.body;
        const { _id: userTokenId, role } = req.user;

        const partnerFound = await postService.getByPartnerId(partnerId);

        if (partnerFound.userId !== userTokenId && role !== 'admin') return UNAUTHORIZED;

        const result = await postService.update({ grades, comment, partnerId });

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao atualizar post',
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id: partnerId } = req.params;
        const { _id: userTokenId, role } = req.user;

        const partnerFound = await postService.getByPartnerId(partnerId);

        if (partnerFound.userId !== userTokenId && role !== 'admin') return UNAUTHORIZED;

        const result = await postService.remove(partnerId);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao remover post',
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
    getByPartnerId,
    create,
    update,
    remove,
};