/* eslint-disable max-len */
const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'hackathon';

const MONGO_DB_URL = `mongodb+srv://grupo2:${process.env.ATLAS_PASSWORD}@cluster0.htc21.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = async () => {
  if (db) return Promise.resolve(db);

  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);

  db = conn.db(DB_NAME);

  return db;
};

module.exports = { connection };
