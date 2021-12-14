/* eslint-disable camelcase */
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const userModel = require('../models/user');

const getAll = async () => {
  const users = await userModel.getAll();

  const usersWhitoutPassword = users.map((user) => {
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  });

  return usersWhitoutPassword;
};

const getById = async (id) => {
  const user = await userModel.getById(id);

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const create = async (user) => {
  try {
    const picUrl = await cloudinary.uploader.upload(user.picture);
    user.picture = picUrl.secure_url;
    const userCreated = await userModel.create(user);
    const { password, ...userWithoutPassword } = userCreated;
    return userWithoutPassword;
  } catch (error) {
    console.log(error);
  }
};

const update = async (user) => {
  const userUpdated = await userModel.update(user);

  if (!userUpdated) return null;

  const { password, ...userWithoutPassword } = userUpdated;

  return userWithoutPassword;
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
