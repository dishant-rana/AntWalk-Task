const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

module.exports = client;