const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const getAll = async () => {
    const db = await connection();

    const users = await db.collection('users').find().toArray();

    return users;
};

const getById = async (id) => {
    const db = await connection();

    const user = await db.collection('users').findOne({ _id: ObjectId(id) });

    return user;
};

const create = async (user) => {
    const db = await connection();
    
    const { insertedId } = await db.collection('users').insertOne(user);
    
    const userFound = await getById(insertedId);
    
    return userFound;
};

// update

module.exports = {
    getAll,
    getById,
    create,
};
