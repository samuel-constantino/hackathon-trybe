const { connection } = require('./connection');

const getAll = async () => {
    const db = await connection();

    const partners = await db.collection('partners').find().toArray();

    return partners;
};

const getById = async (id) => {
    const db = await connection();

    const partner = await db.collection('partners').findOne({ _id: id });

    return partner;
};

const create = async (partner) => {
    const db = await connection();

    const { insertedId } = await db.collection('partners').insertOne(partner);

    const partnerFound = await getById(insertedId);

    return partnerFound;
};

// update

module.exports = {
    getAll,
    getById,
    create,
};
