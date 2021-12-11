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

module.exports = {
    getAll,
    getById,
    create,
};
