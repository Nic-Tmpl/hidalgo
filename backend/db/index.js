const { Pool } = require('pg');
const { DB } = require('../config');
const env = process.env.NODE_ENV || 'development';

let db = {
    user: DB.PGUSER,
    host: DB.PGHOST,
    database:DB.PGDATABASE,
    password: DB.PGPASSWORD,
    port: DB.PGPORT,
}

if (env !== 'development') {
    db = {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    };
};

const pool = new Pool(db);
pool.connect();

module.exports = {
    query: (text, params) => pool.query(text, params),
}