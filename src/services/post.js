const postModel = require('../models/post');
const userModel = require('../models/user');

const getByPartnerId = async (partnerId) => {
    const result = await postModel.getByPartnerId(partnerId);

    return result;
};

const getAll = async () => {
    const result = await postModel.getAll();

    return result;
};

const getById = async (id) => {
    const post = await postModel.getById(id);

    const { userId } = post;

    const { name: userName } = await userModel.getById(userId);

    return { ...post, userName };
};

const create = async (post) => {
    const result = await postModel.create(post);
    
    return result;
};

const update = async (post) => {
    const result = await postModel.update(post);
    
    return result;
};

const remove = async (id) => {
    const result = await postModel.remove(id);
    
    return result;
};

module.exports = {
    getByPartnerId,
    getAll,
    getById,
    create,
    update,
    remove,
};
