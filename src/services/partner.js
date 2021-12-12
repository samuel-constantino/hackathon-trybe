const partnerModel = require('../models/partner');
const postsModel = require('../models/post');

const addPosts = (posts) => {
    
};

const getAll = async () => {
    const partners = await partnerModel.getAll();

    const posts = await postsModel.getAll();

    partners.forEach((partner) => {
        partner.posts = posts.filter((post) => {
            const { _id: partnerId } = partners;
            return post.partnerId === partnerId.toString();
        });
    });

    return partners;
};

const getById = async (id) => {
    const result = await partnerModel.getById(id);

    return result;
};

const create = async (partner) => {
    const result = await partnerModel.create(partner);
    
    return result;
};

const update = async (partner) => {
    const result = await partnerModel.update(partner);

    return result;
};

const remove = async (id) => {
    const result = await partnerModel.remove(id);

    return result;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
