const { Pool } = require('pg');
const { DB } = require('../config');
const env = process.env.NODE_ENV || 'development';

let connectionString = {
    user: DB.PGUSER,
    host: DB.PGHOST,
    database:DB.PGDATABASE,
    password: DB.PGPASSWORD,
    port: DB.PGPORT,
}

if (env !== 'development') {
    connectionString = {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    };
};

const pool = new Pool(connectionString);

module.exports = {
    query: (text, params) => pool.query(text, params),
}