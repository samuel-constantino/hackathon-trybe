const userModel = require('../models/user');

const getAll = async () => {
    const result = await userModel.getAll();

    return result;
};

const getById = async (id) => {
    const result = await userModel.getById(id);

    return result;
};

const create = async (user) => {
    const result = await userModel.create(user);
    
    return result;
};

const update = async (user) => {
    const result = await userModel.update(user);

    return result;
};

const remove = async (id) => {
    const result = await userModel.remove(id);

    return result;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
