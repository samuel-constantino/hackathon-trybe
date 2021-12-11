const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'hackathon';

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'localhost'}:27017/hackathon`;

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let db = null;

// const connection = async () => {
//     if (db) return Promise.resolve(db);

//     const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);

//     db = conn.db(DB_NAME);
    
//     return db;
// };

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
    }).catch((err) => {
        console.error(err);
        console.exit();
    }); 

module.exports = { connection };