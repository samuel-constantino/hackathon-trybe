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
    // retornar token ao invés do usuário criado
    const userFound = await getById(insertedId);
    
    return userFound;
};

const update = async (user) => {
    const db = await connection();

    const query = { _id: ObjectId(user.id) };

    const { modifiedCount } = await db.collection('users').updateOne(query, { $set: user });

    if (!modifiedCount) {
        return null;
    }

    const userFound = await getById(user.id);

    return userFound;
};

const remove = async (id) => {
    const db = await connection();

    const query = { _id: ObjectId(id) };

    const { deletedCount } = await db.collection('users').deleteOne(query);

    if (!deletedCount) {
        return null;
    }

    return { message: 'Usuário deletado' };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
