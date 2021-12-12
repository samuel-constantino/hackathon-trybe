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

const create = async (user) => {
    const userCreated = await userModel.create(user);

    const { password, ...userWithoutPassword } = userCreated;
    
    return userWithoutPassword;
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
