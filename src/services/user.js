const userModel = require('../models/partner');

const getAll = async () => {
    const result = await userModel.getAll();

    return result;
};

const getById = async (id) => {
    const result = await userModel.getById(id);

    return result;
};

const create = async (partner) => {
    const result = await userModel.create(partner);
    
    return result;
};

module.exports = {
    getAll,
    getById,
    create,
};
