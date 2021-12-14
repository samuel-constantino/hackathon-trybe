const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const getAll = async () => {
    const db = await connection();

    const partners = await db.collection('partners').find().toArray();

    return partners;
};

const getById = async (id) => {
    const db = await connection();

    const partner = await db.collection('partners').findOne({ _id: ObjectId(id) });

    return partner;
};

const create = async (partner) => {
    const db = await connection();
    
    const { insertedId } = await db.collection('partners')
        .insertOne({ ...partner, posts: [], avgRating: {} });
    
    const partnerFound = await getById(insertedId);
    
    return partnerFound;
};

const update = async (partner) => {
    const db = await connection();

    const query = { _id: ObjectId(partner.id) };

    const { modifiedCount } = await db.collection('partners').updateOne(query, { $set: partner });

    if (!modifiedCount) {
        return null;
    }

    const partnerFound = await getById(partner.id);

    return partnerFound;
};

const remove = async (id) => {
    const db = await connection();

    const query = { _id: ObjectId(id) };

    const { deletedCount } = await db.collection('partners').deleteOne(query);

    if (!deletedCount) {
        return null;
    }

    return { message: 'Parceiro removido' };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
