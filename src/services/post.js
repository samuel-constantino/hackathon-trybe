const postModel = require('../models/post');

const getByPartnerId = async (partnerId) => {
    const result = await postModel.getByPartnerId(partnerId);

    return result;
};

const getAll = async () => {
    const result = await postModel.getAll();

    return result;
};

const getById = async (id) => {
    const result = await postModel.getById(id);

    return result;
};

const create = async (post) => {
    const result = await postModel.create(post);
    
    return result;
};

const update = async (post) => {
    const result = await postModel.update(post);
    
    return result;
};

module.exports = {
    getByPartnerId,
    getAll,
    getById,
    create,
    update,
};
