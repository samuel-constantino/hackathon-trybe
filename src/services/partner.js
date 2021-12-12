const partnerModel = require('../models/partner');
const postsModel = require('../models/post');

const getAvgRating = (posts) => {
    const gradesAll = posts.map(({ grades }) => grades);

    const gradesArray = Object.values(gradesAll);
    console.log(gradesArray);
    const avgRating = gradesAll.reduce((acc, curr) => acc + curr, 0) / gradesAll.length;

    return avgRating;
};

const getPartnersWithPostsAndAvgRating = (partners) => {
    const partnersWithPostsAndAvgRating = partners.map((partner) => {
        const partnerWithPostsAndAvgRating = partner;

        partnerWithPostsAndAvgRating.avgRating = getAvgRating(partner.posts);

        return partnerWithPostsAndAvgRating;
    });

    return partnersWithPostsAndAvgRating;
};

const getPartnersWithPosts = (partners, posts) => {
    const partnersWithPosts = partners.map((partner) => {
        const partnerWithPosts = partner;

        partnerWithPosts.posts = posts.filter((post) => {
            const { _id: partnerId } = partner;

            return post.partnerId === partnerId.toString();
        });

        return partnerWithPosts;
    });

    return partnersWithPosts;
};

const getAll = async () => {
    const partners = await partnerModel.getAll();

    const posts = await postsModel.getAll();

    const partnersWithPosts = getPartnersWithPosts(partners, posts);

    const partnersWithPostsAndAvgRating = getPartnersWithPostsAndAvgRating(partnersWithPosts);

    return partnersWithPostsAndAvgRating;
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
