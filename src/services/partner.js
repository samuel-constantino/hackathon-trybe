/* eslint-disable camelcase */
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const partnerModel = require("../models/partner");
const postsModel = require("../models/post");

const getAvgRating = (posts) => {
  const gradesAll = posts.map(({ grades }) => grades);

  const gradesArray = Object.values(gradesAll);
  const avgs = [0, 0, 0, 0, 0];

  for (let i = 0; i < gradesArray.length; i += 1) {
    avgs[0] += gradesArray[i].distancingAviability;
    avgs[1] += gradesArray[i].alcoholAviability;
    avgs[2] += gradesArray[i].cleanliness;
    avgs[3] += gradesArray[i].maskUsage;
  }

  const avgRating =
    (avgs[0] + avgs[1] + avgs[2] + avgs[3]) / (gradesArray.length * 4);

  return {
    avgTotal: avgRating.toFixed(1),
    avgDistancingAviability: (avgs[0] / posts.length).toFixed(1),
    avgAlcoholAviability: (avgs[1] / posts.length).toFixed(1),
    avgCleanliness: (avgs[2] / posts.length).toFixed(1),
    avgMaskUsage: (avgs[3] / posts.length).toFixed(1),
  };
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

  const partnersWithPostsAndAvgRating =
    getPartnersWithPostsAndAvgRating(partnersWithPosts);

  return partnersWithPostsAndAvgRating;
};

const getById = async (id) => {
  const partner = await partnerModel.getById(id);

  const posts = await postsModel.getAll();

  const partnerWithPosts = getPartnersWithPosts([partner], posts);

  const partnerWithPostsAndAvgRating =
    getPartnersWithPostsAndAvgRating(partnerWithPosts);

  return partnerWithPostsAndAvgRating[0];
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const create = async (partner) => {
  try {
    const picUrl = await cloudinary.uploader.upload(partner.picture);
    partner.picture = picUrl.secure_url;
    const result = await partnerModel.create(partner);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const update = async (partner) => {
  const partnerUpdated = await partnerModel.update(partner);

  const { posts, avgRating, id, ...rest } = partnerUpdated;

  return rest;
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
