const partnerModel = require('../models/partner');

const getAll = async () => {
    const result = await partnerModel.getAll();

    return result;
};

const getById = async (id) => {
    const result = await partnerModel.getById(id);

    return result;
};

const create = async (partner) => {
    const result = await partnerModel.create(partner);
    
    return result;
};

module.exports = {
    getAll,
    getById,
    create,
};
