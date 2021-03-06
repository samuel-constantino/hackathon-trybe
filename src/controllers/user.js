const { userService } = require('../services');

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
        console.log(req.params);
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
        const { name, description, picture, email, password } = req.body;
    
        const result = await userService.create(
            { name, description, picture, email, password, role: 'user' },
        );

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao cadastrar usuario',
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
        const { name, description, picture, email, password } = req.body;
        const { _id: userTokenId, role } = req.user;

        const userFound = await userService.getById(id);
        
        const { _id: userFoundId } = userFound;

        if (userFoundId.toString() !== userTokenId && role !== 'admin') {
            return res.status(401).json({ message: 'Não autorizado.' });
        }
        
        const result = await userService
            .update({ id, name, description, picture, email, password });

        if (!result) {
            return res.status(400).json({ message: 'Erro ao atualizar usuario' });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { _id: userTokenId, role } = req.user;

        const userFound = await userService.getById(id);
        
        const { _id: userFoundId } = userFound;

        if (userFoundId.toString() !== userTokenId && role !== 'admin') {
            return res.status(401).json({ message: 'Não autorizado.' });
        }

        const result = await userService.remove(id);

        if (!result) {
            return res.status(400).json({
                message: 'Erro ao remover usuario',
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