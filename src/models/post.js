const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const getByPartnerId = async (partnerId) => {
    const db = await connection();

    const posts = await db.collection('posts').find({ partnerId }).toArray();

    return posts;
};

const getAll = async () => {
    const db = await connection();

    const posts = await db.collection('posts').find().toArray();

    return posts;
};

const getById = async (id) => {
    const db = await connection();

    const post = await db.collection('posts').findOne({ _id: ObjectId(id) });

    return post;
};

const create = async (post) => {
    const db = await connection();
    
    const { insertedId } = await db.collection('posts').insertOne(post);
    
    const postFound = await getById(insertedId);
    
    return postFound;
};

// update

module.exports = {
    getByPartnerId,
    getAll,
    getById,
    create,
};